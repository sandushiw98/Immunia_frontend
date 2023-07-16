package com.project.Immunia.Service.Impl;

import com.project.Immunia.Entity.ParentEntity;
import com.project.Immunia.Repository.ParentRepository;
import com.project.Immunia.Service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParentImpl implements ParentService {
    @Autowired
    private final ParentRepository parentRepository;

    public ParentImpl(ParentRepository parentRepository) {
        this.parentRepository = parentRepository;
    }

    @Override
    public String addParent(ParentEntity parentEntity) {

        parentEntity.setFirstName(parentEntity.getFirstName());
        parentEntity.setLastName(parentEntity.getLastName());
        parentEntity.setAddress(parentEntity.getAddress());
        parentEntity.setNicNumber(parentEntity.getNicNumber());
        parentEntity.setEmergencyNumber(parentEntity.getEmergencyNumber());
        parentEntity.setImageUrl(parentEntity.getImageUrl());

        parentEntity.setPhoneNumber(parentEntity.getPhoneNumber());
        parentEntity.setPassword(parentEntity.getPassword());
        parentEntity.setEmail(parentEntity.getEmail());




        parentRepository.save(parentEntity);

        return parentEntity.getFirstName();
    }
}
