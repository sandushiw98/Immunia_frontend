package com.project.Immunia.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @Column(name = "userId", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    @Column(name = "username", length = 255)
    private String username;
    @Column(name = "phoneNumber", length = 255)
    private String phoneNumber;
    @Column(name = "userRole", length = 255)
    private String userRole;
    @Column(name = "password", length = 255)
    private String password;

    public UserEntity(Long userId, String phoneNumber, String username, String userRole, String password) {
        this.userId = userId;
        this.phoneNumber = phoneNumber;
        this.username = username;
        this.userRole = userRole;
        this.password = password;
    }

    public UserEntity() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "userEntity{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", userRole='" + userRole + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
