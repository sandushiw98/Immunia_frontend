package com.project.Immunia.Entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "parent")
public class ParentEntity extends UserEntity {
    @Id
    @Column(name = "parentId", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long parentId;
    @Column(name = "firstName", length = 255)
    private String firstName;

    @Column(name = "lastName", length = 255)
    private String lastName;
    @ElementCollection
    @Column(name = "address", length = 255)
    private List<String> address;
    @Column(name = "nicNumber", length = 255)
    private String nicNumber;

    @Column(name = "emergencyNumber", length = 255)
    private String emergencyNumber;

//    @OneToMany(mappedBy = "parentEntity")
//    private List<ChildEntity> children;
    @Column(name = "imageUrl", length = 255)
    private String imageUrl;

    public ParentEntity() {
    }

    public ParentEntity(Long parentId, String firstName, String lastName, List<String> address, String nicNumber, String emergencyNumber, String imageUrl) {
        this.parentId = parentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.nicNumber = nicNumber;
        this.emergencyNumber = emergencyNumber;
        this.imageUrl = imageUrl;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
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

    public List<String> getAddress() {
        return address;
    }

    public void setAddress(List<String> address) {
        this.address = address;
    }

    public String getNicNumber() {
        return nicNumber;
    }

    public void setNicNumber(String nicNumber) {
        this.nicNumber = nicNumber;
    }

    public String getEmergencyNumber() {
        return emergencyNumber;
    }

    public void setEmergencyNumber(String emergencyNumber) {
        this.emergencyNumber = emergencyNumber;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

//    public List<ChildEntity> getChildren() {
//        return children;
//    }
//
//    public void setChildren(List<ChildEntity> children) {
//        this.children = children;
//    }



    @Override
    public String toString() {
        return "ParentEntity{" +
                "parentId=" + parentId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address=" + address +
                ", nicNumber='" + nicNumber + '\'' +
                ", emergencyNumber='" + emergencyNumber + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
