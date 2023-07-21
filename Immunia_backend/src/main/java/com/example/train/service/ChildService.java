package com.example.train.service;

import com.example.train.model.Child;
import com.example.train.model.Parent;

import java.util.List;

public interface ChildService {
    Child saveChild(Child child);
    List<Child> getChildren();
    Child getChild(Long id);
    void deleteChild(Long id);
}
