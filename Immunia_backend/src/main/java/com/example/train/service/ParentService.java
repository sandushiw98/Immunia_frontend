package com.example.train.service;

import com.example.train.model.Parent;

import java.util.List;

public interface ParentService {
    Parent saveParentUser(Parent parent);
    List<Parent> getParentUsers();
    Parent getParentUser(Long id);
    void deleteParentUser(Long id);
}
