<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="admin_content_main">
		<form action="/product/ProductEnroll" method="post" id="enrollForm">
			<div class="form_section">
				<div class="form_section_title">
					<label>상품 아이디</label>
				</div>
				<div class="form_section_content">
					<input name="ProductId">
				</div>
			</div>
			<div class="form_section">
				<div class="form_section_title">
					<label>상품 이름</label>
				</div>
				<div class="form_section_content">
					<input name="ProductName" value="0">
				</div>
			</div>
			<div class="form_section">
				<div class="form_section_title">
					<label>상품 이미지</label>
				</div>
				<div class="form_section_content">
					<input name=ProductImg">
				</div>
			</div>
			<div class="form_section">
				<div class="form_section_title">
					<label>상품 가격</label>
				</div>
				<div class="form_section_content">
					<input name="ProductPrice">
				</div>
			</div>
			<div class="form_section">
				<div class="form_section_title">
					<label>상품 개수</label>
				</div>
				<div class="form_section_content">
					<input name="ProductCount">
				</div>
			</div>
		</form>
		<div class="btn_section">
			<button id="cancelBtn" class="btn">취 소</button>
			<button id="enrollBtn" class="btn enroll_btn">등 록</button>
		</div>
	</div>
</body>
<script>
	let enrollForm = $("#enrollForm")

	/* 취소 버튼 */
	$("#cancelBtn").click(function() {

		location.href = "/admin/goodsManage"

	});

	/* 상품 등록 버튼 */
	$("#enrollBtn").on("click", function(e) {

		e.preventDefault();
		enrollForm.submit();
	});
</script>
</html>