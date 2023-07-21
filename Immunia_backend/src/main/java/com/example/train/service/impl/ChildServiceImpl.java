package com.example.train.service.impl;

import com.example.train.model.Child;
import com.example.train.repository.ChildRepository;
import com.example.train.service.ChildService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ChildServiceImpl implements ChildService {
    private final ChildRepository childRepository;
    public Child saveChild(Child child){
        log.info("Saving child {} to the database",child.getFirstName());
        return childRepository.save(child);
    }
    public List<Child> getChildren(){
        log.info("Get all children from database");
        return childRepository.findAll();
    }
    public Child getChild(Long id){
        log.info("Get {} child from database",id);
        return childRepository.findById(id).get();
    }
    public void deleteChild(Long id){
        log.info("Delete child {} from database",id);
        childRepository.deleteById(id);
    }
}
