<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/loginForm.css">
</head>
<body>
	<div class="wrapper">
		<div class="wrap">
			<div class="top_gnb_area">
				<jsp:include page="/WEB-INF/views/frame/top.jsp"></jsp:include>
			</div>
			<div class="top_area">
				<jsp:include page="/WEB-INF/views/frame/nav.jsp"></jsp:include>
			</div>
			<div class="left_area">
				<jsp:include page="/WEB-INF/views/frame/left.jsp"></jsp:include>
			</div>
			<div class="content_area">
				<form action="loginForm" method="GET">
					<table>
						<tr>
							<td>로그인</td>
						</tr>
						<tr>
							<td>아이디:<input type="text" name="id"></td>
						</tr>
						<tr>
							<td>비밀번호:<input type="password" name="password"></td>
						</tr>
						<tr>
							<td colspan=2><input type="submit" name="submit" value="로그인"></td>
							<td><button>회원가입</button></td>
					</table>
				</form>
			</div>
		</div>
		<div class="footer_are">
			<jsp:include page="/WEB-INF/views/frame/footer.jsp"></jsp:include>
		</div>
	</div>
</body>
</html>