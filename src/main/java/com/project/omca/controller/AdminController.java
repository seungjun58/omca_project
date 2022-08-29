package com.project.omca.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.project.omca.bean.Product;
import com.project.omca.service.AdminAM;

@Controller
@RequestMapping(value = "/product")
public class AdminController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Autowired
	private AdminAM am;	
	
	@RequestMapping(value = "/ProductEnroll", method = RequestMethod.GET)
	public void ProductEnrollPost(Product pr, RedirectAttributes rttr) {
		
		logger.info("ProductEnrollPost 진입");
		
		am.productEnroll(pr);
		
		rttr.addFlashAttribute("enroll_result",pr.getP_name());
		
	}
}
