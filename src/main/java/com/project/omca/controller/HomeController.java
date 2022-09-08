package com.project.omca.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	
	public String newMain() {
		logger.info("메인 페이지");
		return "newMain";
	}

	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String main() {
		logger.info("메인 페이지");
		return "main";
	}
}
