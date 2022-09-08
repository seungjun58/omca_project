package com.project.omca.dao;

import com.project.omca.bean.Champ;
import lombok.NonNull;

import java.util.List;

public interface IChampDao {

	public List<Champ> get_champ_list(@NonNull String lane); //상품 등록
	
	
}
