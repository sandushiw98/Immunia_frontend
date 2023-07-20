package com.example.train.service;

import com.example.train.model.Admin;
import com.example.train.model.AppUser;

import java.util.List;

public interface AdminService {
    Admin saveAdminUser(Admin admin);
    List<Admin> getAdminUsers();
    Admin getAdminUser(Long id);
    void deleteAdminUser(Long id);
}
