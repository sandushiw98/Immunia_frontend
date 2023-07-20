package com.example.train.service;

import com.example.train.model.Parent;
import com.example.train.model.VaccineInventory;

import java.util.List;

public interface VaccineInventoryService {
    VaccineInventory saveVaccineInventory(VaccineInventory vaccineInventory);
    List<VaccineInventory> getVaccineInventories();
    VaccineInventory getVaccineInventory(Long id);
    void deleteVaccineInventory(Long id);
}
