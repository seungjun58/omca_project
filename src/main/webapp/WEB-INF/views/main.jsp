<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>omca.main</title>
<link rel="stylesheet" href="./resources/main.css">
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>

</head>
<body>

<div class="wrapper">
	<div class="wrap">
		<div class="top_gnb_area">
			<jsp:include page="frame/top.jsp"></jsp:include>
		</div>
		<div class="top_area">
			<jsp:include page="frame/nav.jsp"></jsp:include>
		</div>
		<div class="left_area">
			<jsp:include page="frame/left.jsp"></jsp:include>
		</div>
		<div class="content_area">
			<jsp:include page="frame/bottom.jsp"></jsp:include>
		</div>
		<div class="footer_are">
			<jsp:include page="frame/footer.jsp"></jsp:include>
		</div>
	</div>
</div>

<script type="text/javascript">
	$(document).ready(function (){
		$('#analysis').click(function () {
			change_page_to('search-box');
			stats_menu_fw('TOP')
		});

		function change_page_to(id) {
			alert(id);
			// var temp = '.'+id;
			$('.search-box').css('display', 'none');
		}

		function stats_menu_fw(lane) {
			$.ajax({
				url: './analysisChamp',
				type: 'post',
				data: {'Selector':lane},
				dataType: 'json',
			}).done(function(res) {

				alert('success!');
				/*$('.content_area').empty()*/;
				render('TOP', res);
			}).fail(function(err) {
				console.log(err);
			});
		};

		function render(lane, cList) {
			let $tr;
			let $td_temp;
			let img_src;
			let $content = $('.content_area');
			$content.append('<tr><th>순위</th><th>챔피언</th><th>승률</th><th>픽률</th><th>골드</th><th>KDA</th></tr>');

			for (var i = 0; i < cList.length-130; i++) {
				let code;
				let values;
				let $a = $('<a>');
				$tr = $('<tr>');
				//$td = $('<td>');//챔피언 상세페이지 연결
				for (var key in cList[i]) {
					values = cList[i];
					switch (key) {
						case 'id':
							code = values[key];
							$('<td>').html(i + 1).appendTo($tr);
							break;
						case 'name_en':
							img_src = 'https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/' + values[key] + '.png';
							$('<img>').attr({'src': img_src, 'style': 'width: 25px'}).appendTo($a);
							break;
						case 'name_kr':
							$('<span>').html(values[key]).appendTo($a);
							$a.attr({
								'href': '#',
								'class': 'champion'
							}).data('champ_id', code).data('lane', lane).appendTo($('<td>')).appendTo($tr);
							break;
						case 'win':
							$('<td>').html(values[key]).appendTo($tr);
							break;
						case 'pick':
							$('<td>').html(values[key]).appendTo($tr);
							break;
						case 'gold':
							$('<td>').html(values[key]).appendTo($tr);
							break;
						case 'kda':
							$('<td>').html(values[key]).appendTo($tr);
							break;
					}
				}
				$content.append($tr);
			}
		}
	});
</script>


</body>
</html>