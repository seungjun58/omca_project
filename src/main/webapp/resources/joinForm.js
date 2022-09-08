//회원가입 관련 JS
let idCheck = 1;
let m_id = "";

function show_chk_msg (target, text) {
    $(target).empty();
    $(target).text(text);
}

function chk_data (request_url, request_data) {
    $.ajax({
        type : "post",
        url : request_url,
        data : request_data, //JSON으로 해서 보냄
        success : function(result) {
            return result;
        }// success 종료
    }); // ajax 종료
}

$(".id_input").on("property-change change keyup paste input", function() {
    m_id = $('.id_input').val(); // .id_input에 입력되는 값
    let data = {'m_id' : m_id};
    let result = chk_data("memberIdChk", data);
    if (result != 'fail') {
        show_chk_msg('#id_chk_msg','사용 가능한 아이디 입니다.');
        idCheck = 1;
    } else {
        show_chk_msg('#id_chk_msg','아이디가 이미 존재합니다.');
        idCheck = 0;
    }
});

/* 비밀번호 확인 일치 유효성 검사 */
$('.pwck_input').on("property-change change keyup paste input", function() {

    $('#id_chk_msg').empty();

    let pws = $('.pw_input').val(); // return list
    $('.final_pwck_ck').hide();

    if (pws[0] == pws[1]) {
        show_chk_msg('#pw_chk_msg', '비밀번호가 일치합니다.')
        pwckcorCheck = 1;
    } else {
        show_chk_msg('#pw_chk_msg', '비밀번호가 일치 하지 않습니다.')
        pwckcorCheck = 0;
    }
});

$(".mail_input").on("property-change change keyup paste input", function() {
    let m_mail = $('.mail_input').val(); // .mail_input에 입력되는 값
    let data = { 'm_mail' : m_mail } // '컨트롤에 넘길 데이터 이름' : '데이터(.mail_input에 입력되는 값)' JSON으로 해서 보냄
    let result = chk_data("memberMailChk", data);
    if (result != 'fail') {
        show_chk_msg('#email_chk_msg', '사용 가능한 이메일 입니다.');
        mailckCheck = 1;
    } else {
        show_chk_msg('#email_chk_msg', '이메일이 이미 존재합니다.');
        mailckCheck = 0;
    }
});

/* 인증번호 이메일 전송 */
$(".mail_check_button").click(function() {

    let email = $(".mail_input").val(); // 입력한 이메일
    let cehckBox = $(".mail_check_input"); // 인증번호 입력란
    let boxWrap = $(".mail_check_input_box"); // 인증번호 입력란 박스
    let warnMsg = $(".mail_input_box_warn");    // 이메일 입력 경고글
    let code;

    /* 이메일 형식 유효성 검사 */
    if (mailFormCheck(email)) {
        warnMsg.empty();
        warnMsg.text("이메일이 전송 되었습니다. 이메일을 확인해주세요.");
    } else {
        warnMsg.empty();
        warnMsg.text("올바르지 못한 이메일 형식입니다.");
        return false;
    }

    $.ajax({
        type : "GET",
        url : "mailCheck?email=" + email,
        success : function(data) {

            //console.log("data : " + data);
            cehckBox.attr("disabled", false);
            boxWrap.attr("id", "mail_check_input_box_true");
            code = data;
        }
    });
});
/* 인증번호 비교 */
$(".mail_check_input").blur(function() {
    var inputCode = $(".mail_check_input").val(); // 입력코드
    var checkResult = $("#mail_check_input_box_warn"); // 비교 결과
    if (inputCode == code) { // 일치할 경우
        checkResult.text("인증번호가 일치합니다.");
        checkResult.attr("class", "correct");
        mailnumCheck = 1;
    } else { // 일치하지 않을 경우
        checkResult.text("인증번호를 다시 확인해주세요.");
        checkResult.attr("class", "incorrect");
        mailnumCheck = 0;
    }
});

$(".join_button").click(
    function() {

        /* 입력값 변수 */
        var id = $('.id_input').val(); // id 입력란
        var pw = $('.pw_input').val(); // 비밀번호 입력란
        var mail = $('.mail_input').val(); // 이메일 입력란

        /* 아이디 유효성검사 */
        if (id == "") {
            $('.final_id_ck').show();
            idCheck = 0;
        } else {
            $('.final_id_ck').hide();
            idCheck = 1;
        }

        /* 비밀번호 유효성 검사 */
        if (pw == "") {
            $('.final_pw_ck').css('display', 'block');
            pwCheck = 0;
        } else {
            $('.final_pw_ck').css('display', 'none');
            pwCheck = 1;
        }

        /* 이메일 유효성 검사 */
        if (mail == "") {
            $('.final_mail_ck').css('display', 'block');
            mailCheck = 0;
        } else {
            $('.final_mail_ck').css('display', 'none');
            mailCheck = 1;
        }

        /* 최종 유효성 검사 */
        if (idCheck * idckCheck * pwCheck * pwckCheck
            * pwckcorCheck * mailCheck * mailnumCheck) {
            $("#join_form").attr("action", "join");
            $("#join_form").submit();
        }
        return false;
    });

/* 입력 이메일 형식 유효성 검사 */
function mailFormCheck(email) {
    var form = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return form.test(email);
}