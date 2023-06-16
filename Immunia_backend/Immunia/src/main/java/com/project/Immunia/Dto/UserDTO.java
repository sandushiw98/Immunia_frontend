package com.project.Immunia.Dto;

public class UserDTO {
    private Long userId;
    private String username;
    private String phoneNumber;
    private String userRole;
    private String password;

    public UserDTO(Long userId, String username, String phoneNumber, String userRole, String password) {
        this.userId = userId;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.userRole = userRole;
        this.password = password;
    }

    public UserDTO() {
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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

    @Override
    public String toString() {
        return "userDTO{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", userRole='" + userRole + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
