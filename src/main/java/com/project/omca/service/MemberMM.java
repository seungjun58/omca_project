package com.project.omca.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.project.omca.bean.Member;
import com.project.omca.dao.MemberDao;

@Service
public class MemberMM {

	@Autowired
	private MemberDao mDao;


	public void memberJoin(Member mb) {

		mDao.memberJoin(mb);

	}

	public int idCheck(String m_id) {

		 return mDao.idCheck(m_id);
	}

	
}
