package com.project.Immunia.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "admin")
public class AdminEntity {
    @Id
    @Column(name = "adminId", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long adminId;
    @Column(name = "firstName", length = 255)
    private String firstName;

    @Column(name = "lastName", length = 255)
    private String lastName;

    @Column(name = "imageUrl", length = 255)
    private String imageUrl;

    public AdminEntity() {

    }

    public AdminEntity(Long adminId, String firstName, String lastName, String imageUrl) {
        this.adminId = adminId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
    }

    public Long getAdminId() {
        return adminId;
    }

    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
