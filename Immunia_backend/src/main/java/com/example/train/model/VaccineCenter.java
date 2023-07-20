package com.example.train.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VaccineCenter extends AppUser {
    private String centerType;
    private String centerName;
    private String centerAddress;
    private String province;
}
