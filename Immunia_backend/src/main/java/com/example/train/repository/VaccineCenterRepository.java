package com.example.train.repository;

import com.example.train.model.VaccineCenter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VaccineCenterRepository extends JpaRepository<VaccineCenter, Long> {
}
