package com.project.omca.bean;

import lombok.Data;
import lombok.experimental.Accessors;
import org.apache.ibatis.type.Alias;

@Data
@Accessors(chain = true)
@Alias("Champ")
public class Champ {
	private String id;
	private String name_en;
	private String name_kr;
	private double win;
	private double pick;
	private double gold;
	private double kda;
//	private int ch_play;
}
