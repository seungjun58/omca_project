package com.project.omca.controller;

import java.util.Random;


import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.project.omca.bean.Member;
import com.project.omca.service.*;



/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping(value="/member")
public class MemberController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	@Autowired
	private MemberMM mm;
	
	@Autowired
	private JavaMailSender mailSender;
	

	@RequestMapping(value = "/loginForm", method = RequestMethod.GET)
	public void loginGET() {
		logger.info("로그인 창");
		
	}

	@RequestMapping(value = "/joinForm", method = RequestMethod.GET)
	public void joinGET() {
		logger.info("회원가입 창");
	}

	// 회원가입
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	public String memberJoin(Member mb) {
		logger.info("join 진입");

		// 회원가입 서비스 실행
		mm.memberJoin(mb);

		logger.info("join Service 성공");

		return "main";
	}

	//

	// 아이디 중복 검사

	@RequestMapping(value = "/memberIdChk", method = RequestMethod.POST)
	
	@ResponseBody
	public String memberIdChkPOST(String m_id) throws Exception {

		logger.info("memberIdChk() 진입");

		int result = mm.idCheck(m_id);

		logger.info("결과값 = " + result);

		if (result != 0) {

			return "fail"; // 중복 아이디가 존재

		} else {

			return "success"; // 중복 아이디 x
		}
	} // memberIdChkPOST() 종료

	
	/* 이메일 인증 */
	@RequestMapping(value = "/mailCheck", method = RequestMethod.GET)
	@ResponseBody
	public String mailCheckGET(String email) throws Exception {

		/* 뷰(View)로부터 넘어온 데이터 확인 */
		logger.info("이메일 데이터 전송 확인");
		logger.info("인증번호 : " + email);

		/* 인증번호(난수) 생성 */
		Random random = new Random();
		int checkNum = random.nextInt(888888) + 111111;
		logger.info("인증번호 " + checkNum);

		/* 이메일 보내기 */
		String setFrom = "dlstjr5945@naver.com";
		String toMail = email;
		String title = "회원가입 인증 이메일 입니다.";
		String content = "홈페이지를 방문해주셔서 감사합니다." + "<br><br>" + "인증 번호는 " + checkNum + "입니다." + "<br>"
				+ "해당 인증번호를 인증번호 확인란에 기입하여 주세요.";
		try {

			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");
			helper.setFrom(setFrom);
			helper.setTo(toMail);
			helper.setSubject(title);
			helper.setText(content, true);
			mailSender.send(message);
		} catch (Exception e) {
			e.printStackTrace();
		}
		String num = Integer.toString(checkNum);
		return num;
	}
	@RequestMapping(value = "/sendMail", method = RequestMethod.GET)
	public void sendMail() throws Exception {

		String subject = "test 메일";
		String content = "메일 테스트 내용";
		String from = "dlstjr5945@naver.com";
		String to = "받는이 아이디@도메인주소";

		try {
			MimeMessage mail = mailSender.createMimeMessage();
			MimeMessageHelper mailHelper = new MimeMessageHelper(mail, false, "UTF-8");
			// true는 멀티파트 메세지를 사용하겠다는 의미

			/*
			 * 단순한 텍스트 메세지만 사용시엔 아래의 코드도 사용 가능 MimeMessageHelper mailHelper = new
			 * MimeMessageHelper(mail,"UTF-8");
			 */

			mailHelper.setFrom(from);
			// 빈에 아이디 설정한 것은 단순히 smtp 인증을 받기 위해 사용 따라서 보내는이(setFrom())반드시 필요
			// 보내는이와 메일주소를 수신하는이가 볼때 모두 표기 되게 원하신다면 아래의 코드를 사용하시면 됩니다.
			// mailHelper.setFrom("보내는이 이름 <보내는이 아이디@도메인주소>");
			mailHelper.setTo(to);
			mailHelper.setSubject(subject);
			mailHelper.setText(content);
			// true는 html을 사용하겠다는 의미입니다.

			/*
			 * 단순한 텍스트만 사용하신다면 다음의 코드를 사용하셔도 됩니다. mailHelper.setText(content);
			 */
			mailSender.send(mail);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
