package com.project.omca.bean;

import lombok.Data;
import lombok.experimental.Accessors;
import org.apache.ibatis.type.Alias;

@Data
@Accessors(chain = true)
@Alias("Duo")
public class Duo {
    private String summoner_id;
    private String queue_id;
    private String my_tier;
    private String duo_condition;
    private String duo_contents;
}
