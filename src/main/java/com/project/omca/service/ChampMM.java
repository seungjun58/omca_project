package com.project.omca.service;


import com.project.omca.bean.Champ;
import com.project.omca.dao.IChampDao;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j
public class ChampMM {

	@Autowired
	private IChampDao cDao;

	public List<Champ> show_champ_list(String lane) {
		List<Champ> cList = null;
		System.out.println("champMM");
		cList = cDao.get_champ_list(lane);

		return cList;
	}
}
