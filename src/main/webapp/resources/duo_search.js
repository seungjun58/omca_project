function render_duo_search_window() {
    <!-- 1. container for page -->
    let $duo_search_container = $('<div>').addClass('duo_search_container');


    <!-- 2. row boxes -->
    let $dsBox_1 = $('<div>').addClass('dsBox').attr({'id':'dsBox_1'}); // 페이지 제목, 설명
    let $dsBox_2 = $('<div>').addClass('dsBox').attr({'id':'dsBox_2'}); // 버튼 박스 (큐 선택, 티어 선택, 라인별 정렬, 글쓰기)
    let $dsBox_3 = $('<div>').addClass('dsBox').attr({'id':'dsBox_3'}); // 글쓰기 박스 (default = display : none)
    let $dsBox_4 = $('<div>').addClass('dsBox').attr({'id':'dsBox_4'}); // 듀오찾기 글 목록 표출 박스

    <!-- 3. column elements in row boxes -->
    let $dsBox_1_title = $('<h2>').attr({'id':'dsBox_1_title'}).text('듀오 찾기');
    let $dsBox_1_description = $('<pre>').attr({'id':'dsBox_1_description'}).text('케미 분석으로 나와 잘 맞는 파트너를 찾아보세요!');

    let $dsBox_2_selectBox_1 = $('<div>').addClass('dsBox_2_selectBoxes').attr({'id':'dsBox_2_selectBox_1'}); // Queue select box
    let $dsBox_2_selectBox_2 = $('<div>').addClass('dsBox_2_selectBoxes').attr({'id':'dsBox_2_selectBox_2'}); // Tier select box
    let $dsBox_2_box_3 = $('<div>').addClass('dsBox_2_boxes').attr({'id':'dsBox_2_box_3'}); // Lane select buttons box
    let $dsBox_2_box_4 = $('<div>').addClass('dsBox_2_boxes').attr({'id':'dsBox_2_box_4'}); // open Write button box

    let $dsBox_3_box_1 = $('<div>').addClass('dsBox_3_boxes').attr({'id':'dsBox_3_box_1'}); // 글쓰기 안내 멘트 박스
    let $dsBox_3_box_2 = $('<div>').addClass('dsBox_3_boxes').attr({'id':'dsBox_3_box_2'}); // 글쓰기 박스

// let $dsBox_4_box_1 = $('<div>').addClass('dsBox_4_boxes').attr({'id':'dsBox_4_box_1'}); // 리스트는 함수로 양에 따라 생성 예정

    <!-- 4. inner elements in column elements -->
// 큐 옵션
    let $dsBox_2_selectBox_1_selected_element = $('<div>').addClass('selectBox_selected_elements').attr({'id':'dsBox_2_selectBox_1_selected_element'}).text('모든 큐'); // selected
    let $dsBox_2_selectBox_1_elements_list = $('<ul>').addClass('selectBoxes_elements_list').attr({'id':'dsBox_2_selectBox_1_elements_list'}); // list of queue
    const $dsBox_2_selectBox_1_elements = ['모든 큐', '솔로랭크','자유랭크','일반','칼바람'];
    $dsBox_2_selectBox_1_elements.forEach(function(q) {
        $('<li>').text(q).appendTo($dsBox_2_selectBox_1_elements_list);
    });

// 티어 옵션
    let $dsBox_2_selectBox_2_selected_element = $('<div>').addClass('selectBox_selected_elements').attr({'id':'dsBox_2_selectBox_2_selected_element'}).text('모든 티어');// selected
    let $dsBox_2_selectBox_2_elements_list = $('<ul>').addClass('selectBoxes_elements_list').attr({'id':'dsBox_2_selectBox_2_elements_list'}); // list of tier
    const $dsBox_2_selectBox_2_elements = ['모든 티어','Challenger','Grandmaster','Master','Diamond', 'Platinum','Gold','Silver','Bronze','Iron'];
    $dsBox_2_selectBox_2_elements.forEach(function(q) {
        $('<li>').text(q).appendTo($dsBox_2_selectBox_2_elements_list);
    });

// 정렬 버튼
    let $dsBox_2_box_3_btn_1 = $('<input>').addClass('dsBox_2_box_3_btns').attr({'id':'dsBox_2_box_3_btn_1','type':'button', 'value':'ALL'});//정렬 : ALL
    let $dsBox_2_box_3_btn_2 = $('<input>').addClass('dsBox_2_box_3_btns').attr({'id':'dsBox_2_box_3_btn_2','type':'button', 'value':'TOP'});//정렬 : TOP
    let $dsBox_2_box_3_btn_3 = $('<input>').addClass('dsBox_2_box_3_btns').attr({'id':'dsBox_2_box_3_btn_3','type':'button', 'value':'JUNGLE'});//정렬 : JUNGLE
    let $dsBox_2_box_3_btn_4 = $('<input>').addClass('dsBox_2_box_3_btns').attr({'id':'dsBox_2_box_3_btn_4','type':'button', 'value':'MIDDLE'});//정렬 : MIDDLE
    let $dsBox_2_box_3_btn_5 = $('<input>').addClass('dsBox_2_box_3_btns').attr({'id':'dsBox_2_box_3_btn_5','type':'button', 'value':'BOTTOM'});//정렬 : BOTTOM
    let $dsBox_2_box_3_btn_6 = $('<input>').addClass('dsBox_2_box_3_btns').attr({'id':'dsBox_2_box_3_btn_6','type':'button', 'value':'SUPPORT'});//정렬 : SUPPORT

// 글쓰기 버튼
    let $dsBox_2_box_4_btn = $('<input>').addClass('dsBox_2_box_4_btn').attr({'id':'dsBox_2_box_4_btn','type':'button', 'value':'글쓰기'});//글쓰기

    let $dsBox_3_box_1_box_1 = $('<div>').addClass('dsBox_3_box_1_boxes').attr({'id':'dsBox_3_box_1_box_1'}); // 글쓰기 안내 멘트
    let duo_search_warning = '듀오신청에서 타인을 사칭하거나 모욕하는 일은 \n법률에 의해 제재를 받을 수 있습니다.';
    $('<pre>').text(duo_search_warning).appendTo($dsBox_3_box_1_box_1);
    let $dsBox_3_box_1_box_2 = $('<div>').addClass('dsBox_3_box_1_boxes').attr({'id':'dsBox_3_box_1_box_2'}); // 글쓰기 안내 멘트 밑 캐릭터
    $('<img>').attr({'id':'duo_search_warning_img', 'src': $contextPath + '/resources/duo_warning.png'}).appendTo($dsBox_3_box_1_box_2);

    let $dsBox_3_box_2_box_1 = $('<div>').addClass('dsBox_3_box_2_boxes').attr({'id':'dsBox_3_box_2_box_1'}); // 글쓰기 박스의 옵션 선택 버튼들의 박스
    let $dsBox_3_box_2_box_2 = $('<div>').addClass('dsBox_3_box_2_boxes').attr({'id':'dsBox_3_box_2_box_2'}); // 글쓰기 박스

    let $dsBox_3_box_2_box_1_selectBox_1 = $('<div>').addClass('dsBox_3_box_2_box_1_selectBoxes').attr({'id':'dsBox_3_box_2_box_1_selectBox_1'}); // 글쓰기 박스의 옵션 선택 버튼들
    let $dsBox_3_box_2_box_1_selectBox_2 = $('<div>').addClass('dsBox_3_box_2_box_1_selectBoxes').attr({'id':'dsBox_3_box_2_box_1_selectBox_2'}); // 글쓰기 박스의 옵션 선택 버튼들 / 2개만 일단

    let $dsBox_3_box_2_box_2_box_1 = $('<div>').addClass('dsBox_3_box_2_box_2_boxes').attr({'id':'dsBox_3_box_2_box_2_box_1'}); // 글쓰기 제목 내용 박스
    let $dsBox_3_box_2_box_2_box_2 = $('<div>').addClass('dsBox_3_box_2_box_2_boxes').attr({'id':'dsBox_3_box_2_box_2_box_2'}); // 글쓰기 전송 버튼 박스

// 큐 옵션
    let $dsBox_3_box_2_box_1_selectBox_1_selected_element = $('<div>').addClass('selectBox_selected_elements').attr({'id':'dsBox_3_box_2_box_1_selectBox_1_selected_element'}).text('솔로랭크'); // selected
    let $dsBox_3_box_2_box_1_selectBox_1_elements_list = $('<ul>').addClass('selectBoxes_elements_list').attr({'id':'dsBox_3_box_2_box_1_selectBox_1_elements_list'}); // list of queue
    const $dsBox_3_box_2_box_1_selectBox_1_elements = ['솔로랭크','자유랭크','일반','칼바람'];
    $dsBox_3_box_2_box_1_selectBox_1_elements.forEach(function(q) {
        $('<li>').text(q).appendTo($dsBox_3_box_2_box_1_selectBox_1_elements_list);
    });

// 포지션 옵션
    let $dsBox_3_box_2_box_1_selectBox_2_selected_element = $('<div>').addClass('selectBox_selected_elements').attr({'id':'dsBox_3_box_2_box_1_selectBox_2_selected_element'}).text('모든 포지션 구함'); // selected
    let $dsBox_3_box_2_box_1_selectBox_2_elements_list = $('<ul>').addClass('selectBoxes_elements_list').attr({'id':'dsBox_3_box_2_box_1_selectBox_2_elements_list'}); // list of queue
    const $dsBox_3_box_2_box_1_selectBox_2_elements = ['모든 포지션 구함','탑','정글','미드','원딜','서포터'];
    $dsBox_3_box_2_box_1_selectBox_2_elements.forEach(function(q) {
        $('<li>').text(q).appendTo($dsBox_3_box_2_box_1_selectBox_2_elements_list);
    });

    let $dsBox_3_box_2_box_2_box_1_title = $('<input>').addClass('dsBox_3_box_2_box_2_box_1_title').attr({'id':'dsBox_3_box_2_box_2_box_1_title','type':'text', 'placeholder':'소환사명'}); // 글쓰기 제목
    let $dsBox_3_box_2_box_2_box_1_textArea = $('<textarea>').attr({'id':'dsBox_3_box_2_box_2_box_1_textArea', 'placeholder':'내용 (200자 이내)'}); // 글쓰기 내용

    let $dsBox_3_box_2_box_2_box_2_btn = $('<input>').addClass('dsBox_3_box_2_box_2_box_2_btn').attr({'id':'dsBox_3_box_2_box_2_box_2_btn','type':'button', 'value':'등록'}); // 글쓰기 등록 버튼 박스










    $dsBox_3_box_2_box_1_selectBox_1.append($dsBox_3_box_2_box_1_selectBox_1_selected_element);// 글쓰기 버튼 옵션 1
    $dsBox_3_box_2_box_1_selectBox_1.append($dsBox_3_box_2_box_1_selectBox_1_elements_list);// 글쓰기 버튼 옵션 1
    $dsBox_3_box_2_box_1_selectBox_2.append($dsBox_3_box_2_box_1_selectBox_2_selected_element);// 글쓰기 버튼 옵션 2
    $dsBox_3_box_2_box_1_selectBox_2.append($dsBox_3_box_2_box_1_selectBox_2_elements_list);// 글쓰기 버튼 옵션 2
    $dsBox_3_box_2_box_2_box_1.append($dsBox_3_box_2_box_2_box_1_title);
    $dsBox_3_box_2_box_2_box_1.append($dsBox_3_box_2_box_2_box_1_textArea);
    $dsBox_3_box_2_box_2_box_2.append($dsBox_3_box_2_box_2_box_2_btn);// 글쓰기 등록 버튼

    $dsBox_3_box_2_box_1.append($dsBox_3_box_2_box_1_selectBox_1);// 글쓰기 버튼 옵션 박스 1
    $dsBox_3_box_2_box_1.append($dsBox_3_box_2_box_1_selectBox_2);// 글쓰기 버튼 옵션 박스 2
    $dsBox_3_box_2_box_2.append($dsBox_3_box_2_box_2_box_1);// 글쓰기 제목 내용 박스
    $dsBox_3_box_2_box_2.append($dsBox_3_box_2_box_2_box_2);// 글쓰기 전송 버튼 박스
    
    $dsBox_3_box_1.append($dsBox_3_box_1_box_1);//안내멘트 박스 append 글쓰기 안내 멘트 박스
    $dsBox_3_box_1.append($dsBox_3_box_1_box_2);//안내멘트 박스 append 글쓰기 안내 멘트 밑, 캐릭터 이미지 박스
    $dsBox_3_box_2.append($dsBox_3_box_2_box_1);//글쓰기 박스
    $dsBox_3_box_2.append($dsBox_3_box_2_box_2);//글쓰기 박스

    $dsBox_3.append($dsBox_3_box_1);
    $dsBox_3.append($dsBox_3_box_2);
    $dsBox_3.hide();
    <!--Box3 End-->


    $dsBox_2_selectBox_1.append($dsBox_2_selectBox_1_selected_element);
    $dsBox_2_selectBox_1.append($dsBox_2_selectBox_1_elements_list);
    $dsBox_2_selectBox_2.append($dsBox_2_selectBox_2_selected_element);
    $dsBox_2_selectBox_2.append($dsBox_2_selectBox_2_elements_list);
    $dsBox_2_box_3.append($dsBox_2_box_3_btn_1);
    $dsBox_2_box_3.append($dsBox_2_box_3_btn_2);
    $dsBox_2_box_3.append($dsBox_2_box_3_btn_3);
    $dsBox_2_box_3.append($dsBox_2_box_3_btn_4);
    $dsBox_2_box_3.append($dsBox_2_box_3_btn_5);
    $dsBox_2_box_3.append($dsBox_2_box_3_btn_6);
    $dsBox_2_box_4.append($dsBox_2_box_4_btn);

    $dsBox_2.append($dsBox_2_selectBox_1);
    $dsBox_2.append($dsBox_2_selectBox_2);
    $dsBox_2.append($dsBox_2_box_3);
    $dsBox_2.append($dsBox_2_box_4);
    <!--Box2 End-->

    $dsBox_1.append($dsBox_1_title);
    $dsBox_1.append($dsBox_1_description);
    <!--Box1 End-->

    $duo_search_container.append($dsBox_1);
    $duo_search_container.append($dsBox_2);
    $duo_search_container.append($dsBox_3);
    $duo_search_container.append($dsBox_4);
    <!--row Boxes End-->

    $main_func_container.append($duo_search_container);
    <!-- create multi search page End-->
}

//[듀오 찾기] 동적 버튼 이벤트
// 글쓰기 버튼
$(document).on('click', '#dsBox_2_box_4_btn', function (){ // (event name, element Id, function), element ID는 prefix # 주의!
    let writeWindowBtn = $(this);
    let writeWindow = $('#dsBox_3');
    if (writeWindow.css('display') == 'none') {
        writeWindowBtn.attr('value','닫기');
        writeWindow.show();
    } else {
        writeWindowBtn.attr('value','글쓰기');
        writeWindow.hide();
    }
});

//selectBox_selected_elements // div default selected
//selectBoxes_elements_list // ul
/* 셀렉트박스 보이게 하기 */
$(document).on("click", ".selectBox_selected_elements", function () {
    let id = $(this).attr('id');
    $('#'+id).next().toggle();
})

/* 셀렉트 박스 옵션 선택 */
$(document).on("click", ".selectBoxes_elements_list li", function () {
    let selectedText = $(this).html();
    let parent = $(this).parent();
    parent.prev().html(selectedText);
    parent.toggle();
})

/* 셀렉트 박스 이외 선택시 보이지 않게 하기 */
$(document).on("click", function(e){
    if($(".selectBoxes_elements_list").css("display") == "block"){
        if($(this).parent().has(e.target).length == 0){
            $(this).hide();
        }
    }
})



// $('#dsBox_4').append('slkgjlas');