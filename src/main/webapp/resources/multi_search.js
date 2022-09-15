

// container to appendTo -->
/*const $main_func_container = $('#main_func_container');*/
function render_multi_search_window() {
    // 1. container for page -->
    let $multi_search_container = $('<div>').addClass('multi_search_container');

    // 2. row boxes -->
    let $msBox_1 = $('<div>').addClass('msBox').attr({'id':'msBox_1'});
    let $msBox_2 = $('<div>').addClass('msBox').attr({'id':'msBox_2'});
    let $msBox_3 = $('<div>').addClass('msBox').attr({'id':'msBox_3'});
    let $msBox_4 = $('<div>').addClass('msBox').attr({'id':'msBox_4'});

    // 3. column elements in row boxes -->
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

    // 4. inner elements in column elements -->
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



     // 5. Reversible game data SAMPLE 5-->
     let $msBox_4_box_5_box_1 = $('<div>').addClass('msBox_4_box_5_box').attr({'id':'msBox_4_box_5_box_1'});
     let $msBox_4_box_5_box_1_tier = $('<div>').addClass('msBox_4_box_5_box_tier').attr({'id':'msBox_4_box_5_box_1_tier'});
     let $msBox_4_box_5_box_1_carryOrDuo = $('<div>').addClass('msBox_4_box_5_box_carryOrDuo').attr({'id':'msBox_4_box_5_box_1_carryOrDuo'});
 
     let $msBox_4_box_5_box_2 = $('<div>').addClass('msBox_4_box_5_box').attr({'id':'msBox_4_box_5_box_2'});
     let $msBox_4_box_5_box_2_laneIcon = $('<img>').addClass('msBox_4_box_5_box_2_laneIcon').attr({'id':'msBox_4_box_5_box_2_laneIcon',
         'src':'img_url'});
     let $msBox_4_box_5_box_2_smnrName = $('<p>').addClass('msBox_4_box_5_box_2_smnrName').attr({'id':'msBox_4_box_5_box_2_smnrName',
         'type':'text'});
     let $msBox_4_box_5_box_2_KDA = $('<p>').addClass('msBox_4_box_5_box_2_KDA').attr({'id':'msBox_4_box_5_box_2_KDA','type':'text'}).text('00승 00패 00%승률');
 
     let $msBox_4_box_5_box_3 = $('<div>').addClass('msBox_4_box_5_box').attr({'id':'msBox_4_box_5_box_3'});
     let $msBox_4_box_5_box_3_title = $('<h4>').addClass('msBox_4_box_5_box_3_title').attr({'id':'msBox_4_box_5_box_3_title'});
     let $msBox_4_box_5_box_3_box = $('<div>').addClass('msBox_4_box_5_box_3_box').attr({'id':'msBox_4_box_5_box_3_box'});
     //let $msBox_4_box_5_box_3_box_perPerson = $('<p>').addClass('msBox_4_box_5_box_3_box_perPerson').attr({'id':'msBox_4_box_5_box_3_box_perPerson'}).html('0.00인분');
     //let $msBox_4_box_5_box_3_box_laneMatch = $('<p>').addClass('msBox_4_box_5_box_3_box_laneMatch').attr({'id':'msBox_4_box_5_box_3_box_laneMatch'}).html('0.0:0.0라인전');
 
     let $msBox_4_box_5_box_4 = $('<div>').addClass('msBox_4_box_5_box').attr({'id':'msBox_4_box_5_box_4'});
     let $msBox_4_box_5_box_4_abilityGraph = $('<div>').addClass('msBox_4_box_5_box_4_abilityGraph').attr({'id':'msBox_4_box_5_box_4_abilityGraph'});
     let $msBox_4_box_5_box_4_currentGame1 = $('<div>').addClass('msBox_4_box_5_box_4_currentGames').attr({'id':'msBox_4_box_5_box_4_currentGame1'});
     let $msBox_4_box_5_box_4_currentGame2 = $('<div>').addClass('msBox_4_box_5_box_4_currentGames').attr({'id':'msBox_4_box_5_box_4_currentGame2'});
     let $msBox_4_box_5_box_4_currentGame3 = $('<div>').addClass('msBox_4_box_5_box_4_currentGames').attr({'id':'msBox_4_box_5_box_4_currentGame3'});
     let $msBox_4_box_5_box_4_currentGame4 = $('<div>').addClass('msBox_4_box_5_box_4_currentGames').attr({'id':'msBox_4_box_5_box_4_currentGame4'});
     let $msBox_4_box_5_box_4_currentGame5 = $('<div>').addClass('msBox_4_box_5_box_4_currentGames').attr({'id':'msBox_4_box_5_box_4_currentGame5'});                                            



     // 5. Reversible game data SAMPLE 4-->
    let $msBox_4_box_4_box_1 = $('<div>').addClass('msBox_4_box_4_box').attr({'id':'msBox_4_box_4_box_1'});
    let $msBox_4_box_4_box_1_tier = $('<div>').addClass('msBox_4_box_4_box_tier').attr({'id':'msBox_4_box_4_box_1_tier'});
    let $msBox_4_box_4_box_1_carryOrDuo = $('<div>').addClass('msBox_4_box_4_box_carryOrDuo').attr({'id':'msBox_4_box_4_box_1_carryOrDuo'});

    let $msBox_4_box_4_box_2 = $('<div>').addClass('msBox_4_box_4_box').attr({'id':'msBox_4_box_4_box_2'});
    let $msBox_4_box_4_box_2_laneIcon = $('<img>').addClass('msBox_4_box_4_box_2_laneIcon').attr({'id':'msBox_4_box_4_box_2_laneIcon',
        'src':'img_url'});
    let $msBox_4_box_4_box_2_smnrName = $('<p>').addClass('msBox_4_box_4_box_2_smnrName').attr({'id':'msBox_4_box_4_box_2_smnrName',
        'type':'text'});
    let $msBox_4_box_4_box_2_KDA = $('<p>').addClass('msBox_4_box_4_box_2_KDA').attr({'id':'msBox_4_box_4_box_2_KDA','type':'text'}).text('00승 00패 00%승률');

    let $msBox_4_box_4_box_3 = $('<div>').addClass('msBox_4_box_4_box').attr({'id':'msBox_4_box_4_box_3'});
    let $msBox_4_box_4_box_3_title = $('<h4>').addClass('msBox_4_box_4_box_3_title').attr({'id':'msBox_4_box_4_box_3_title'});
    let $msBox_4_box_4_box_3_box = $('<div>').addClass('msBox_4_box_4_box_3_box').attr({'id':'msBox_4_box_4_box_3_box'});
    //let $msBox_4_box_4_box_3_box_perPerson = $('<p>').addClass('msBox_4_box_4_box_3_box_perPerson').attr({'id':'msBox_4_box_4_box_3_box_perPerson'}).html('0.00인분');
    //let $msBox_4_box_4_box_3_box_laneMatch = $('<p>').addClass('msBox_4_box_4_box_3_box_laneMatch').attr({'id':'msBox_4_box_4_box_3_box_laneMatch'}).html('0.0:0.0라인전');

    let $msBox_4_box_4_box_4 = $('<div>').addClass('msBox_4_box_4_box').attr({'id':'msBox_4_box_4_box_4'});
    let $msBox_4_box_4_box_4_abilityGraph = $('<div>').addClass('msBox_4_box_4_box_4_abilityGraph').attr({'id':'msBox_4_box_4_box_4_abilityGraph'});
    let $msBox_4_box_4_box_4_currentGame1 = $('<div>').addClass('msBox_4_box_4_box_4_currentGames').attr({'id':'msBox_4_box_4_box_4_currentGame1'});
    let $msBox_4_box_4_box_4_currentGame2 = $('<div>').addClass('msBox_4_box_4_box_4_currentGames').attr({'id':'msBox_4_box_4_box_4_currentGame2'});
    let $msBox_4_box_4_box_4_currentGame3 = $('<div>').addClass('msBox_4_box_4_box_4_currentGames').attr({'id':'msBox_4_box_4_box_4_currentGame3'});
    let $msBox_4_box_4_box_4_currentGame4 = $('<div>').addClass('msBox_4_box_4_box_4_currentGames').attr({'id':'msBox_4_box_4_box_4_currentGame4'});
    let $msBox_4_box_4_box_4_currentGame5 = $('<div>').addClass('msBox_4_box_4_box_4_currentGames').attr({'id':'msBox_4_box_4_box_4_currentGame5'});

    // 5. Reversible game data SAMPLE 3-->
    let $msBox_4_box_3_box_1 = $('<div>').addClass('msBox_4_box_3_box').attr({'id':'msBox_4_box_3_box_1'});
    let $msBox_4_box_3_box_1_tier = $('<div>').addClass('msBox_4_box_3_box_tier').attr({'id':'msBox_4_box_3_box_1_tier'});
    let $msBox_4_box_3_box_1_carryOrDuo = $('<div>').addClass('msBox_4_box_3_box_carryOrDuo').attr({'id':'msBox_4_box_3_box_1_carryOrDuo'});

    let $msBox_4_box_3_box_2 = $('<div>').addClass('msBox_4_box_3_box').attr({'id':'msBox_4_box_3_box_2'});
    let $msBox_4_box_3_box_2_laneIcon = $('<img>').addClass('msBox_4_box_3_box_2_laneIcon').attr({'id':'msBox_4_box_3_box_2_laneIcon',
        'src':'img_url'});
    let $msBox_4_box_3_box_2_smnrName = $('<p>').addClass('msBox_4_box_3_box_2_smnrName').attr({'id':'msBox_4_box_3_box_2_smnrName',
        'type':'text'});
    let $msBox_4_box_3_box_2_KDA = $('<p>').addClass('msBox_4_box_3_box_2_KDA').attr({'id':'msBox_4_box_3_box_2_KDA','type':'text'}).text('00승 00패 00%승률');

    let $msBox_4_box_3_box_3 = $('<div>').addClass('msBox_4_box_3_box').attr({'id':'msBox_4_box_3_box_3'});
    let $msBox_4_box_3_box_3_title = $('<h4>').addClass('msBox_4_box_3_box_3_title').attr({'id':'msBox_4_box_3_box_3_title'});
    let $msBox_4_box_3_box_3_box = $('<div>').addClass('msBox_4_box_3_box_3_box').attr({'id':'msBox_4_box_3_box_3_box'});
    //let $msBox_4_box_3_box_3_box_perPerson = $('<p>').addClass('msBox_4_box_3_box_3_box_perPerson').attr({'id':'msBox_4_box_3_box_3_box_perPerson'}).html('0.00인분');
    //let $msBox_4_box_3_box_3_box_laneMatch = $('<p>').addClass('msBox_4_box_3_box_3_box_laneMatch').attr({'id':'msBox_4_box_3_box_3_box_laneMatch'}).html('0.0:0.0라인전');

    let $msBox_4_box_3_box_4 = $('<div>').addClass('msBox_4_box_3_box').attr({'id':'msBox_4_box_3_box_4'});
    let $msBox_4_box_3_box_4_abilityGraph = $('<div>').addClass('msBox_4_box_3_box_4_abilityGraph').attr({'id':'msBox_4_box_3_box_4_abilityGraph'});
    let $msBox_4_box_3_box_4_currentGame1 = $('<div>').addClass('msBox_4_box_3_box_4_currentGames').attr({'id':'msBox_4_box_3_box_4_currentGame1'});
    let $msBox_4_box_3_box_4_currentGame2 = $('<div>').addClass('msBox_4_box_3_box_4_currentGames').attr({'id':'msBox_4_box_3_box_4_currentGame2'});
    let $msBox_4_box_3_box_4_currentGame3 = $('<div>').addClass('msBox_4_box_3_box_4_currentGames').attr({'id':'msBox_4_box_3_box_4_currentGame3'});
    let $msBox_4_box_3_box_4_currentGame4 = $('<div>').addClass('msBox_4_box_3_box_4_currentGames').attr({'id':'msBox_4_box_3_box_4_currentGame4'});
    let $msBox_4_box_3_box_4_currentGame5 = $('<div>').addClass('msBox_4_box_3_box_4_currentGames').attr({'id':'msBox_4_box_3_box_4_currentGame5'});




    // 5. Reversible game data SAMPLE 2-->
    let $msBox_4_box_2_box_1 = $('<div>').addClass('msBox_4_box_2_box').attr({'id':'msBox_4_box_2_box_1'});
    let $msBox_4_box_2_box_1_tier = $('<div>').addClass('msBox_4_box_2_box_tier').attr({'id':'msBox_4_box_2_box_1_tier'});
    let $msBox_4_box_2_box_1_carryOrDuo = $('<div>').addClass('msBox_4_box_2_box_carryOrDuo').attr({'id':'msBox_4_box_2_box_1_carryOrDuo'});

    let $msBox_4_box_2_box_2 = $('<div>').addClass('msBox_4_box_2_box').attr({'id':'msBox_4_box_2_box_2'});
    let $msBox_4_box_2_box_2_laneIcon = $('<img>').addClass('msBox_4_box_2_box_2_laneIcon').attr({'id':'msBox_4_box_2_box_2_laneIcon',
        'src':'img_url'});
    let $msBox_4_box_2_box_2_smnrName = $('<p>').addClass('msBox_4_box_2_box_2_smnrName').attr({'id':'msBox_4_box_2_box_2_smnrName',
        'type':'text'});
    let $msBox_4_box_2_box_2_KDA = $('<p>').addClass('msBox_4_box_2_box_2_KDA').attr({'id':'msBox_4_box_2_box_2_KDA','type':'text'}).text('00승 00패 00%승률');

    let $msBox_4_box_2_box_3 = $('<div>').addClass('msBox_4_box_2_box').attr({'id':'msBox_4_box_2_box_3'});
    let $msBox_4_box_2_box_3_title = $('<h4>').addClass('msBox_4_box_2_box_3_title').attr({'id':'msBox_4_box_2_box_3_title'});
    let $msBox_4_box_2_box_3_box = $('<div>').addClass('msBox_4_box_2_box_3_box').attr({'id':'msBox_4_box_2_box_3_box'});
    //let $msBox_4_box_2_box_3_box_perPerson = $('<p>').addClass('msBox_4_box_2_box_3_box_perPerson').attr({'id':'msBox_4_box_2_box_3_box_perPerson'}).html('0.00인분');
    //let $msBox_4_box_2_box_3_box_laneMatch = $('<p>').addClass('msBox_4_box_2_box_3_box_laneMatch').attr({'id':'msBox_4_box_2_box_3_box_laneMatch'}).html('0.0:0.0라인전');

    let $msBox_4_box_2_box_4 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_4'});
    let $msBox_4_box_2_box_4_abilityGraph = $('<div>').addClass('msBox_4_box_2_box_4_abilityGraph').attr({'id':'msBox_4_box_2_box_4_abilityGraph'});
    let $msBox_4_box_2_box_4_currentGame1 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame1'});
    let $msBox_4_box_2_box_4_currentGame2 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame2'});
    let $msBox_4_box_2_box_4_currentGame3 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame3'});
    let $msBox_4_box_2_box_4_currentGame4 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame4'});
    let $msBox_4_box_2_box_4_currentGame5 = $('<div>').addClass('msBox_4_box_2_box_4_currentGames').attr({'id':'msBox_4_box_2_box_4_currentGame5'});

    
    
    // 5. Reversible game data SAMPLE 1-->
    let $msBox_4_box_1_box_1 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_1'});
    let $msBox_4_box_1_box_1_tier = $('<div>').addClass('msBox_4_box_1_box_tier').attr({'id':'msBox_4_box_1_box_1_tier'});
    let $msBox_4_box_1_box_1_carryOrDuo = $('<div>').addClass('msBox_4_box_1_box_carryOrDuo').attr({'id':'msBox_4_box_1_box_1_carryOrDuo'});

    let $msBox_4_box_1_box_2 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_2'});
    let $msBox_4_box_1_box_2_laneIcon = $('<img>').addClass('msBox_4_box_1_box_2_laneIcon').attr({'id':'msBox_4_box_1_box_2_laneIcon',
        'src':'img_url'});
    let $msBox_4_box_1_box_2_smnrName = $('<p>').addClass('msBox_4_box_1_box_2_smnrName').attr({'id':'msBox_4_box_1_box_2_smnrName',
        'type':'text'});
    let $msBox_4_box_1_box_2_KDA = $('<p>').addClass('msBox_4_box_1_box_2_KDA').attr({'id':'msBox_4_box_1_box_2_KDA','type':'text'}).text('00승 00패 00%승률');

    let $msBox_4_box_1_box_3 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_3'});
    let $msBox_4_box_1_box_3_title = $('<h4>').addClass('msBox_4_box_1_box_3_title').attr({'id':'msBox_4_box_1_box_3_title'});
    let $msBox_4_box_1_box_3_box = $('<div>').addClass('msBox_4_box_1_box_3_box').attr({'id':'msBox_4_box_1_box_3_box'});
    //let $msBox_4_box_1_box_3_box_perPerson = $('<p>').addClass('msBox_4_box_1_box_3_box_perPerson').attr({'id':'msBox_4_box_1_box_3_box_perPerson'}).html('0.00인분');
    //let $msBox_4_box_1_box_3_box_laneMatch = $('<p>').addClass('msBox_4_box_1_box_3_box_laneMatch').attr({'id':'msBox_4_box_1_box_3_box_laneMatch'}).html('0.0:0.0라인전');

    let $msBox_4_box_1_box_4 = $('<div>').addClass('msBox_4_box_1_box').attr({'id':'msBox_4_box_1_box_4'});
    let $msBox_4_box_1_box_4_abilityGraph = $('<div>').addClass('msBox_4_box_1_box_4_abilityGraph').attr({'id':'msBox_4_box_1_box_4_abilityGraph'});
    let $msBox_4_box_1_box_4_currentGame1 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame1'});
    let $msBox_4_box_1_box_4_currentGame2 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame2'});
    let $msBox_4_box_1_box_4_currentGame3 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame3'});
    let $msBox_4_box_1_box_4_currentGame4 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame4'});
    let $msBox_4_box_1_box_4_currentGame5 = $('<div>').addClass('msBox_4_box_1_box_4_currentGames').attr({'id':'msBox_4_box_1_box_4_currentGame5'});

     
        
    //apend box4_5
    $('<p>').appendTo($msBox_4_box_5_box_4_currentGame1);
    $('<p>').appendTo($msBox_4_box_5_box_4_currentGame2);
    $('<p>').appendTo($msBox_4_box_5_box_4_currentGame3);
    $('<p>').appendTo($msBox_4_box_5_box_4_currentGame4);
    $('<p>').appendTo($msBox_4_box_5_box_4_currentGame5);
    $('<canvas>').attr({'id':'ability_graph_5'}).appendTo($msBox_4_box_5_box_4_abilityGraph);

    $msBox_4_box_5_box_4.append($msBox_4_box_5_box_4_abilityGraph);
    $msBox_4_box_5_box_4.append($msBox_4_box_5_box_4_currentGame1);
    $msBox_4_box_5_box_4.append($msBox_4_box_5_box_4_currentGame2);
    $msBox_4_box_5_box_4.append($msBox_4_box_5_box_4_currentGame3);
    $msBox_4_box_5_box_4.append($msBox_4_box_5_box_4_currentGame4);
    $msBox_4_box_5_box_4.append($msBox_4_box_5_box_4_currentGame5);

    //$msBox_4_box_5_box_3_box.append($msBox_4_box_5_box_3_box_perPerson);
    //$msBox_4_box_5_box_3_box.append($msBox_4_box_5_box_3_box_laneMatch);
    $msBox_4_box_5_box_3.append($msBox_4_box_5_box_3_title);
    $msBox_4_box_5_box_3.append($msBox_4_box_5_box_3_box);

    $msBox_4_box_5_box_2.append($msBox_4_box_5_box_2_laneIcon);
    $msBox_4_box_5_box_2.append($msBox_4_box_5_box_2_smnrName);
    $msBox_4_box_5_box_2.append($msBox_4_box_5_box_2_KDA);

    $msBox_4_box_5_box_1.append($msBox_4_box_5_box_1_tier);
    $msBox_4_box_5_box_1.append($msBox_4_box_5_box_1_carryOrDuo);            
    
    //apend box4_4
    $('<p>').appendTo($msBox_4_box_4_box_4_currentGame1);
    $('<p>').appendTo($msBox_4_box_4_box_4_currentGame2);
    $('<p>').appendTo($msBox_4_box_4_box_4_currentGame3);
    $('<p>').appendTo($msBox_4_box_4_box_4_currentGame4);
    $('<p>').appendTo($msBox_4_box_4_box_4_currentGame5);
    $('<canvas>').attr({'id':'ability_graph_4'}).appendTo($msBox_4_box_4_box_4_abilityGraph);

    $msBox_4_box_4_box_4.append($msBox_4_box_4_box_4_abilityGraph);
    $msBox_4_box_4_box_4.append($msBox_4_box_4_box_4_currentGame1);
    $msBox_4_box_4_box_4.append($msBox_4_box_4_box_4_currentGame2);
    $msBox_4_box_4_box_4.append($msBox_4_box_4_box_4_currentGame3);
    $msBox_4_box_4_box_4.append($msBox_4_box_4_box_4_currentGame4);
    $msBox_4_box_4_box_4.append($msBox_4_box_4_box_4_currentGame5);

    //$msBox_4_box_4_box_3_box.append($msBox_4_box_4_box_3_box_perPerson);
    //$msBox_4_box_4_box_3_box.append($msBox_4_box_4_box_3_box_laneMatch);
    $msBox_4_box_4_box_3.append($msBox_4_box_4_box_3_title);
    $msBox_4_box_4_box_3.append($msBox_4_box_4_box_3_box);

    $msBox_4_box_4_box_2.append($msBox_4_box_4_box_2_laneIcon);
    $msBox_4_box_4_box_2.append($msBox_4_box_4_box_2_smnrName);
    $msBox_4_box_4_box_2.append($msBox_4_box_4_box_2_KDA);

    $msBox_4_box_4_box_1.append($msBox_4_box_4_box_1_tier);
    $msBox_4_box_4_box_1.append($msBox_4_box_4_box_1_carryOrDuo);           

    //apend box4_3
    $('<p>').appendTo($msBox_4_box_3_box_4_currentGame1);
    $('<p>').appendTo($msBox_4_box_3_box_4_currentGame2);
    $('<p>').appendTo($msBox_4_box_3_box_4_currentGame3);
    $('<p>').appendTo($msBox_4_box_3_box_4_currentGame4);
    $('<p>').appendTo($msBox_4_box_3_box_4_currentGame5);
    $('<canvas>').attr({'id':'ability_graph_3'}).appendTo($msBox_4_box_3_box_4_abilityGraph);

    $msBox_4_box_3_box_4.append($msBox_4_box_3_box_4_abilityGraph);
    $msBox_4_box_3_box_4.append($msBox_4_box_3_box_4_currentGame1);
    $msBox_4_box_3_box_4.append($msBox_4_box_3_box_4_currentGame2);
    $msBox_4_box_3_box_4.append($msBox_4_box_3_box_4_currentGame3);
    $msBox_4_box_3_box_4.append($msBox_4_box_3_box_4_currentGame4);
    $msBox_4_box_3_box_4.append($msBox_4_box_3_box_4_currentGame5);

    //$msBox_4_box_3_box_3_box.append($msBox_4_box_3_box_3_box_perPerson);
    //$msBox_4_box_3_box_3_box.append($msBox_4_box_3_box_3_box_laneMatch);
    $msBox_4_box_3_box_3.append($msBox_4_box_3_box_3_title);
    $msBox_4_box_3_box_3.append($msBox_4_box_3_box_3_box);

    $msBox_4_box_3_box_2.append($msBox_4_box_3_box_2_laneIcon);
    $msBox_4_box_3_box_2.append($msBox_4_box_3_box_2_smnrName);
    $msBox_4_box_3_box_2.append($msBox_4_box_3_box_2_KDA);

    $msBox_4_box_3_box_1.append($msBox_4_box_3_box_1_tier);
    $msBox_4_box_3_box_1.append($msBox_4_box_3_box_1_carryOrDuo);                                                

    //apend box4_2
    $('<p>').appendTo($msBox_4_box_2_box_4_currentGame1);
    $('<p>').appendTo($msBox_4_box_2_box_4_currentGame2);
    $('<p>').appendTo($msBox_4_box_2_box_4_currentGame3);
    $('<p>').appendTo($msBox_4_box_2_box_4_currentGame4);
    $('<p>').appendTo($msBox_4_box_2_box_4_currentGame5);
    $('<canvas>').attr({'id':'ability_graph_2'}).appendTo($msBox_4_box_2_box_4_abilityGraph);

    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_abilityGraph);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame1);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame2);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame3);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame4);
    $msBox_4_box_2_box_4.append($msBox_4_box_2_box_4_currentGame5);

    //$msBox_4_box_2_box_3_box.append($msBox_4_box_2_box_3_box_perPerson);
    //$msBox_4_box_2_box_3_box.append($msBox_4_box_2_box_3_box_laneMatch);
    $msBox_4_box_2_box_3.append($msBox_4_box_2_box_3_title);
    $msBox_4_box_2_box_3.append($msBox_4_box_2_box_3_box);

    $msBox_4_box_2_box_2.append($msBox_4_box_2_box_2_laneIcon);
    $msBox_4_box_2_box_2.append($msBox_4_box_2_box_2_smnrName);
    $msBox_4_box_2_box_2.append($msBox_4_box_2_box_2_KDA);

    $msBox_4_box_2_box_1.append($msBox_4_box_2_box_1_tier);
    $msBox_4_box_2_box_1.append($msBox_4_box_2_box_1_carryOrDuo);

    //apend box4_1
    $('<p>').appendTo($msBox_4_box_1_box_4_currentGame1); //'champIMG,lane,ace,KDA,DATE'
    $('<p>').appendTo($msBox_4_box_1_box_4_currentGame2);
    $('<p>').appendTo($msBox_4_box_1_box_4_currentGame3);
    $('<p>').appendTo($msBox_4_box_1_box_4_currentGame4);
    $('<p>').appendTo($msBox_4_box_1_box_4_currentGame5);
    $('<canvas>').attr({'id':'ability_graph_1'}).appendTo($msBox_4_box_1_box_4_abilityGraph);

    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_abilityGraph);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame1);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame2);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame3);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame4);
    $msBox_4_box_1_box_4.append($msBox_4_box_1_box_4_currentGame5);

    //$msBox_4_box_1_box_3_box.append($msBox_4_box_1_box_3_box_perPerson);
    //$msBox_4_box_1_box_3_box.append($msBox_4_box_1_box_3_box_laneMatch);
    $msBox_4_box_1_box_3.append($msBox_4_box_1_box_3_title);
    $msBox_4_box_1_box_3.append($msBox_4_box_1_box_3_box);

    $msBox_4_box_1_box_2.append($msBox_4_box_1_box_2_laneIcon);
    $msBox_4_box_1_box_2.append($msBox_4_box_1_box_2_smnrName);
    $msBox_4_box_1_box_2.append($msBox_4_box_1_box_2_KDA);

    $msBox_4_box_1_box_1.append($msBox_4_box_1_box_1_tier);
    $msBox_4_box_1_box_1.append($msBox_4_box_1_box_1_carryOrDuo);
    
    //apend 4
    $msBox_4_box_1.append($msBox_4_box_1_box_1);
    $msBox_4_box_1.append($msBox_4_box_1_box_2);
    $msBox_4_box_1.append($msBox_4_box_1_box_3);
    $msBox_4_box_1.append($msBox_4_box_1_box_4);

    $msBox_4_box_2.append($msBox_4_box_2_box_1);
    $msBox_4_box_2.append($msBox_4_box_2_box_2);
    $msBox_4_box_2.append($msBox_4_box_2_box_3);
    $msBox_4_box_2.append($msBox_4_box_2_box_4);

    $msBox_4_box_3.append($msBox_4_box_3_box_1);
    $msBox_4_box_3.append($msBox_4_box_3_box_2);
    $msBox_4_box_3.append($msBox_4_box_3_box_3);
    $msBox_4_box_3.append($msBox_4_box_3_box_4);
    
    $msBox_4_box_4.append($msBox_4_box_4_box_1);
    $msBox_4_box_4.append($msBox_4_box_4_box_2);
    $msBox_4_box_4.append($msBox_4_box_4_box_3);
    $msBox_4_box_4.append($msBox_4_box_4_box_4);
    
    $msBox_4_box_5.append($msBox_4_box_5_box_1);
    $msBox_4_box_5.append($msBox_4_box_5_box_2);
    $msBox_4_box_5.append($msBox_4_box_5_box_3);
    $msBox_4_box_5.append($msBox_4_box_5_box_4);

    $msBox_4.append($msBox_4_box_1);
    $msBox_4.append($msBox_4_box_2);
    $msBox_4.append($msBox_4_box_3);
    $msBox_4.append($msBox_4_box_4);
    $msBox_4.append($msBox_4_box_5);
 


  
                                                

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
    //Box3 End-->

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
    //Box2 End-->

    $msBox_1.append($msBox_1_title);
    //Box1 End-->
    $msBox_3.hide();
    $msBox_4.hide();
    $multi_search_container.append($msBox_1);
    $multi_search_container.append($msBox_2);
    $multi_search_container.append($msBox_3);
    $multi_search_container.append($msBox_4);
    //row Boxes End-->

    $multi_search_container.remove();
    $main_func_container.append($multi_search_container);
    // create multi search page End-->
}

//[멀티 서치] 동적 버튼 이벤트
$(document).on('click', '#msBox_2_box_1_btn', function (){ // (event name, element Id, function), element ID는 prefix # 주의!
    
    // 서치 박스 기능 클릭 이벤트 함수
    
    let summoners = $('#msBox_2_box_1_textArea').val();

    make_map_of_summoners(summoners);
    $('#msBox_3').show();
    $('#msBox_4').show();
    $('#pre_temp_txt').hide();

   
});


function requestInfoFromPython(request) {
    $.ajax({
        type : 'post',
        url : 'http://127.0.0.1:5000/multi',
        data : request,
        dataType : 'json',
        contentType: 'application/json',
        success : function(res) {
            console.log("res",res);
            const lane_img_address = "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/";
   
            let tmp_top = 0;
            let tmp_jungle = 0;
            let tmp_middle = 0;
            let tmp_bottom = 0;
            let tmp_utility = 0;

            for (var i = 0; i < summoners_list.length; i++) {
                let smnrName = $('#msBox_4_box_'+(i+1).toString()+'_box_2_smnrName');
                let recentgames = $('#msBox_4_box_'+(i+1).toString()+'_box_3_title');
                let tier_id = $('#msBox_4_box_'+(i+1).toString()+'_box_1_tier');
            
                let iterable_lane_list = [0, 0, 0, 0, 0];  // 인덱스 = lane ex) index[0] = TOP, index[2] = MIDDLE
                let text_lane_list = ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY'];
                $('<p>').text(summoners_list[i]).appendTo(smnrName);
                $('<p>').text("최근 "+(res[summoners_list[i]][0].length).toString()+"경기").appendTo(recentgames); 
                
                let summonerName = summoners_list[i];
                let games = res[summonerName][0];
                let graph_data_from_py = res[summoners_list[i]][1];
                let tier = res[summoners_list[i]][2];

                
                $('<img>').addClass('tierImg').attr({'id':'tier_id_img'+(g+1).toString(),'src':$contextPath+'/resources/ranked-emblems/Emblem_'+tier['tier']+'.png'}).appendTo(tier_id);
                $('<p style="font-size : 18px">').addClass('tierImg_p').attr({'id':'tier_id_p'+(g+1).toString()}).text(tier['tier']+' '+tier['rank']).appendTo(tier_id)
                for (var g = 0; g < games.length; g++) { 
                    let currGame = $('#msBox_4_box_'+(i+1).toString()+'_box_4_currentGame'+(g+1).toString());
                    let currGameStr = 'msBox_4_box_'+(i+1).toString()+'_box_4_currentGame'+(g+1).toString();
                    let game = games[g]
                    let date = new Date(parseInt(game['GAMEENDTIMESTAMP']));
                    let CHAMPIONNAME = game['CHAMPIONNAME'];
                    let lane = game['TEAMPOSITION'];
                    let WIN = game['WIN']
                    
                    switch (lane) {
                        case 'TOP':
                            iterable_lane_list[0] += iterable_lane_list[0]+1
                            break;
                        case 'JUNGLE':
                            iterable_lane_list[1] += iterable_lane_list[1]+1
                            break;
                        case 'MIDDLE':
                            iterable_lane_list[2] += iterable_lane_list[2]+1
                            break;
                        case 'BOTTOM':
                            iterable_lane_list[3] += iterable_lane_list[3]+1
                            break;
                        case 'UTILITY':
                            iterable_lane_list[4] += iterable_lane_list[4]+1
                            break;
                        default:
                            console.log('게임없음');
                    }
     
                    $('<img>').addClass('champImg').attr({'id':currGameStr+'_champImg'+(g+1).toString(),'src':champion_img_url(CHAMPIONNAME)}).appendTo(currGame);
                    $('<img>').addClass('laneGameImg').attr({'id':currGameStr+'_laneGameImg'+(g+1).toString(),'src':lane_img_url(lane)}).appendTo(currGame);
                    $('<p style="margin : 10px;">').text("  "+game['KILLS']+"/"+game['DEATHS']+"/"+game['ASSISTS']).appendTo(currGame);
                    $('<p style="margin : 10px;">').text((date.getMonth()+1)+"/"+date.getDate()+"\n"+"일").appendTo(currGame);
                    
                    if (WIN == 1) {
                        currGame.css('backgroundColor','skyblue');
                    }
                    else {
                        currGame.css('backgroundColor','khaki');
                    };
         
                 }// End Inner for
                 let tmp_max = iterable_lane_list[0];
                 let tmp_index;
                for (var x = 0; x<5; x++) {
                    if (iterable_lane_list[x]>tmp_max) {
                        tmp_max = iterable_lane_list[x];
                        tmp_index = x;
                    }
                }//End Inner for 2
                most_lane_box = $('#msBox_4_box_'+(i+1).toString()+'_box_2_laneIcon');
                most_lane = text_lane_list[tmp_index];
                most_lane_box.attr('src',lane_img_address+'icon-position-'+most_lane.toLowerCase()+'.png');
               
                switch (tmp_index) {
                    case 0:
                        tmp_top +=1
                        break;
                    case 1:
                        tmp_jungle +=1
                        break;
                    case 2:
                        tmp_middle +=1
                        break;
                    case 3:
                        tmp_bottom +=1
                        break;
                    case 4:
                        tmp_utility +=1
                        break;
                    default:
                        console.log('라인리스트 추가할 값 없음');
                }
                 
                let ctx = document.getElementById('ability_graph_'+(i+1).toString()).getContext('2d');

                let G15_DIF = graph_data_from_py['G15_DIF'];
                let DEATHS_DIF = graph_data_from_py['DEATHS_DIF'];
                let VSCORE_DIF = graph_data_from_py['VSCORE_DIF'];
                let GOLD_DIF = graph_data_from_py['GOLD_DIF'];
                let DEALT_DIF = graph_data_from_py['DEALT_DIF'];

                let graph_data = { // Object structure
                    labels: [
                      '15분 골드 차이',
                      '생존',
                      '시야',
                      '성장',
                      '전투'
                    ],
                    datasets: [{
                      label: '소환사의 주요 지표 그래프',
                      data: [G15_DIF, DEATHS_DIF, VSCORE_DIF, GOLD_DIF, DEALT_DIF],
                      fill: true,
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgb(255, 99, 132)',
                      pointBackgroundColor: 'rgb(255, 99, 132)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgb(255, 99, 132)'
                    }, {
                      label: '소환사 티어의 평균 그래프',
                      data: [1, 1, 1, 1, 1],
                      fill: true,
                      backgroundColor: 'rgba(54, 162, 235, 0.2)',
                      borderColor: 'rgb(54, 162, 235)',
                      pointBackgroundColor: 'rgb(54, 162, 235)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgb(54, 162, 235)'

                    }]
                }; //End graph_data

                new Chart(ctx, { // Object structure
                    type: 'radar',
                    data: graph_data,
                    options : {
                            scales: {
                                r: {
                               
                                    ticks: {
                                        stepSize: 0.1
                                    }
                                }
                        }
                    }
                }); //End myChart
          
            } //End Outter for
    
           
            $msBox_3_box_3_mostLanes = $('#msBox_3_box_3_mostLanes');

            $('<img>').addClass('laneImg').attr('src',lane_img_address+'icon-position-top.png').appendTo($msBox_3_box_3_mostLanes);
            $('<p>').addClass('laneImg_p').attr('id','laneImg_top').text(tmp_top).appendTo($msBox_3_box_3_mostLanes);
            $('<img>').addClass('laneImg').attr('src',lane_img_address+'icon-position-jungle.png').appendTo($msBox_3_box_3_mostLanes);
            $('<p>').addClass('laneImg_p').attr('id','laneImg_jungle').text(tmp_jungle).appendTo($msBox_3_box_3_mostLanes);
            $('<img>').addClass('laneImg').attr('src',lane_img_address+'icon-position-middle.png').appendTo($msBox_3_box_3_mostLanes);
            $('<p>').addClass('laneImg_p').attr('id','laneImg_middle').text(tmp_middle).appendTo($msBox_3_box_3_mostLanes);
            $('<img>').addClass('laneImg').attr('src',lane_img_address+'icon-position-bottom.png').appendTo($msBox_3_box_3_mostLanes);
            $('<p>').addClass('laneImg_p').attr('id','laneImg_bottom').text(tmp_bottom).appendTo($msBox_3_box_3_mostLanes);
            $('<img>').addClass('laneImg').attr('src',lane_img_address+'icon-position-utility.png').appendTo($msBox_3_box_3_mostLanes);
            $('<p>').addClass('laneImg_p').attr('id','laneImg_utility').text(tmp_utility).appendTo($msBox_3_box_3_mostLanes);

           
            //$('<p>').addClass('laneImg_p').attr('id','laneImg_top').text(tmp_top).appendTo($msBox_3_box_3_mostLanes);
            //$('<p>').addClass('laneImg_p').attr('id','laneImg_jungle').text(tmp_jungle).appendTo($msBox_3_box_3_mostLanes);
            //$('<p>').addClass('laneImg_p').attr('id','laneImg_middle').text(tmp_middle).appendTo($msBox_3_box_3_mostLanes);
            //$('<p>').addClass('laneImg_p').attr('id','laneImg_bottom').text(tmp_bottom).appendTo($msBox_3_box_3_mostLanes);
            //$('<p>').addClass('laneImg_p').attr('id','laneImg_utility').text(tmp_utility).appendTo($msBox_3_box_3_mostLanes);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            alert("XMLHttpRequest : " + XMLHttpRequest + ' textStatus : '
                    + textStatus + ' errorThrown : ' + errorThrown);
        } //End error
    })
} //End requestInfoFromPython

function make_map_of_summoners(summoners) {
    let tmp_map = new Map();
    	let temp = summoners.replace(/\n/gi, "").replace(/로비에/gi, "").replace(/님이/gi, "").replace(/참가하셨습니다./gi, "").replace(/\s\s\s/gi, ",")
		.replace(/\s$/gi, "").replace(/\s$/gi, "").toLowerCase();
		//console.log(summoners);
		summoners_list = temp.split(",");
		//console.log(summoners_list);
 		for (var i = 0; i < summoners_list.length; i++){
			tmp_map.set("summoner"+((i+1).toString()),summoners_list[i]);
			//console.log("summoner"+((i+1).toString()));
			//console.log(summoners_list[i]);
			//s_obj = {"summoner"+((i+1).toString()) : summoners_list[i]};
		}
		console.log(tmp_map);
		requestInfoFromPython(JSON.stringify(Object.fromEntries(tmp_map)));
}

function champion_img_url (CHAMPIONNAME) {
		return 'https://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/'+CHAMPIONNAME+'.png';
	}
function lane_img_url (lane) {
      return 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-'+lane.toLowerCase()+'.png';
}

$(document).ready(function () {
    
 
 

});
