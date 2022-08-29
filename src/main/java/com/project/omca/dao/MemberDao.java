package com.project.omca.dao;

import com.project.omca.bean.Member;

public interface MemberDao {
	// 회원가입
	public void memberJoin(Member mb);

	// 아이디 중복 검사
	public int idCheck(String m_id);
}
