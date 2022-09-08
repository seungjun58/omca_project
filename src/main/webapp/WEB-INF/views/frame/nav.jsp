<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="./resources/main.css">
</head>
<body>
	<div class="logo_area">
		<img src="./resources/omca.jpg" width=100% height=100%>
	</div>
	<div class="search_area">
		<div id="home" class="menu_bar">홈</div>
		<div id="champion_analysis" class="menu_bar"><a href="#" id="analysis">챔피언 분석</a></div>
		<div id="champion_synerge" class="menu_bar">듀오 시너지</div>
		<div id="play_report" class="menu_bar" >플레이 리포트 </div>
		<div id="multi_search" class="menu_bar">멀티서치 </div>
		<div id="point_shop" class="menu_bar">포인트샵 </div>
		<div id="duo_find" class="menu_bar">듀오찾기 </div>
	</div>
	<div class="login_area">
		<div class="login_button">
			<a href="member/loginForm">로그인</a>
		</div>
		<div class="join_button">
			<a href="member/joinForm">회원가입</a>
		</div>
	</div>
	<div class="clearfix"></div>
</body>

<script>
 $("#home").click(function(){
	 location.href="member/loginForm"
 });

</script>



</html>