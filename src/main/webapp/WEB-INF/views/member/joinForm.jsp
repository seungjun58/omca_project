<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<link rel="stylesheet" href="resources/joinForm.css">
</head>
<body>
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
			<span class="id_input_re_1">사용 가능한 아이디 입니다.</span> <span
				class="id_input_re_2">아이디가 이미 존재합니다.</span>
		</div>
		<div class="mail_wrap">
			<div class="mail_name">이메일</div>
			<div class="mail_input_box">
				<input type="text" class="mail_input" name="m_email">
			</div>
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
		<div class="pw_wrap">
			<div class="pw_name">비밀번호</div>
			<div class="pw_input_box">
				<input type="password" class="pw_input" name="m_password">
			</div>
		</div>
		<div class="pwck_wrap">
			<div class="pwck_name">비밀번호 확인</div>
			<div class="pwck_input_box">
				<input type="password" class="pwck_input" name="ck_password">
			</div>
		</div>
		<div class="phone_wrap">
			<div class="phone_name">핸드폰 번호</div>
			<div class="phone_input_box">
				<input type="text" class="phone_input" name="m_phone">
			</div>
		</div>
		<div class="join_wrap">
			<input type="submit" class="join_submit" value="가입하기">
		</div>
	</form>
</body>

<script>
	$(".id_input").on("propertychange change keyup paste input", function() {
		var m_id = $('.id_input').val(); // .id_input에 입력되는 값
		var data = {
			m_id : m_id
		} // '컨트롤에 넘길 데이터 이름' : '데이터(.id_input에 입력되는 값)' JSON으로 해서 보냄

		$.ajax({
			type : "post",
			url : "memberIdChk",
			data : data,
			success : function(result) {
				// console.log("성공 여부" + result);
				if (result != 'fail') {
					$('.id_input_re_1').css("display", "inline-block");
					$('.id_input_re_2').css("display", "none");
				} else {
					$('.id_input_re_2').css("display", "inline-block");
					$('.id_input_re_1').css("display", "none");
				}
			}// success 종료
		}); // ajax 종료
	});

	/* 인증번호 이메일 전송 */
	$(".mail_check_button").click(function() {

		var email = $(".mail_input").val(); // 입력한 이메일
		var cehckBox = $(".mail_check_input"); // 인증번호 입력란
		var boxWrap = $(".mail_check_input_box"); // 인증번호 입력란 박스
		var code;
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
			checkResult.html("인증번호가 일치합니다.");
			checkResult.attr("class", "correct");
		} else { // 일치하지 않을 경우
			checkResult.html("인증번호를 다시 확인해주세요.");
			checkResult.attr("class", "incorrect");
		}
	});
</script>
</html>