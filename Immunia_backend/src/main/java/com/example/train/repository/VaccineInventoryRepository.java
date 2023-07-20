package com.example.train.repository;

import com.example.train.model.VaccineInventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VaccineInventoryRepository extends JpaRepository<VaccineInventory, Long> {
}
