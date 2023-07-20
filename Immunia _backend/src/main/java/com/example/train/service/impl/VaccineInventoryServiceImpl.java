package com.example.train.service.impl;

import com.example.train.model.Parent;
import com.example.train.model.VaccineInventory;
import com.example.train.repository.VaccineInventoryRepository;
import com.example.train.service.VaccineInventoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class VaccineInventoryServiceImpl implements VaccineInventoryService {
    private final VaccineInventoryRepository vaccineInventoryRepository;

    public VaccineInventory saveVaccineInventory(VaccineInventory vaccineInventory){
        log.info("Saving vaccine inventory {} to the database",vaccineInventory.getVaccinationType());
        return vaccineInventoryRepository.save(vaccineInventory);
    }
    public List<VaccineInventory> getVaccineInventories(){
        log.info("Get all inventories from database");
        return vaccineInventoryRepository.findAll();
    }
    public VaccineInventory getVaccineInventory(Long id){
        log.info("Get {} inventory from database",id);
        return vaccineInventoryRepository.findById(id).get();
    }
    public void deleteVaccineInventory(Long id){
        log.info("Delete inventory {} from database",id);
        vaccineInventoryRepository.deleteById(id);
    }
}
