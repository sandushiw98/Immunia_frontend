package com.project.Immunia.Entity;

import jakarta.persistence.*;


import java.util.Date;
import java.util.List;

@Entity
@Table(name = "child")
public class ChildEntity {
    @Id
    @Column(name = "childId", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long childId;
    @Column(name = "firstName", length = 255)
    private String firstName;

    @Column(name = "lastName", length = 255)
    private String lastName;

    @Column(name = "imageUrl", length = 255)
    private String imageUrl;

    @Temporal(TemporalType.DATE)
    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "vaccination_card_number", length = 255)
    private String vaccination_card_number;
    @Column(name = "gender", length = 255)
    private String gender;

    @ElementCollection
    @Column(name = "comment", length = 255)
    private List<String> comment;

    @Column(name = "birth_certificate", length = 255)
    private String birth_certificate;

    public ChildEntity(Long childId, String firstName, String lastName, String imageUrl, Date dateOfBirth, String vaccination_card_number, String gender, ParentEntity parentEntity, List<String> comment, String birth_certificate) {
        this.childId = childId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
        this.dateOfBirth = dateOfBirth;
        this.vaccination_card_number = vaccination_card_number;
        this.gender = gender;
        this.comment = comment;
        this.birth_certificate = birth_certificate;
    }

    public ChildEntity() {
    }

    public Long getChildId() {
        return childId;
    }

    public void setChildId(Long childId) {
        this.childId = childId;
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

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getVaccination_card_number() {
        return vaccination_card_number;
    }

    public void setVaccination_card_number(String vaccination_card_number) {
        this.vaccination_card_number = vaccination_card_number;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public List<String> getComment() {
        return comment;
    }

    public void setComment(List<String> comment) {
        this.comment = comment;
    }

    public String getBirth_certificate() {
        return birth_certificate;
    }

    public void setBirth_certificate(String birth_certificate) {
        this.birth_certificate = birth_certificate;
    }

    @Override
    public String toString() {
        return "ChildEntity{" +
                "childId=" + childId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", vaccination_card_number='" + vaccination_card_number + '\'' +
                ", gender='" + gender + '\'' +
                ", comment=" + comment +
                ", birth_certificate='" + birth_certificate + '\'' +
                '}';
    }
}
