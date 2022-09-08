<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<head>
  <meta charset="UTF-8">
  <title>Insert title here</title>
  <link rel="stylesheet" href="resources/search_bar.css">
</head>
<body>
<div class="content_area">
  <div class="search-box">
    <form name="rFrm" id="rFrm">
      <input class="search-txt" type="text" id="test_temp" name="sn"
             placeholder="소환사명을 입력해주세요.">
      <button class="search-btn" id="test_btn" type="button">찾기</button>
    </form>
  </div>
</div>
<div>
  <pre id="result"></pre>
</div>
<input type="button" id="test_btn2" value="TEST">
</body>
<script>
  /* function check_exist() {
      var sn = $('#test_temp').val();

      var objtosend = new Object();
      objtosend.sn = sn;

      var jsonToSend = JSON.stringify(objtosd);

      $.ajax({
          type : "POST",
          url : '/existRecord',
          data : jsonToSend,
          datatype : 'json',
          contentType : 'application/json',
          success : function(data) {
              if (data == true) {
                  alert('데이터있다');
              } else {
                  alert('데이터없다');
              }
          },
          error : function() {
              alert("error");
          }
      });
  } */

  //형의힌트
  // onclick : HTML

  /* $("#test_btn").click(function() { */
  $("#test_btn2").click(function() {
    alert("fasdf");
    aa = {
      'value' : $('#test_temp').val()
    }; //obj type

    $.ajax({
      type : 'POST',
      url : '/existRecord',
      data : aa,
      dataType : 'json',
      success : function(data) {
        console.log("1:", data);
        if (data == true) {
          alert('데이터있다');
          requestInfoFromPython(aa);
        } else {
          alert('데이터없다');
          requestInfoFromOracle(aa);
        }
      },
      error : function(e) {
        alert("error");
      }
    });

    /* if (true) {// 존재 여부 검사 Logic // 반환값 boolean or int

        //아이디가 DB에 존재하면
        //DB에서 정보 가져오기
        requestInfoFromOracle(aa)
    } else {
        //아이디가 DB에 존재하지 "않으면"
        //WEB에서 정보 가져오기 by using Python
        requestInfoFromPython(aa);
    } */
  })

  function requestInfoFromPython(request) {
    $.ajax({
      type : 'post',
      url : 'http://127.0.0.1:5000/test',
      data : request,
      dataType : 'json',
      success : function(res) {
        let tmp = res;
        let str = JSON.stringify(tmp);
        alert('received from python : ' + str);
        $('#result').append(str)
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("XMLHttpRequest : " + XMLHttpRequest + ' textStatus : '
                + textStatus + ' errorThrown : ' + errorThrown);
      }
    })
  }

  function requestInfoFromOracle(request) {
    $.ajax({
      type : 'post',
      url : '/getRecordList',
      data : request,
      contentType : 'application/json; charset=UTF-8', //서버에서 @RequestBody로 받을것.
      success : function(res) {
        let tmp = res;
        let str = JSON.stringify(tmp);
        alert('received from Oracle : ' + str);
        $('#result').append(str)
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("XMLHttpRequest : " + XMLHttpRequest + ' textStatus : '
                + textStatus + ' errorThrown : ' + errorThrown);
      }
    })
  }
</script>
</html>