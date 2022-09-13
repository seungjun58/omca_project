function render_point_shop_window() {
    <!-- 1. container for page -->
    let $point_shop_container = $('<div>').addClass('point_shop_container');

    <!-- 2. row boxes -->
    let $psBox_1 = $('<div>').addClass('psBox').attr('id','psBox_1');
    let $psBox_2 = $('<div>').addClass('psBox').attr({'id':'psBox_2'});
    let $psBox_3 = $('<div>').addClass('psBox').attr({'id':'psBox_3'});
    let $psBox_4 = $('<div>').addClass('psBox').attr({'id':'psBox_4'});

    <!-- 3. column elements in row boxes -->
    let $psBox_1_title = $('<h2>').attr({'id':'psBox_1_title'}).text('POINT SHOP');

    let $psBox_2_box_1 = $('<div>').addClass('psBox_2_boxes').attr({'id':'psBox_2_box_1'});
    let $psBox_2_box_2 = $('<div>').addClass('psBox_2_boxes').attr({'id':'psBox_2_box_2'});
    let $psBox_2_box_3 = $('<div>').addClass('psBox_2_boxes').attr({'id':'psBox_2_box_3'});

    let $psBox_3_btn_1 = $('<button>').addClass('psBox_3_btns').attr({'id':'psBox_3_btn_1','type':'button'}).text('ALL');
    let $psBox_3_btn_2 = $('<input>').addClass('psBox_3_btns').attr({'id':'psBox_3_btn_2','type':'button', 'value':'5000P미만'});
    let $psBox_3_btn_3 = $('<input>').addClass('psBox_3_btns').attr({'id':'psBox_3_btn_3','type':'button', 'value':'10000P이상'});
    let $psBox_3_btn_4 = $('<input>').addClass('psBox_3_btns').attr({'id':'psBox_3_btn_4','type':'button', 'value':'20000P이상'});

    let $psBox_4_box_1 = $('<div>').addClass('psBox_4_boxes').attr({'id':'psBox_4_box_1'});
    let $psBox_4_box_2 = $('<div>').addClass('psBox_4_boxes').attr({'id':'psBox_4_box_2'});
    let $psBox_4_box_3 = $('<div>').addClass('psBox_4_boxes').attr({'id':'psBox_4_box_3'});
    let $psBox_4_box_4 = $('<div>').addClass('psBox_4_boxes').attr({'id':'psBox_4_box_4'});

    <!-- 4. inner elements in column elements -->
    let $psBox_2_box_1_img = $('<img>').addClass('psBox_2_box_1_img').attr({'id':'psBox_2_box_1_img','src':$contextPath+'/resources/G00001284055.jpg'});
    let $psBox_2_box_1_box = $('<div>').addClass('psBox_2_box_1_box').attr({'id':'psBox_2_box_1_box'});
    let $psBox_2_box_1_box_rank = $('<h4>').addClass('psBox_2_box_1_box_rank')
        .attr({'id':'psBox_2_box_1_box_rank'})
        .text('1위');
    let $psBox_2_box_2_img = $('<img>').addClass('psBox_2_box_2_img').attr({'id':'psBox_2_box_2_img','src':$contextPath+'/resources/G00001284055.jpg'});
    let $psBox_2_box_2_box = $('<div>').addClass('psBox_2_box_2_box').attr({'id':'psBox_2_box_2_box'});
    let $psBox_2_box_2_box_rank = $('<h4>').addClass('psBox_2_box_2_box_rank')
        .attr({'id':'psBox_2_box_2_box_rank'})
        .text('2위');
    let $psBox_2_box_3_img = $('<img>').addClass('psBox_2_box_3_img').attr({'id':'psBox_2_box_3_img','src':$contextPath+'/resources/G00001284055.jpg'});
    let $psBox_2_box_3_box = $('<div>').addClass('psBox_2_box_3_box').attr({'id':'psBox_2_box_3_box'});
    let $psBox_2_box_3_box_rank = $('<h4>').addClass('psBox_2_box_3_box_rank')
        .attr({'id':'psBox_2_box_3_box_rank'})
        .text('3위');


    <!-- 5. Reversible product data SAMPLE 1-->
    let $psBox_4_box_1_img = $('<img>').addClass('psBox_4_box_1_img').attr({'id':'psBox_4_box_1_img','src':$contextPath+'/resources/G00001284055.jpg'});
    let $psBox_4_box_1_box_1 = $('<div>').addClass('psBox_4_box_1_box1').attr({'id':'psBox_4_box_1_box_1'});
    let $psBox_4_box_1_box_1_productName = $('<h5>').addClass('psBox_4_box_1_box_1_productName').attr({'id':'psBox_4_box_1_box_1_productName'}).text('상품명:아메리카노');
    let $psBox_4_box_1_box_1_price = $('<h5>').addClass('psBox_4_box_1_box_1_price').attr({'id':'psBox_4_box_1_box_1_price'}).text('가격:0000p');

    let $psBox_4_box_1_box_2 = $('<div>').addClass('psBox_4_box_1_box2').attr({'id':'psBox_4_box_1_box2'});
    let $psBox_4_box_1_box_2_btn_1 = $('<input>').addClass('psBox_4_box_1_box_2_btn_1').attr({'id':'psBox_4_box_1_box_2_btn_1','type':'button', 'value':'구매하기'});
    let $psBox_4_box_1_box_2_btn_2 = $('<input>').addClass('psBox_4_box_1_box_2_btn_2').attr({'id':'psBox_4_box_1_box_2_btn_2','type':'button', 'value':'장바구니'});

    <!-- 5. Reversible product data SAMPLE 2-->
    let $psBox_4_box_2_img = $('<img>').addClass('psBox_4_box_2_img').attr({'id':'psBox_4_box_2_img','src':$contextPath+'/resources/G00001284055.jpg'});
    let $psBox_4_box_2_box_1 = $('<div>').addClass('psBox_4_box_2_box1').attr({'id':'psBox_4_box_2_box_1'});
    let $psBox_4_box_2_box_1_productName = $('<h5>').addClass('psBox_4_box_2_box_1_productName').attr({'id':'psBox_4_box_2_box_1_productName'}).text('상품명:아메리카노');
    let $psBox_4_box_2_box_1_price = $('<h5>').addClass('psBox_4_box_2_box_1_price').attr({'id':'psBox_4_box_2_box_1_price'}).text('가격:0000p');

    let $psBox_4_box_2_box_2 = $('<div>').addClass('psBox_4_box_2_box2').attr({'id':'psBox_4_box_2_box2'});
    let $psBox_4_box_2_box_2_btn_1 = $('<input>').addClass('psBox_4_box_2_box_2_btn_1').attr({'id':'psBox_4_box_2_box_2_btn_1','type':'button', 'value':'구매하기'});
    let $psBox_4_box_2_box_2_btn_2 = $('<input>').addClass('psBox_4_box_2_box_2_btn_2').attr({'id':'psBox_4_box_2_box_2_btn_2','type':'button', 'value':'장바구니'});

    <!-- 5. Reversible product data SAMPLE 3-->
    let $psBox_4_box_3_img = $('<img>').addClass('psBox_4_box_3_img').attr({'id':'psBox_4_box_3_img','src':$contextPath+'/resources/G00001284055.jpg'});
    let $psBox_4_box_3_box_1 = $('<div>').addClass('psBox_4_box_3_box1').attr({'id':'psBox_4_box_3_box_1'});
    let $psBox_4_box_3_box_1_productName = $('<h5>').addClass('psBox_4_box_3_box_1_productName').attr({'id':'psBox_4_box_3_box_1_productName'}).text('상품명:아메리카노');
    let $psBox_4_box_3_box_1_price = $('<h5>').addClass('psBox_4_box_3_box_1_price').attr({'id':'psBox_4_box_3_box_1_price'}).text('가격:0000p');

    let $psBox_4_box_3_box_2 = $('<div>').addClass('psBox_4_box_3_box2').attr({'id':'psBox_4_box_3_box2'});
    let $psBox_4_box_3_box_2_btn_1 = $('<input>').addClass('psBox_4_box_3_box_2_btn_1').attr({'id':'psBox_4_box_3_box_2_btn_1','type':'button', 'value':'구매하기'});
    let $psBox_4_box_3_box_2_btn_2 = $('<input>').addClass('psBox_4_box_3_box_2_btn_2').attr({'id':'psBox_4_box_3_box_2_btn_2','type':'button', 'value':'장바구니'});

    <!-- 5. Reversible product data SAMPLE 4-->
    let $psBox_4_box_4_img = $('<img>').addClass('psBox_4_box_4_img').attr({'id':'psBox_4_box_4_img','src':$contextPath+'/resources/G00001284055.jpg'});
    let $psBox_4_box_4_box_1 = $('<div>').addClass('psBox_4_box_4_box1').attr({'id':'psBox_4_box_4_box_1'});
    let $psBox_4_box_4_box_1_productName = $('<h5>').addClass('psBox_4_box_4_box_1_productName').attr({'id':'psBox_4_box_4_box_1_productName'}).text('상품명:아메리카노');
    let $psBox_4_box_4_box_1_price = $('<h5>').addClass('psBox_4_box_4_box_1_price').attr({'id':'psBox_4_box_4_box_1_price'}).text('가격:0000p');

    let $psBox_4_box_4_box_2 = $('<div>').addClass('psBox_4_box_4_box2').attr({'id':'psBox_4_box_4_box2'});
    let $psBox_4_box_4_box_2_btn_1 = $('<input>').addClass('psBox_4_box_4_box_2_btn_1').attr({'id':'psBox_4_box_4_box_2_btn_1','type':'button', 'value':'구매하기'});
    let $psBox_4_box_4_box_2_btn_2 = $('<input>').addClass('psBox_4_box_4_box_2_btn_2').attr({'id':'psBox_4_box_4_box_2_btn_2','type':'button', 'value':'장바구니'});




    $psBox_4_box_4_box_2.append($psBox_4_box_4_box_2_btn_1);
    $psBox_4_box_4_box_2.append($psBox_4_box_4_box_2_btn_2);

    $psBox_4_box_4_box_1.append($psBox_4_box_4_box_1_productName);
    $psBox_4_box_4_box_1.append($psBox_4_box_4_box_1_price);

    $psBox_4_box_4.append($psBox_4_box_4_img);
    $psBox_4_box_4.append($psBox_4_box_4_box_1);
    $psBox_4_box_4.append($psBox_4_box_4_box_2);


    $psBox_4_box_3_box_2.append($psBox_4_box_3_box_2_btn_1);
    $psBox_4_box_3_box_2.append($psBox_4_box_3_box_2_btn_2);

    $psBox_4_box_3_box_1.append($psBox_4_box_3_box_1_productName);
    $psBox_4_box_3_box_1.append($psBox_4_box_3_box_1_price);

    $psBox_4_box_3.append($psBox_4_box_3_img);
    $psBox_4_box_3.append($psBox_4_box_3_box_1);
    $psBox_4_box_3.append($psBox_4_box_3_box_2);


    $psBox_4_box_2_box_2.append($psBox_4_box_2_box_2_btn_1);
    $psBox_4_box_2_box_2.append($psBox_4_box_2_box_2_btn_2);

    $psBox_4_box_2_box_1.append($psBox_4_box_2_box_1_productName);
    $psBox_4_box_2_box_1.append($psBox_4_box_2_box_1_price);

    $psBox_4_box_2.append($psBox_4_box_2_img);
    $psBox_4_box_2.append($psBox_4_box_2_box_1);
    $psBox_4_box_2.append($psBox_4_box_2_box_2);


    $psBox_4_box_1_box_2.append($psBox_4_box_1_box_2_btn_1);
    $psBox_4_box_1_box_2.append($psBox_4_box_1_box_2_btn_2);

    $psBox_4_box_1_box_1.append($psBox_4_box_1_box_1_productName);
    $psBox_4_box_1_box_1.append($psBox_4_box_1_box_1_price);

    $psBox_4_box_1.append($psBox_4_box_1_img);
    $psBox_4_box_1.append($psBox_4_box_1_box_1);
    $psBox_4_box_1.append($psBox_4_box_1_box_2);


    $psBox_4.append($psBox_4_box_1);
    $psBox_4.append($psBox_4_box_2);
    $psBox_4.append($psBox_4_box_3);
    $psBox_4.append($psBox_4_box_4);
    <!--Box4 End-->


    $psBox_3.append($psBox_3_btn_1);
    $psBox_3.append($psBox_3_btn_2);
    $psBox_3.append($psBox_3_btn_3);
    $psBox_3.append($psBox_3_btn_4);
    <!--Box3 End-->


    $psBox_2_box_1_box.append($psBox_2_box_1_box_rank);
    $psBox_2_box_1.append($psBox_2_box_1_img);
    $psBox_2_box_1.append($psBox_2_box_1_box);

    $psBox_2_box_2_box.append($psBox_2_box_2_box_rank);
    $psBox_2_box_2.append($psBox_2_box_2_img);
    $psBox_2_box_2.append($psBox_2_box_2_box);

    $psBox_2_box_3_box.append($psBox_2_box_3_box_rank);
    $psBox_2_box_3.append($psBox_2_box_3_img);
    $psBox_2_box_3.append($psBox_2_box_3_box);

    $psBox_2.append($psBox_2_box_1);
    $psBox_2.append($psBox_2_box_2);
    $psBox_2.append($psBox_2_box_3);
    <!--Box2 End-->

    $psBox_1.append($psBox_1_title);
    <!--Box1 End-->


    $point_shop_container.append($psBox_1);
    $point_shop_container.append($psBox_2);
    $point_shop_container.append($psBox_3);
    $point_shop_container.append($psBox_4);
    <!--row Boxes End-->

    $main_func_container.append($point_shop_container);
    <!-- create point shop page End-->
}

//[포인트 샵] 동적 버튼 이벤트
// $(document).on('click', '#psBox_2_box_1_btn', function (){ // (event name, element Id, function), element ID는 prefix # 주의!
//     let txt = $('#psBox_2_box_1_textArea').val();
//     $('#psBox_3').show();
//     $('#psBox_4').show();
//     $('#pre_temp_txt').hide();
//     alert(txt);
// });

