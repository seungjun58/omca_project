from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import cx_Oracle
import pandas as pd
from tqdm import tqdm
from keras.models import load_model
from datetime import datetime

# import random
# from random import sample
# import numpy as py
# from sklearn.decomposition import PCA
# from sklearn.preprocessing import LabelEncoder
# from keras.utils import np_utils
# from keras.models import Sequential
# from keras.layers import Dense


app = Flask(__name__)


CORS(app)


global api_key
api_key = 'RGAPI-5e0111b2-217a-4486-aa6b-57475d923dcc'

global lol_api_key
lol_api_key = 'RGAPI-7886342b-9cce-41c2-9c3a-d318fdd9004a'


@app.route('/', methods = ["GET", "POST"])
def home():
    return 'hello'


@app.route('/multi', methods = ["GET", "POST"])
def multi_search_request():
    global value
    if request.method == 'POST':
        value = request.json
        print(value)
        print(len(value))
    tmp=[]
    for i in range(len(value)):
        tmp.append(value['summoner'+str(i+1)])
    print(tmp)
    a = multi_search(tmp)
    print('a: ', a)
    b = jsonify(a)
    print(b)
    return b


@app.route('/ai', methods = ["GET", "POST"])
def get_tier_data_tojs():
    global value
    if request.method == 'POST':
        value = request.json
        print(value)
        summonername = value["summoner"]
        encrypted_id = get_encrypted_id(summonername)
        tier_dict = get_tier(encrypted_id)
        print("tier_dict",tier_dict)
        tier_dict['predict_tier'] = ai_get_db_make_df(summonername)
        a = jsonify(tier_dict)

        print(a)

    return a


@app.route("/get_tier", methods = ["GET", "POST"])
def get_tier_by_lol_api():
    global value
    if request.method == 'POST':
        value = dict(request.form)
        print(value)
        summonername = value["sid"]
        encrypted_id = get_encrypted_id(summonername)
        a = jsonify(get_tier(encrypted_id))

        print(a)

    return a


@app.route("/test", methods = ["GET", "POST"])
def conn_test():
    global value
    if request.method == 'POST':
        value = dict(request.form)
        print(value)
        gameid = value['value']
        puuid = str(get_puuid(gameid))
        matchId_list = get_list_of_matchIds(puuid, 10)
        matches_timelines = get_matches_timelines(matchId_list)
        q = get_match_timeline_df(matches_timelines)
        w = jsonify(q)
        # print(b)
    return w


@app.route("/zz", methods = ["GET", "POST"])
def conn_test1():
    global value

    if request.method == 'POST':
        value = dict(request.form)
        print(value)
        gameid = value['value']

        query = (
            f" select * from (select gameid, teamid, participantid, summonername, win, teamposition, championname,"
            f" champ_id, queue_id,round((kills+assists) / decode(deaths, 0, 1, deaths), 2) as kda, kills,deaths, assists,"
            f" round((kills + assists) / kills_all_team, 2) as involvementRate, rune_main_id,rune_sub_style_id, spell_id_d,"
            f" spell_id_f, item_id, item_id2, item_id3, item_id4, item_id5, item_id6,item_id7, champlevel, gold, cs,"
            f" round(cs / (gameduration / 60), 1) as cpm,floor(gameduration / 60) as minute, gameduration - floor(gameduration / 60) * 60 as second,"
            f" gamestarttimestamp, gameendtimestamp, visionwardsboughtingame, wardsplaced, wardskilled,totaldamagedealttochampions, totaldamagetaken"
            f" FROM match WHERE GAMEID IN(SELECT gameid FROM match WHERE summonername = \'{gameid}\') "
            f" order by gameid desc, participantid asc) where rownum <= 100 "
        )
        db_open()
        a = sql_execute(query)
        db_close()
        b = make_str_time_from_df(a)
        c = make_list_of_dict(b)
        d = jsonify(c)
        print(d)
    return d


@app.route("/synergy", methods = ["GET", "POST"])
def conn_test2():
    global value

    if request.method == 'POST':
        value = dict(request.form)
        print(value)
        syn = value['value']

        query = (
            f" select a.* from (select * from {syn} order by win_rate desc) a "
            f" where rownum < 50"
        )
        db_open()
        a = sql_execute(query)
        db_close()
        b = make_list_of_dict(a)
        print(b)
        c = jsonify(b)
        print(c)
    return c


def db_open():
    global db
    global cursor
    try:
        cx_Oracle.init_oracle_client(lib_dir=r"C:\oraclexe\app\oracle\instantclient_21_6")
        db = cx_Oracle.connect(user='ADMIN', password='Dltmdwls12!@', dsn='DB20220623152827_high')
        cursor = db.cursor()
        print('open!')
    except:
        db = cx_Oracle.connect(user='ADMIN', password='Dltmdwls12!@', dsn='DB20220623152827_high')
        cursor = db.cursor()
        print('open!')


def db_open_local():
    global db
    global cursor
    db = cx_Oracle.connect(user='yw', password='1111', dsn=cx_Oracle.makedsn('localhost', 1521, 'xe'))
    cursor = db.cursor()
    print('open!')


def sql_execute(q):
    global db
    global cursor
    try:
        if 'select' in q:
            df = pd.read_sql(sql=q, con=db)
            return df
        cursor.execute(q)
        return 'success!'
    except Exception as e:
        print(e)


def db_close():
    global db
    global cursor
    try:
        db.commit()
        cursor.close()
        db.close()
        return 'close!'
    except Exception as e:
        print(e)


def get_avg_value (i ,df, tier, lane):
    col_name=df.columns[i+2]
    tier_tmp_df = df[df['TIER']==tier.upper()]
    lane_tmp_df = tier_tmp_df[tier_tmp_df['TEAMPOSITION']==lane.upper()]
    return lane_tmp_df.iloc[0][col_name]


def get_encrypted_id(summonername):
    url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonername + "?api_key=" + lol_api_key
    res = requests.get(url).json()
    encrypted_id = res['id']
    return encrypted_id


def get_tier(encrypted_id):
    url = "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" + encrypted_id + "?api_key=" + lol_api_key
    res = requests.get(url).json()
    res_dict = {'tier':res[0]['tier'],'rank':res[0]['rank']}
    return res_dict


def ai_get_db_make_df(summonername):
    query = (
            f' select * from match '
            f' where gameid IN (select gameid from match '
            f' where summonername = \'{summonername}\') ORDER BY GAMEID '
            )
    db_open()
    df = sql_execute(query)
    db_close()
    tier = str(make_result_of_test_df(df))
    return tier


def multi_search(summoner_list):
    graph_dict = {}

    for summonername in summoner_list:
        encrypted_id = get_encrypted_id(summonername)
        tier_dict = get_tier(encrypted_id)

        temp_dict = {}
        db_open()
        #db_open_local()
        query = (
            f'select gameid,summonername,tier,teamposition, '
            f'ROUND(rc.gold/(rc.gameduration/60)) as gold_per_min, '
            f'ROUND((rc.totaldamagedealttochampions+rc.totaldamagetaken)/(rc.gameduration/60)) as deal_per_min, '
            f'ROUND(rc.deaths/(rc.gameduration/60),4) as deaths_per_min, '
            f'ROUND(rc.visionscore/(rc.gameduration/60),4) as vscore_per_min,G15, '
            f'gameEndTimestamp,kills,deaths,assists,champ_name_kr,championname,win '
            f'from rc '
            f'where rownum <6 AND lower(summonername) = \'{summonername}\' and queue_id = 420 '
            f'ORDER BY GAMEID DESC'
        )
        summoner_df = sql_execute(query)
        db_close()
        if len(summoner_df):
            lane_list = list(map(lambda x: x, summoner_df['TEAMPOSITION']))
            tier_list = list(map(lambda x: x, summoner_df['TIER']))

            avg_df = pd.read_csv('avg.csv')

            for i in range(5):
                tmp = []
                for t in range(len(tier_list)):
                    for l in range(len(lane_list)):
                        if t == l:
                            tmp.append(get_avg_value(i, avg_df, tier_list[t], lane_list[l]))

                base_name = summoner_df.columns[4 + i]
                col_name = avg_df.columns[2 + i]
                dif_name = col_name.replace("AVG", "DIF")

                summoner_df[col_name] = None
                summoner_df[col_name] = tmp
                summoner_df[dif_name] = None
                summoner_df[dif_name] = summoner_df.apply(lambda x: x[base_name] / x[col_name], axis=1)

            temp_dict = {'G15_DIF': str(summoner_df['G15_DIF'].mean()),
                         'DEATHS_DIF': str(summoner_df['DEATHS_DIF'].mean()),
                         'VSCORE_DIF': str(summoner_df['VSCORE_DIF'].mean()),
                         'GOLD_DIF': str(summoner_df['GOLD_DIF'].mean()),
                         'DEALT_DIF': str(summoner_df['DEALT_DIF'].mean())}

        game_info_df = summoner_df[['GAMEID', 'TEAMPOSITION', 'GAMEENDTIMESTAMP', 'G15', 'KILLS', 'DEATHS', 'ASSISTS', 'CHAMP_NAME_KR','CHAMPIONNAME','WIN']]
        temp_list = []
        for i in range(len(game_info_df)):
            temp_dict2 = {}
            for c in list(game_info_df.columns):
                temp_dict2[c] = str(game_info_df.iloc[i][c])
            temp_list.append(temp_dict2)

        graph_dict[summonername] = [temp_list, temp_dict, tier_dict]

    return graph_dict


def make_result_of_test_df(df):
    df.loc[(df['TIER'] == 'IRON'), 'TIER'] = 'LOW'
    df.loc[(df['TIER'] == 'BRONZE'), 'TIER'] = 'LOW'
    df.loc[(df['TIER'] == 'SILVER'), 'TIER'] = 'LOW'
    df.loc[(df['TIER'] == 'GOLD'), 'TIER'] = 'MID'
    df.loc[(df['TIER'] == 'PLATINUM'), 'TIER'] = 'MID'
    df.loc[(df['TIER'] == 'DIAMOND'), 'TIER'] = 'MID'
    df.loc[(df['TIER'] == 'MASTER'), 'TIER'] = 'HIGH'
    df.loc[(df['TIER'] == 'GRANDMASTER'), 'TIER'] = 'HIGH'
    df.loc[(df['TIER'] == 'CHALLENGER'), 'TIER'] = 'HIGH'

    test_df = df.groupby(['GAMEID', 'TIER']).agg({'GAMEDURATION': 'mean', 'CS': 'sum',
                                                  'VISIONSCORE': 'sum', 'VISIONWARDSBOUGHTINGAME': 'sum',
                                                  'WARDSKILLED': 'sum'}).reset_index()
    test_df = test_df[test_df['VISIONWARDSBOUGHTINGAME'] > 10]
    test_df = test_df[test_df['GAMEDURATION'] > 1000]
    for c in ['CS', 'VISIONSCORE', 'VISIONWARDSBOUGHTINGAME', 'WARDSKILLED']:
        test_df[c + '/MIN'] = test_df.apply(lambda x: round(x[c] / x['GAMEDURATION'] * 60, 3), axis=1)
    test_df = test_df[['TIER', 'CS/MIN', 'VISIONSCORE/MIN', 'VISIONWARDSBOUGHTINGAME/MIN', 'WARDSKILLED/MIN']]
    dataset = test_df.values
    X_test = dataset[:, 1:].astype(float)

    model = load_model('low_mid_high.h5')
    prediction = model.predict(X_test);

    result_df = pd.DataFrame(prediction, columns=['LOW', "MID", "HIGH"])
    result_df = result_df.apply(lambda x: round(x), axis=1)
    print(result_df)
    h = 0
    m = 0
    l = 0
    for i in range(len(result_df)):
        l += result_df['LOW'][i]
        m += result_df['MID'][i]
        h += result_df['HIGH'][i]

        res_temp = max(l, m, h)

    if h == res_temp and h > m:
        result = 'high'
    elif m == res_temp and m > l:
        result = 'mid'
    else:
        result = 'low'

    tier_columns = []
    model = load_model(result + '.h5')
    prediction = model.predict(X_test);

    if result == 'high':
        tier_columns = ['MASTER', 'GRANDMASTER', 'CHALLENGER']
    elif result == 'mid':
        tier_columns = ['GOLD', 'PLATINUM', 'DIAMOND']
    else:
        tier_columns = ['IRON', 'BRONZE', 'SILVER']

    result_df = pd.DataFrame(prediction, columns=tier_columns)
    result_df = result_df.apply(lambda x: round(x), axis=1)

    h = 0
    m = 0
    l = 0

    for i in range(len(result_df)):
        l += result_df[tier_columns[0]][i]
        m += result_df[tier_columns[1]][i]
        h += result_df[tier_columns[2]][i]
        res_temp = max(h, m, l)
    if h == res_temp:
        result = tier_columns[2]
    elif m == res_temp:
        result = tier_columns[1]
    else:
        result = tier_columns[0]
    return result

def get_puuid(gameid):
    url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + gameid + "?api_key=" + api_key
    res = requests.get(url).json()
    puuid = res['puuid']
    return puuid


def get_list_of_matchIds(puuid: str, count: int) -> list:
    url2 = 'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/' + puuid + "/ids?start=0&count=" + str(
        count) + "&api_key=" + api_key
    res2 = requests.get(url2).json()
    lst = list(res2)
    return lst


def get_matches_timelines(match_ids):
    lst = []
    for s in tqdm(match_ids):
        url3 = 'https://asia.api.riotgames.com/lol/match/v5/matches/' + s + '?api_key=' + api_key
        res3 = requests.get(url3).json()
        # url4 = 'https://asia.api.riotgames.com/lol/match/v5/matches/' + s + '/timeline?api_key=' + api_key
        # res4 = requests.get(url4).json()
        lst.append([s, res3])
        lstpd = pd.DataFrame(lst, columns = ['gameId','matches'])
    return lstpd


def get_match_timeline_df(df):
    df_creater = []
    for i in range(len(df)):
        for j in range(10):
            tmp = []
            tmp.append(df.iloc[i].gameId)
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['teamId'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['summonerName'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['win'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['teamPosition'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['championName'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['championId'])
            tmp.append(df.iloc[i]['matches']['info']['queueId'])
            tmp.append(round(df.iloc[i]['matches']['info']['participants'][j]['challenges']['kda'], 2))
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['kills'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['deaths'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['assists'])
            if (df.iloc[i]['matches']['info']['participants'][j]['teamId'] == 100):
                tmp.append((df.iloc[i]['matches']['info']['participants'][j]['kills'] +
                            df.iloc[i]['matches']['info']['participants'][j]['assists']) /
                           df.iloc[i]['matches']['info']['teams'][0]['objectives']['champion']['kills'])
            else:
                tmp.append((df.iloc[i]['matches']['info']['participants'][j]['kills'] +
                            df.iloc[i]['matches']['info']['participants'][j]['assists']) /
                           df.iloc[i]['matches']['info']['teams'][1]['objectives']['champion']['kills'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['perks']['styles'][0]['selections'][0]['perk'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['perks']['styles'][1]['style'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['summoner1Id'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['summoner2Id'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['item0'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['item1'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['item2'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['item3'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['item4'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['item5'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['item6'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['champLevel'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['goldEarned'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['totalMinionsKilled'] +
                       df.iloc[i]['matches']['info']['participants'][j]['neutralMinionsKilled'])
            tmp.append(round((df.iloc[i]['matches']['info']['participants'][j]['totalMinionsKilled'] +
                              df.iloc[i]['matches']['info']['participants'][j]['neutralMinionsKilled']) / (
                                         df.iloc[i]['matches']['info']['gameDuration'] / 60), 1))
            tmp.append(int(df.iloc[i]['matches']['info']['gameDuration'] / 60))
            tmp.append(df.iloc[i]['matches']['info']['gameDuration'] - (
                        int(df.iloc[i]['matches']['info']['gameDuration'] / 60) * 60))
            start = int(df.iloc[i].matches['info']['gameStartTimestamp']) / 1000
            end = int(df.iloc[i].matches['info']['gameEndTimestamp']) / 1000
            tmp.append(datetime.utcfromtimestamp(start + (60 * 60 * 9)).strftime('%Y-%m-%d %H:%M:%S'))
            tmp.append(datetime.utcfromtimestamp(end + (60 * 60 * 9)).strftime('%Y-%m-%d %H:%M:%S'))
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['visionWardsBoughtInGame'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['wardsPlaced'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['wardsKilled'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['totalDamageDealtToChampions'])
            tmp.append(df.iloc[i]['matches']['info']['participants'][j]['totalDamageTaken'])
            df_creater.append(tmp)

    columns = ['GAMEID', 'TEAMID', 'SUMMONERNAME', 'WIN', 'TEAMPOSITION', 'CHAMPIONNAME', 'CHAMP_ID', 'QUEUE_ID',
               'KDA', 'KILLS', 'DEATHS', 'ASSISTS', 'INVOLVEMENTRATE', 'RUNE_MAIN_ID', 'RUNE_SUB_STYLE_ID',
               'SPELL_ID_D', 'SPELL_ID_F', 'ITEM_ID', 'ITEM_ID2', 'ITEM_ID3', 'ITEM_ID4', 'ITEM_ID5', 'ITEM_ID6', 'ITEM_ID7',
               'CHAMPLEVEL', 'GOLD', 'CS', 'CPM', 'MINUTE', 'SECOND', 'GAMESTARTTIMESTAMP', 'GAMEENDTIMESTAMP',
               'VISIONWARDSBOUGHTINGAME', 'WARDSPLACED', 'WARDSKILLED', 'TOTALDAMAGEDEALTTOCHAMPIONS',
               'TOTALDAMAGETAKEN']

    df = pd.DataFrame(df_creater, columns=columns).drop_duplicates()
    df = df[~df.TEAMPOSITION.isna()]
    result_list = make_list_of_dict(df)
    return result_list


def make_str_time_from_timestamp(timestamp):
    return datetime.utcfromtimestamp(timestamp + (60 * 60 * 9)).strftime('%Y-%m-%d %H:%M:%S')


def make_str_time_from_df(df):
    df['GAMESTARTTIMESTAMP'] = df.apply(lambda x : make_str_time_from_timestamp(x['GAMESTARTTIMESTAMP']/1000) , axis = 1)
    df['GAMEENDTIMESTAMP'] = df.apply(lambda x : make_str_time_from_timestamp(x['GAMEENDTIMESTAMP']/1000) , axis = 1)
    return df


def make_list_of_dict(df):
    col_list = list(df.columns)

    result_list = []

    for i in range(len(df)):
        temp_dict = {}
        for j in range(len(col_list)):
            temp_dict[col_list[j]] = str(df.iloc[i][j])
        result_list.append(temp_dict)

    return result_list


if __name__ == '__main__':
    app.run(debug=True)



