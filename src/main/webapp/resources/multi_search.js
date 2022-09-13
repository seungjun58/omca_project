
<!-- container to appendTo -->
/*const $main_func_container = $('#main_func_container');*/
function render_multi_search_window() {
    <!-- 1. container for page -->
    let $multi_search_container = $('<div>').addClass('multi_search_container');

    <!-- 2. row boxes -->
    let $msBox_1 = $('<div>').addClass('msBox').attr({'id':'msBox_1'});
    let $msBox_2 = $('<div>').addClass('msBox').attr({'id':'msBox_2'});
    let $msBox_3 = $('<div>').addClass('msBox').attr({'id':'msBox_3'});
    let $msBox_4 = $('<div>').addClass('msBox').attr({'id':'msBox_4'});

    <!-- 3. column elements in row boxes -->
    let $msBox_1_title = $('<h2>').attr({'id':'msBox_1_title'}).text('멀티 서치');

    let $msBox_2_box_1 = $('<div>').addClass('msBox_2_boxes').attr({'id':'msBox_2_box_1'});
    let $msBox_2_box_2 = $('<div>').addClass('msBox_2_boxes').attr({'id':'msBox_2_box_2'});

    let $msBox_3_box_1 = $('<div>').addClass('msBox_3_boxes').attr({'id':'msBox_3_box_1'});
    let $msBox_3_box_2 = $('<div>').addClass('msBox_3_boxes').attr({'id':'msBox_3_box_2'});
    let $msBox_3_box_3 = $('<div>').addClass('msBox_3_boxes').attr({'id':'msBox_3_box_3'});

    let $msBox_4_box_1 = $('<div>').addClass('msBox_4_boxes').attr({'id':'msBox_4_box_1'});
    let $msBox_4_box_2 = $('<div>').addClass('msBox_4_boxes').attr({'id':'msBox_4_box_2'});
    let $msBox_4_box_3 = $('<div>').addClass('msBox_4_boxes').attr({'id':'msBox_4_box_3'});// 5명이 기본, 듀오 찾기 궁합(?)보기할 때 2명만 활용
    let $msBox_4_box_4 = $('<div>').addClass('msBox_4_boxes').attr({'id':'msBox_4_box_4'});
    let $msBox_4_box_5 = $('<div>').addClass('msBox_4_boxes').attr({'id':'msBox_4_box_5'});

    <!-- 4. inner elements in column elements -->
    let greeting = "a님이 로비에 참가하셨습니다.\nb님이 로비에 참가하셨습니다.\nc님이 로비에 참가하셨습니다.\nd님이 로비에 참가하셨습니다.\ne님이 로비에 참가하셨습니다."
    let $msBox_2_box_1_textArea = $('<textarea>').attr(
        "id","msBox_2_box_1_textArea").attr("placeholder",greeting);
    let $msBox_2_box_1_btn = $('<input>').attr({'id':'msBox_2_box_1_btn',
                                                'type':'button', 'value':'멀티서치'
                                                });//멀티서치 버튼


    let $msBox_2_box_2_box_1 = $('<div>').addClass('msBox_2_box_2_box').attr({'id':'msBox_2_box_2_box_1'});//결과 요약
    let $msBox_2_box_2_box_2 = $('<div>').addClass('msBox_2_box_2_box').attr({'id':'msBox_2_box_2_box_2'});//결과 활용하기


    let $msBox_3_box_1_title = $('<h3>').addClass('msBox_3_box_1_title')
                                        .attr({'id':'msBox_3_box_1_title'})
                                        .text('팀 케미');
    let $msBox_3_box_1_graphBox = $('<div>').addClass('msBox_3_box_1_graphBox')
                                            .attr({'id':'msBox_3_box_1_graphBox'});
    let $msBox_3_box_1_graphBox_status = $('<div>').addClass('msBox_3_box_1_graphBox_status')
                                                    .attr({'id':'msBox_3_box_1_graphBox_status'});
    let $msBox_3_box_1_graphBox_graph = $('<div>').addClass('msBox_3_box_1_graphBox_graph')
                                                    .attr({'id':'msBox_3_box_1_graphBox_graph'});


    let $msBox_3_box_2_title = $('<h3>').addClass('msBox_3_box_2_title')
                                        .attr({'id':'msBox_3_box_2_title'})
                                        .text('캐리 후보');
    let $msBox_3_box_2_candidates = $('<div>').addClass('msBox_3_box_2_candidates')
                                              .attr({'id':'msBox_3_box_2_candidates'});


    let $msBox_3_box_3_title = $('<h3>').addClass('msBox_3_box_3_title')
                                        .attr({'id':'msBox_3_box_3_title'})
                                        .text('모스트 라인');
    let $msBox_3_box_3_mostLanes = $('<div>').addClass('msBox_3_box_3_mostLanes')
                                             .attr({'id':'msBox_3_box_3_mostLanes'});

    <!-- 5. Reversible game data SAMPLE 2-->
    let $msBox_4_box_2_box_1 = $('<div>').addClass('msBox_4_box_2_box').attr({'id':'msBox_4_box_2_box_1'});
    let $msBox_4_box_2_box_1_tier = $('<div>').addClass('msBox_4_box_2_box_tier').attr({'id':'msBox_4_box_2_box_1_tier'});
    let $msBox_4_box_2_box_1_carryOrDuo = $('<div>').addClass('msBox_4_box_2_box_carryOrDuo').attr({'id':'msBox_4_box_2_box_1_carryOrDuo'});

    let $msBox_4_box_2_box_2 = $('<div>').addClass('msBox_4_box_2_box').attr({'id':'msBox_4_box_2_box_2'});
    let $msBox_4_box_2_box_2_laneIcon = $('<img>').addClass('msBox_4_box_2_box_2_laneIcon').attr({'id':'msBox_4_box_2_box_2_laneIcon',
        'src':'img_url'});
    let $msBox_4_box_2_box_2_smnrName = $('<p>').addClass('msBox_4_box_2_box_2_smnrName').attr({'id':'msBox_4_box_2_box_2_smnrName',
        'type':'text'}).text('summonerName');
    let $msBox_4_box_2_box_2_KDA = $('<p>').addClass('msBox_4_box_2_box_2_KDA').attr({'id':'msBox_4_box_2_box_2_KDA','type':'text'}).text('00승 00패 00%승률');

    let $msBox_4_box_2_box_3 = $('<div>').addClass('msBox_4_box_2_box').attr({'id':'msBox_4_box_2_box_3'});
    let $msBox_4_box_2_box_3_title = $('<h4>').addClass('msBox_4_box_2_box_3_title').attr({'id':'msBox_4_box_2_box_3_title'}).text('최근 5경기');
    let $msBox_4_box_2_box_3_box = $('<div>').addClass('msBox_4_box_2_box_3_box').attr({'id':'msBox_4_box_2_box_3_box'});
    let $msBox_4_box_2_box_3_box_perPerson = $('<p>').addClass('msBox_4_box_2_box_3_box_perPerson').attr({'id':'msBox_4_box_2_box_3_box_perPerson'}).html('0.00인분');
    let $msBox_4_box_2_box_3_box_laneMatch = $('<p>').addClass('msBox_4_box_2_box_3_box_laneMatch').attr({'id':'msBox_4_box_2_box_3_box_laneMatch'}).html('0.0:0.0라인전');

    let $msBox_4_box_2_box_4 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_4'});
    let $msBox_4_box_2_box_4_abilityGraph = $('<div>').addClass('msBox_4_box_2_box_4_abilityGraph').attr({'id':'msBox_4_box_2_box_4_abilityGraph'});
    let $msBox_4_box_2_box_4_currentGame1 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame1'});
    let $msBox_4_box_2_box_4_currentGame2 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame2'});
    let $msBox_4_box_2_box_4_currentGame3 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame3'});
    let $msBox_4_box_2_box_4_currentGame4 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame4'});
    let $msBox_4_box_2_box_4_currentGame5 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame5'});

    
    
    <!-- 5. Reversible game data SAMPLE 1-->
    let $msBox_4_box_1_box_1 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_1'});
    let $msBox_4_box_1_box_1_tier = $('<div>').addClass('msBox_4_box_1_box_tier').attr({'id':'msBox_4_box_1_box_1_tier'});
    let $msBox_4_box_1_box_1_carryOrDuo = $('<div>').addClass('msBox_4_box_1_box_carryOrDuo').attr({'id':'msBox_4_box_1_box_1_carryOrDuo'});

    let $msBox_4_box_1_box_2 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_2'});
    let $msBox_4_box_1_box_2_laneIcon = $('<img>').addClass('msBox_4_box_1_box_2_laneIcon').attr({'id':'msBox_4_box_1_box_2_laneIcon',
        'src':'img_url'});
    let $msBox_4_box_1_box_2_smnrName = $('<p>').addClass('msBox_4_box_1_box_2_smnrName').attr({'id':'msBox_4_box_1_box_2_smnrName',
        'type':'text'}).text('summonerName');
    let $msBox_4_box_1_box_2_KDA = $('<p>').addClass('msBox_4_box_1_box_2_KDA').attr({'id':'msBox_4_box_1_box_2_KDA','type':'text'}).text('00승 00패 00%승률');

    let $msBox_4_box_1_box_3 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_3'});
    let $msBox_4_box_1_box_3_title = $('<h4>').addClass('msBox_4_box_1_box_3_title').attr({'id':'msBox_4_box_1_box_3_title'}).text('최근 5경기');
    let $msBox_4_box_1_box_3_box = $('<div>').addClass('msBox_4_box_1_box_3_box').attr({'id':'msBox_4_box_1_box_3_box'});
    let $msBox_4_box_1_box_3_box_perPerson = $('<p>').addClass('msBox_4_box_1_box_3_box_perPerson').attr({'id':'msBox_4_box_1_box_3_box_perPerson'}).html('0.00인분');
    let $msBox_4_box_1_box_3_box_laneMatch = $('<p>').addClass('msBox_4_box_1_box_3_box_laneMatch').attr({'id':'msBox_4_box_1_box_3_box_laneMatch'}).html('0.0:0.0라인전');

    let $msBox_4_box_1_box_4 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_4'});
    let $msBox_4_box_1_box_4_abilityGraph = $('<div>').addClass('msBox_4_box_1_box_4_abilityGraph').attr({'id':'msBox_4_box_1_box_4_abilityGraph'});
    let $msBox_4_box_1_box_4_currentGame1 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame1'});
    let $msBox_4_box_1_box_4_currentGame2 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame2'});
    let $msBox_4_box_1_box_4_currentGame3 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame3'});
    let $msBox_4_box_1_box_4_currentGame4 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame4'});
    let $msBox_4_box_1_box_4_currentGame5 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame5'});







    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_2_box_4_currentGame1);
    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_2_box_4_currentGame2);
    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_2_box_4_currentGame3);
    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_2_box_4_currentGame4);
    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_2_box_4_currentGame5);
    $('<p>').text('This is the ability graph').appendTo($msBox_4_box_2_box_4_abilityGraph);

    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_abilityGraph);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame1);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame2);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame3);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame4);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame5);

    $msBox_4_box_2_box_3_box.append($msBox_4_box_2_box_3_box_perPerson);
    $msBox_4_box_2_box_3_box.append($msBox_4_box_2_box_3_box_laneMatch);
    $msBox_4_box_2_box_3.append($msBox_4_box_2_box_3_title);
    $msBox_4_box_2_box_3.append($msBox_4_box_2_box_3_box);

    $msBox_4_box_2_box_2.append($msBox_4_box_2_box_2_laneIcon);
    $msBox_4_box_2_box_2.append($msBox_4_box_2_box_2_smnrName);
    $msBox_4_box_2_box_2.append($msBox_4_box_2_box_2_KDA);

    $msBox_4_box_2_box_1.append($msBox_4_box_2_box_1_tier);
    $msBox_4_box_2_box_1.append($msBox_4_box_2_box_1_carryOrDuo);


    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_1_box_4_currentGame1);
    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_1_box_4_currentGame2);
    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_1_box_4_currentGame3);
    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_1_box_4_currentGame4);
    $('<p>').text('champIMG,lane,ace,KDA,DATE').appendTo($msBox_4_box_1_box_4_currentGame5);
    $('<p>').text('This is the ability graph').appendTo($msBox_4_box_1_box_4_abilityGraph);

    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_abilityGraph);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame1);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame2);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame3);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame4);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame5);

    $msBox_4_box_1_box_3_box.append($msBox_4_box_1_box_3_box_perPerson);
    $msBox_4_box_1_box_3_box.append($msBox_4_box_1_box_3_box_laneMatch);
    $msBox_4_box_1_box_3.append($msBox_4_box_1_box_3_title);
    $msBox_4_box_1_box_3.append($msBox_4_box_1_box_3_box);

    $msBox_4_box_1_box_2.append($msBox_4_box_1_box_2_laneIcon);
    $msBox_4_box_1_box_2.append($msBox_4_box_1_box_2_smnrName);
    $msBox_4_box_1_box_2.append($msBox_4_box_1_box_2_KDA);

    $msBox_4_box_1_box_1.append($msBox_4_box_1_box_1_tier);
    $msBox_4_box_1_box_1.append($msBox_4_box_1_box_1_carryOrDuo);

    $msBox_4_box_1.append($msBox_4_box_1_box_1);
    $msBox_4_box_1.append($msBox_4_box_1_box_2);
    $msBox_4_box_1.append($msBox_4_box_1_box_3);
    $msBox_4_box_1.append($msBox_4_box_1_box_4);

    $msBox_4_box_2.append($msBox_4_box_2_box_1);
    $msBox_4_box_2.append($msBox_4_box_2_box_2);
    $msBox_4_box_2.append($msBox_4_box_2_box_3);
    $msBox_4_box_2.append($msBox_4_box_2_box_4);

    // $msBox_4_box_3.append($msBox_4_box_1_box_1);
    // $msBox_4_box_3.append($msBox_4_box_1_box_2);
    // $msBox_4_box_3.append($msBox_4_box_1_box_3);
    // $msBox_4_box_3.append($msBox_4_box_1_box_4);
    //
    // $msBox_4_box_4.append($msBox_4_box_1_box_1);
    // $msBox_4_box_4.append($msBox_4_box_1_box_2);
    // $msBox_4_box_4.append($msBox_4_box_1_box_3);
    // $msBox_4_box_4.append($msBox_4_box_1_box_4);
    //
    // $msBox_4_box_5.append($msBox_4_box_1_box_1);
    // $msBox_4_box_5.append($msBox_4_box_1_box_2);
    // $msBox_4_box_5.append($msBox_4_box_1_box_3);
    // $msBox_4_box_5.append($msBox_4_box_1_box_4);

    $msBox_4.append($msBox_4_box_1);
    $msBox_4.append($msBox_4_box_2);
    $msBox_4.append($('<p>').text('champIMG,lane,ace,KDA,DATE'));//테스트용 임시태그
    $msBox_4.append($('<p>').text('champIMG,lane,ace,KDA,DATE'));//테스트용 임시태그
    $msBox_4.append($('<p>').text('champIMG,lane,ace,KDA,DATE'));//테스트용 임시태그
    <!--Box4 End-->

    $('<p>').text('This is the chemy graph').appendTo($msBox_3_box_1_graphBox_graph);
    $msBox_3_box_1_graphBox.append($msBox_3_box_1_graphBox_status);
    $msBox_3_box_1_graphBox.append($msBox_3_box_1_graphBox_graph);
    $msBox_3_box_1.append($msBox_3_box_1_title);
    $msBox_3_box_1.append($msBox_3_box_1_graphBox);
    $msBox_3_box_2.append($msBox_3_box_2_title);
    $msBox_3_box_2.append($msBox_3_box_2_candidates);
    $msBox_3_box_3.append($msBox_3_box_3_title);
    $msBox_3_box_3.append($msBox_3_box_3_mostLanes);
    $msBox_3.append($msBox_3_box_1);
    $msBox_3.append($msBox_3_box_2);
    $msBox_3.append($msBox_3_box_3);
    <!--Box3 End-->

    $msBox_2_box_1.append($msBox_2_box_1_textArea);
    $msBox_2_box_1.append($msBox_2_box_1_btn);
    let temp_txt = '사용 방법\n' +
        '챔피언 pick 화면에서 채팅창의\n' +
        '“*님이 로비에 참가하셨습니다.” 부분을 복사하여, 왼쪽 입력창에 붙여넣기 하세요.\n' +
        '\n' +
        'ID 직접 입력도 가능합니다. (최대 5명)\n' +
        '예)\n' +
        'ID, ID, ID, ID, ID\n' +
        '예)\n' +
        'ID\n' +
        'ID\n' +
        'ID...';
    let pre_temp_txt = $('<pre>').text(temp_txt).attr('id','pre_temp_txt');
    $msBox_2_box_2.append(pre_temp_txt);
    $msBox_2_box_2.append($msBox_2_box_2_box_1);
    $msBox_2_box_2.append($msBox_2_box_2_box_2);
    $msBox_2.append($msBox_2_box_1);
    $msBox_2.append($msBox_2_box_2);
    <!--Box2 End-->

    $msBox_1.append($msBox_1_title);
    <!--Box1 End-->
    $msBox_3.hide();
    $msBox_4.hide();
    $multi_search_container.append($msBox_1);
    $multi_search_container.append($msBox_2);
    $multi_search_container.append($msBox_3);
    $multi_search_container.append($msBox_4);
    <!--row Boxes End-->

    $multi_search_container.remove();
    $main_func_container.append($multi_search_container);
    <!-- create multi search page End-->
}

//[멀티 서치] 동적 버튼 이벤트
$(document).on('click', '#msBox_2_box_1_btn', function (){ // (event name, element Id, function), element ID는 prefix # 주의!
    
    // 서치 박스 기능 클릭 이벤트 함수
    
    let txt = $('#msBox_2_box_1_textArea').val();
    $('#msBox_3').show();
    $('#msBox_4').show();
    $('#pre_temp_txt').hide();
    alert(txt);
});

