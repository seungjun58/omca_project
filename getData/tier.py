from flask import Flask, jsonify, request
import requests
from tqdm import tqdm
from flask_cors import CORS
import lol_gamedata as lg


app = Flask(__name__)


CORS(app)


@app.route('/')
def home():
    return 'Hello, World!'


@app.route('/get_puuid')
def tospring():
    return 'test!'


global api_key
api_key = 'RGAPI-5e0111b2-217a-4486-aa6b-57475d923dcc'
# def set_api_key(s):
#     global api_key
#     api_key = s

def get_encrypted_id(gameid):
    url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + gameid + "?api_key=" + api_key
    res = requests.get(url).json()
    encrypted_id = res['id']
    return encrypted_id


def get_tier(encrypted_id):
    url = "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" + encrypted_id + "?api_key=" + api_key
    res = requests.get(url).json()
    res_dict = {'tier':res[0]['tier'],'rank':res[0]['rank']}
    return res_dict

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
        url4 = 'https://asia.api.riotgames.com/lol/match/v5/matches/' + s + '/timeline?api_key=' + api_key
        res4 = requests.get(url4).json()
        lst.append([s, res3, res4])
    return lst


@app.route("/test", methods = ["GET", "POST"])
def conn_test():
    global value
    if request.method == 'POST':
        value = dict(request.form)
        print(value)
        gameid = value['value']
        puuid = str(get_puuid(gameid))
        matchId_list = get_list_of_matchIds(puuid, 1)
        matches_timelines = get_matches_timelines(matchId_list)
        a = jsonify({'matches_timelines':matches_timelines})
        print(a)
    return a


@app.route("/get_tier", methods=["GET", "POST"])
def send_tier():
    lg.set_api_key(api_key)
    global value
    if request.method == 'POST':
        value = dict(request.form)
        print(value)
        sid = value['sid']
        eid = get_encrypted_id(sid)
        tier = get_tier(eid)
        result = jsonify(tier)
        print(result)
    return result


if __name__ == '__main__':
    app.run(debug=True)



