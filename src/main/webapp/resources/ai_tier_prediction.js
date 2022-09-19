function render_ai_tier_prediction_window() {
    let $ai_tier_prediction_container = $('<div>').addClass('ai_tier_prediction_container').attr('id','ai_tier_prediction_container');
    let $loadingImg = $('<img>').addClass('loadingImg').attr({'id':'loadingImg','src':$contextPath+'/resources/img/loading.gif'});
    let $aiBox_1 = $('<div>').addClass('aiBox').attr({'id':'aiBox_1'});
    let $aiBox_2 = $('<div>').addClass('aiBox').attr({'id':'aiBox_2'});
    
    let $aiBox_3 = $('<div>').addClass('aiBox').attr({'id':'aiBox_3'});
    let $aiBox_4 = $('<div>').addClass('aiBox').attr({'id':'aiBox_4'});
    let $aiBox_5 = $('<div>').addClass('aiBox').attr({'id':'aiBox_5'});
    let $aiBox_6 = $('<div>').addClass('aiBox').attr({'id':'aiBox_6'});
    let $aiBox_7 = $('<div>').addClass('aiBox').attr({'id':'aiBox_7'});
    let $aiBox_8 = $('<div>').addClass('aiBox').attr({'id':'aiBox_8'});

    let $aiBox_1_title = $('<h2>').attr({'id':'aiBox_1_title'}).text('AI 티어 예측');

    let $aiBox_2_box_1 = $('<div>').addClass('aiBox_2_boxes').attr({'id':'aiBox_2_box_1'});

    let greeting = "당신의 소환사명을 입력해주세요, AI가 당신의 숨어있는 티어를 꺼내드립니다!"
    
    let $aiBox_2_box_1_textArea = $('<textarea style="font-size: 22px">').attr(
        "id","aiBox_2_box_1_textArea").attr("placeholder",greeting);
    let $aiBox_2_box_1_btn = $('<input>').attr({'id':'aiBox_2_box_1_btn',
                                                'type':'button', 'value':'PREDICTION!'
                                                }); //티어예측버튼
    
    


    //let $aiBox_2_span = $('<span>').addClass('aiBox_3_span').attr({'id':'aiBox_3_span'}).text("AI 티어 예측");
    let $aiBox_3_h1 = $('<h1>').addClass('aiBox_3_h1').attr({'id':'aiBox_3_h1'}).text("AI가 예측하는 당신의 실제 실력 티어는?"); 
    let $aiBox_3_h2 = $('<h2>').addClass('aiBox_3_h2').attr({'id':'aiBox_3_h2'}).text("현재 티어"); 
    //$('<img>').addClass('tierImg').attr({'id':'tier_id_img'+(g+1).toString(),'src':$contextPath+'/resources/ranked-embleai/Emblem_'+tier['tier']+'.png'}).appendTo(tier_id);
    
    let $aiBox_5_h1 = $('<h1>').addClass('aiBox_5_h1').attr({'id':'aiBox_5_h1'}).text("AI가 예측한 당신의 티어는"); 
    let $aiBox_5_h2 = $('<h2>').addClass('aiBox_5_h2').attr({'id':'aiBox_5_h2'}).text("100만건의 데이터로 AI가 학습하여 예측한 티어입니다."); 

    $aiBox_2_box_1.append($aiBox_2_box_1_textArea);
    $aiBox_2_box_1.append($aiBox_2_box_1_btn);
    
    $aiBox_1.append($aiBox_1_title);
    $aiBox_2.append($aiBox_2_box_1);
    //$aiBox_3.append($aiBox_2_span);
    $aiBox_3.append($aiBox_3_h1);
    $aiBox_3.append($aiBox_3_h2);
    
    $aiBox_5.append($aiBox_5_h1);
    $aiBox_5.append($aiBox_5_h2);

    $aiBox_3.hide();
    $aiBox_4.hide();
    $aiBox_5.hide();
    $aiBox_6.hide();
    $aiBox_7.hide();
    $aiBox_8.hide();

    $ai_tier_prediction_container.append($aiBox_1);
    $ai_tier_prediction_container.append($aiBox_2);
    $ai_tier_prediction_container.append($aiBox_3);
    $ai_tier_prediction_container.append($aiBox_4);
    $ai_tier_prediction_container.append($aiBox_5);
    $ai_tier_prediction_container.append($aiBox_6);
    $ai_tier_prediction_container.append($aiBox_7);
    $ai_tier_prediction_container.append($aiBox_8);
    
   
                                         
    $ai_tier_prediction_container.remove();
    $main_func_container.append($ai_tier_prediction_container);
} //End function render_ai_tier_prediction_window()

$(document).on('click', '#aiBox_2_box_1_btn', function (){ // (event name, element Id, function), element ID는 prefix # 주의!
    
    // 서치 박스 기능 클릭 이벤트 함수
    
    let summoner = $('#aiBox_2_box_1_textArea').val();
    
    
    
    make_map_of_summoner(summoner);
    $('#aiBox_1').hide();
    $('#aiBox_2').hide();

    $('#aiBox_3').show();
    $('#aiBox_4').show();
    $('#aiBox_5').show();
    $('#aiBox_6').show();
    $('#aiBox_7').show();
    $('#aiBox_8').show();

   
}); //End btn click

function make_map_of_summoner(summoner) {
    let tmp_map = new Map();
    
    let temp = summoner.replace(/\n/gi, "").replace(/\s\s\s/gi, ",").replace(/\s$/gi, "").replace(/\s$/gi, "").toLowerCase();
    
    tmp_map.set("summoner",temp);

    console.log("json",JSON.stringify(Object.fromEntries(tmp_map)));
    console.log(tmp_map);

    //requestInfoFromPython(JSON.stringify(tmp_map));
    requestPredictFromPython(JSON.stringify(Object.fromEntries(tmp_map)));
}//End make_map_of_summoner

function requestPredictFromPython(summonertier) {
    $.ajax({
        type : 'post',
        url : 'http://127.0.0.1:5000/prediction',
        data : summonertier,
        dataType : 'json',
        contentType: 'application/json',
        success : function(res) {
            LoadingWithMask();
            console.log("pre res",res);
            console.log("나는 프리딕션이야");
            console.log("res의타입",typeof res);
            
          
            let $aiBox_4 = $('#aiBox_4');
            let $aiBox_6 = $('#aiBox_6');
            let tier = res['tier'];
        
            let pre_tier = res['predict_tier'];
            console.log(pre_tier);
            console.log(tier);
            

            $('<img>').addClass('present_tier_img').attr({'id':'present_tier_img','src':$contextPath+'/resources/ranked-emblems/Emblem_'+tier+'.png'}).appendTo($aiBox_4);
            $('<h1>').addClass('present_tier_p').attr({'id':'present_tier_p'}).text(tier).appendTo($aiBox_4);
            $('<img>').addClass('predict_tier_img').attr({'id':'predict_tier_img','src':$contextPath+'/resources/ranked-emblems/Emblem_'+pre_tier+'.png'}).appendTo($aiBox_6);
            $('<h1>').addClass('predict_tier_p').attr({'id':'predict_tier_p'}).text(pre_tier).appendTo($aiBox_6);
        },
        beforeSend : function() {
            //$('#loadingImg').show();
            LoadingWithMask();
            console.log("show");
        },
        complete : function() {
            //$('#loadingImg').hide();
            closeLoadingWithMask();
            console.log("hide");
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            alert("XMLHttpRequest : " + XMLHttpRequest + ' textStatus : '
                    + textStatus + ' errorThrown : ' + errorThrown);
        } //End error
        
    })
} //End requestInfoFromPython

function LoadingWithMask() {
    //화면의 높이와 너비를 구합니다.    
    //var maskHeight = $(document).height();
    //var maskWidth = window.document.body.clientWidth;
    let maskHeight = 1000;
    let maskWidth = 700.22;
    console.log(maskHeight);
    console.log(maskWidth);
    //화면에 출력할 마스크를 설정해줍니다.    
    const $mask = $('<div>').addClass('mask').attr({'id':'mask','style':'position:absolute z-index:9000 background-color:#000000 display:none left:0 top:0'});  
    let $loadingImg = $('<img>').addClass('loadingImg')
    .attr({'id':'loadingImg','src':$contextPath+'/resources/img/loading.gif','style':'position: relative; display: block; margin: 0px auto'});
    //화면에 레이어 추가

    $('#aiBox_4').append($loadingImg);
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.    
    $('#mask').css({'width' : maskWidth, 'height': maskHeight, 'opacity' : '0.3'});
    //마스크 표시    
    $('#mask').show();
    //로딩중 이미지 표시    
    $('#loadingImg').show();

}//End LoadingWithMask

function closeLoadingWithMask() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').remove();
}
