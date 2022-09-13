package com.project.omca.service;

import com.project.omca.bean.Duo;
import com.project.omca.dao.DuoDao;
import lombok.extern.log4j.Log4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j
public class DuoMM {

    private DuoDao dDao;

    public List<Duo> get_duo_list(){
        List<Duo> dList;
        dList = dDao.get_duo_list();
        System.out.println("DuoMM");
        return dList;
    };

    public boolean insert_duo(Duo duo) {
        return dDao.insert_duo(duo);
    };
}
