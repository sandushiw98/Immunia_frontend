package com.example.train.repository;

import com.example.train.model.Child;
import com.example.train.model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChildRepository extends JpaRepository<Child, Long> {
}
