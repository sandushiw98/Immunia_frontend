package com.example.train.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Parent extends AppUser{
    private String firstName;
    private String lastName;
    private String address;
    private String NICNumber;
    private String emergencyContactNumber;
}
