package com.project.omca.service;

import com.project.omca.bean.Product;
import com.project.omca.dao.ProductDao;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log4j
public class AdminAM {

	@Autowired
	ProductDao pDao;
	
	//상품 등록
	public void productEnroll(Product pr) {
		
		log.info("service.enroll 진입");
		
		pDao.productEnroll(pr);
	}
}
