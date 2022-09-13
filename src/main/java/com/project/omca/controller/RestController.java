package com.project.omca.controller;

import com.project.omca.bean.Champ;
import com.project.omca.bean.Duo;
import com.project.omca.service.ChampMM;
import com.project.omca.service.DuoMM;
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

    private DuoMM dm;

    @PostMapping(value = "/analysisChamp", produces = "application/json;charset=utf-8")
    public ResponseEntity<?> get_champ_list(@RequestParam("Selector") String lane) {
        logger.info("analysisChamp 진입");

        List<Champ> result = null;

        result = cm.show_champ_list(lane);


        logger.info("analysisChamp 성공");

        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/duo_search_select")
    public ResponseEntity<?> get_duo_search_list() {
        logger.info("get_duo_search_list 진입");

        List<Duo> result2 = null;

        result2 = dm.get_duo_list();

        logger.info("get_duo_search_list 성공");

        return ResponseEntity.ok(result2);
    }

    @PostMapping(value = "/duo_search_insert")
    public ResponseEntity<?> insert_duo(Duo duo) {
        logger.info("insert_duo 진입");
        List<Duo> result2 = null;

        dm.insert_duo(duo);
        if (true) {
            result2 = dm.get_duo_list();
        }
        logger.info("insert_duo 성공");

        return ResponseEntity.ok(result2);
    }
}
