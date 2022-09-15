package com.project.omca.dao;

import com.project.omca.bean.Duo;

import java.util.List;

public interface DuoDao {
    public List<Duo> get_duo_list();

    public void insert_duo(Duo duo);
}
