package com.project.omca.controller;

import com.project.omca.bean.Champ;
import com.project.omca.service.ChampMM;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class RestController {

    private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

    @Autowired
    private ChampMM cm;

    @PostMapping(value = "/analysisChamp", produces = "application/json;charset=utf-8")
    public ResponseEntity<?> get_champ_list(@RequestParam("Selector") String lane) {
        logger.info("analysisChamp 진입");

        List<Champ> result = null;

        result = cm.show_champ_list(lane);


        logger.info("analysisChamp 성공");

        return ResponseEntity.ok(result);
    }
}
