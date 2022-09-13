<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2022-09-02
  Time: 오후 12:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Template Web Site</title>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>

    <link rel="stylesheet" href="resources/search_bar.css?after">
    <link rel="stylesheet" href="resources/joinForm.css?after">
    <link rel="stylesheet" href="resources/multi_search.css?after">
    <link rel="stylesheet" href="resources/point_shop.css?after">
    <link rel="stylesheet" href="resources/duo_search.css?after">

    <style>
        body {
            margin: 0;
        }

        #notice {
            background-color: yellow;
            padding: 5px;
        }

        /* header 영역 */
        header {
            height: 100px;
            /*background-color: tomato;*/
            background-color: black;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            color: white;
        }

        .logo_container {
            flex-grow: 2;
            padding: 20px;
        }

        .header_space {
            flex: 5;
            padding: 20px;
        }

        .login_container {
            flex: 3;
            padding: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .member-menu-btn {
            color: white;
            padding: 14px 20px;
            text-decoration: none;
            text-align: center;
        }

        #logo {
            width: 250px;
            height: 70px;
            filter: drop-shadow(3px 3px 3px #dddddd)
        }

        /* navigation bar */
        nav {
            display: flex;
            justify-content: center;
            background-color: #000000;
        }

        nav a {
            color: white;
            padding: 14px 20px;
            text-decoration: none;
            text-align: center;
        }

        nav a:hover {
            background-color: #dddddd;
            color: black;
        }

        #container, #home_container {
            display: flex;
            flex-wrap: wrap;
        }

        #main_func_container {
            display: none;
            flex-wrap: wrap;
        }

        #videobg{
            position: absolute;
            top: 0px;
            left: 0px;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: -1000;
            overflow: hidden;
        }

        /* 왼쪽 사이드 */
        aside {
            flex-grow: 3;
            background-color: #f1f1f1;
            padding: 20px;
        }

        article {
            flex: 7;
            background-color: white;
            padding: 20px;
        }

        .fakeimg {
            background: #aaaaaa;
            width: 100%;
            padding: 20px;
        }

        footer {
            padding: 20px;
            text-align: center;
            background: gray;
        }

        /* 반응형 웹 */
        @media all and (max-width: 600px) {
            #container, nav {
                flex-direction: column;
            }
        }

        /* 로그인 모달 */
        #modal {
            display: none;
            position:absolute;
            width:100%;
            height:100%;
            z-index:1;
        }

        #modal h2 {
            margin-top:100px;
            margin-bottom:50px;
            text-align: center;
        }
        #modal button {
            display:inline-block;
            width:100px;
            margin-left:calc(100% - 100px - 10px);
        }

        #modal .modal_content {
            width:400px;
            height: 500px;
            margin: 0px auto;
            padding:20px 10px;
            background:#fff;
            border:2px solid #666;
        }

        .modal_content, .login_text_container, .login_btn_container{
            display: flex;
            flex-direction: column; /*수직 배치*/
            justify-content: center;
            align-content: space-around;
        }

        .login_info {
            margin: 10px;
            padding:10px;
        }

        .login_info pre {
            color: #949BA0;
            margin-left:calc(100% - 100px - 50px);
            padding: 0;
        }

        .login_info a{
            text-decoration: none;
        }

        #login_btn {
            color: white;
            padding: 14px 20px;
            text-decoration: none;
            text-align: center;
            background-color: black;
            border: 1px solid black;
            box-sizing: border-box;
        }

        #login_btn:hover {
            color: black;
            background-color: white;
        }

        #modal .modal_layer {
            position:fixed;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:rgba(256, 256, 256, 0.5);
            z-index:-1;
        }

    </style>

</head>
<body>
<!-- notice 영역 -->
<%--<div id="notice">
    <h4 style="text-align: center;">You've got Message!!</h4>
    <div id="notice_buttons">
        <input type="button" id="check_msg" value="메세지 확인">
        <input type="button" id="close_notice" value="알림창 닫기">
    </div>
</div>--%>

<!-- header 영역 -->
<header>
    <div class="logo_container">
        <a href="./"><img src="./resources/omca_no_backg.png" id="logo" alt="This is the logo of our page"></a>
    </div>
    <div class="header_space"></div>
    <div class="login_container">

        <a href="#" class="member-menu-btn" id="service">고객센터</a><p> | </p>
        <a href="#" class="member-menu-btn" id="member_join">멤버 가입</a><p> | </p>
        <a href="#" class="member-menu-btn" id="modal_opne_btn">로그인</a>
<%--        <button type="button" id="modal_opne_btn">로그인</button>--%>
    </div>
    <%--<h1>My Website</h1>
    <p>With a <strong>flexible</strong> layout.</p>--%>
</header>

<!-- navigation bar -->
<nav>
    <a href="./">홈</a>
    <a href="#" class="nav-menu-btn" id="champion_analysis">챔피언 분석</a>
    <a href="#" class="nav-menu-btn" id="duo_synergy">듀오 시너지</a>
    <a href="#" class="nav-menu-btn" id="play_report">플레이 리포트</a>
    <a href="#" class="nav-menu-btn" id="multi_search">멀티서치</a>
    <a href="#" class="nav-menu-btn" id="point_shop">포인트샵</a>
    <a href="#" class="nav-menu-btn" id="duo_search">듀오찾기</a>
</nav>

<div id="modal">
    <div class="modal_content">
        <button type="button" id="modal_close_btn">닫기</button>
        <h2>OMCA.GG 로그인</h2>
        <div class="login_text_container">
            <input type="text" class="login_info" id="m_id" name="m_id" placeholder="아이디">
            <input type="password" class="login_info" id="m_password" name="m_password" placeholder="비밀번호">
        </div>
        <div class="login_btn_container">
            <div class="login_info">
                <a href="#" id="search_id_pw_btn"><pre>아이디/비밀번호 찾기</pre></a>
            </div>
            <a href="#" class="login_info" id="login_btn">로그인</a>
            <%--<input type="button" class="login_info" id="login_btn" value="로그인">--%>
        </div>
    </div>

    <div class="modal_layer"></div>
</div>

<div id="home_container">
    <video id="videobg" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
        <source src="resources/hero.webm" type="video/webm">
    </video>
    <div class="content_area">
        <div class="search-box">
            <form action="." method="post">
                <input class="search-txt" type="text" placeholder="소환사명을 입력해주세요.">
                <button class="search-btn" type="submit">찾기</button>
            </form>
        </div>
    </div>
</div>

<div id="join_container">
    <form action="join" method="POST">
        <div class="wrap"></div>
        <div class="subject">
            <span>회원가입</span>
        </div>
        <div class="id_wrap">
            <div class="id_name">아이디</div>
            <div class="id_input_box">
                <input type="text" class="id_input" name="m_id">
            </div>
            <span id="id_chk_msg"></span>
            <span class="final_id_ck">아이디를 입력하세요.</span>
        </div>

        <div class="pw_wrap">
            <div class="pw_name">비밀번호</div>
            <div class="pw_input_box">
                <input type="password" class="pw_input" name="m_password">
            </div>
            <span class="final_pw_ck">비밀번호를 입력하세요.</span>
        </div>
        <div class="pwck_wrap">
            <div class="pwck_name">비밀번호 확인</div>
            <div class="pwck_input_box">
                <input type="password" class="pw_input" name="ck_password">
            </div>
            <span id="pw_chk_msg"></span>
            <span class="final_pwck_ck">비밀번호를 확인을 눌러주세요.</span>
        </div>

        <div class="mail_wrap">
            <div class="mail_name">이메일</div>
            <div class="mail_input_box">
                <input type="text" class="mail_input" name="m_email">
            </div>
            <span id="email_chk_msg"></span>
            <span class="final_mail_ck">이메일을 입력하세요.</span>
            <span class="mail_input_box_warn"> </span>
        </div>
        <div class="mail_check_wrap">
            <div class="mail_check_input_box" id="mail_check_input_box_false">
                <input class="mail_check_input" disabled="disabled">
            </div>
            <div class="mail_check_button">
                <span>인증번호 전송</span>
            </div>
            <div class="clearfix"></div>
            <span id="mail_check_input_box_warn"></span>
        </div>

        <div class="name_wrap">
            <div class="name_name">게임 닉네임</div>
            <div class="name_input_box">
                <input type="text" class="name_input" name="m_name">
            </div>
        </div>
        <div class="phone_wrap">
            <div class="phone_name">핸드폰 번호</div>
            <div class="phone_input_box">
                <input type="text" class="phone_input" name="m_phone">
            </div>
        </div>
        <div class="join_wrap">
            <input type="submit" class="join_button" value="가입하기">
        </div>
    </form>
</div>



<!-- 콘텐츠 영역 -->
<div id="container">
    <!-- 왼쪽 사이드 -->
    <aside>
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div class="fakeimg" style="height: 200px;">Image</div>
        <p>Some text about me</p>

        <h3>More Text</h3>
        <p>This is text region</p>
        <div class="fakeimg" style="height: 60px;">Image</div>
        <div class="fakeimg" style="height: 60px;">Image</div>
        <div class="fakeimg" style="height: 60px;">Image</div>

    </aside>
    <!-- 본문 영역 -->
    <article>
        <h2>TITLE HEADING</h2>
        <h5>title description, Dec,7, 2019</h5>
        <div class="fakeimg" style="height: 200px;">Image</div>
        <p>Some text ...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint odio nesciunt qui incidunt assumenda
            similique, quisquam amet dolor esse explicabo quam voluptatibus velit odit error cumque cum rem
            aspernatur!</p>


        <h2>TITLE HEADING</h2>
        <h5>title description, Dec,7, 2019</h5>
        <div class="fakeimg" style="height: 200px;">Image</div>
        <p>Some text ...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint odio nesciunt qui incidunt assumenda
            similique, quisquam amet dolor esse explicabo quam voluptatibus velit odit error cumque cum rem
            aspernatur!</p>

    </article>
</div>

<div id="main_func_container">
<%--    <div class="content_area">--%>
<%--        <div class="search-box">--%>
<%--            <form action="." method="post">--%>
<%--                <input class="search-txt" type="text" placeholder="소환사명을 입력해주세요.">--%>
<%--                <button class="search-btn" type="submit">찾기</button>--%>
<%--            </form>--%>
<%--        </div>--%>
<%--    </div>--%>
</div>

<!-- footer -->
<footer>
    <h2>Footer</h2>
</footer>

<script src="resources/multi_search.js"></script>
<script src="resources/point_shop2.js"></script>
<script src="resources/duo_search.js"></script>
<script src="resources/joinForm.js"></script>
<script type="text/javascript">
    const $main_func_container = $('#main_func_container');
    const $contextPath = '${pageContext.request.contextPath}';

    $(document).ready(function () {
        const $h1 = $('<h1>')


        $('#container').hide();
        $('#join_container').hide();
        $main_func_container.empty()

        //Navigation bar button event
        $('.nav-menu-btn').click(function () {
            $('#home_container').hide();
            $('#join_container').hide(); //회원가입 중이었으면 어떻게 비울 것인지?

            let text = $(this).attr('id');
            $main_func_container.empty();
            switch (text) {
                case 'multi_search':
                    render_multi_search_window();
                    break;

                case 'point_shop':
                    render_point_shop_window();
                    console.log("pointshop");
                    break;

                case 'duo_search':
                    render_duo_search_window();
                    break;

                default :
                    $h1.text(text);
                    const $testBtn = $('<input>').attr({'id':'testBtn','type':'button'}).data('text',text).val('TEST');
                    $main_func_container.append($h1);
                    $main_func_container.append($testBtn);
            }
            $main_func_container.show();
        });

        //Join button event
        $('#member_join').click(function () {
            $('#home_container').hide();
            $('#main_func_container').hide();
            $('#join_container').show();
/*
            const $testBtn = $('<input>').attr({'id':'testBtn','type':'button'}).data('text',text).val('TEST')
            $main_func_container.empty()
            $main_func_container.append($h1)
            $main_func_container.append($testBtn)*/
        });
    });

    //동적 버튼 이벤트
    $(document).on('click', '#testBtn', function (){ // (event name, element Id, function), element ID는 prefix # 주의!
        let txt = $(this).data('text')
        show(txt)
    });

    function show(e) {
        alert('hello~ '+e)
    }

    //모달 버튼 이벤트
    $('#modal_opne_btn').click(()=>{
        $("#modal").show();
    })

    $('#modal_close_btn').click(()=>{
        $("#modal").hide();
    })

    $('.modal_layer').click(()=>{
        $("#modal").hide();
    })
</script>


</body>
</html>

