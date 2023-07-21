package com.project.Immunia.Entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "donor")
public class DonorEntity {
    @Id
    @Column(name = "donorId", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long donorId;

    @Column(name = "donorName", length = 255)
    private String donorName;
    @Column(name = "contactNumber", length = 255)
    private String contactNumber;
    @Column(name = "amount", length = 255)
    private String amount;
    @Column(name = "email", length = 255)
    private String email;
    @Column(name = "donateFor", length = 255)
    private String donateFor;
    @ElementCollection
    @Column(name = "address", length = 255)
    private List<String> address;

    public DonorEntity() {
    }

    public DonorEntity(Long donorId, String donorName, String contactNumber, String amount, String email, String donateFor, List<String> address) {
        this.donorId = donorId;
        this.donorName = donorName;
        this.contactNumber = contactNumber;
        this.amount = amount;
        this.email = email;
        this.donateFor = donateFor;
        this.address = address;
    }

    public Long getDonorId() {
        return donorId;
    }

    public void setDonorId(Long donorId) {
        this.donorId = donorId;
    }

    public String getDonorName() {
        return donorName;
    }

    public void setDonorName(String donorName) {
        this.donorName = donorName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDonateFor() {
        return donateFor;
    }

    public void setDonateFor(String donateFor) {
        this.donateFor = donateFor;
    }

    public List<String> getAddress() {
        return address;
    }

    public void setAddress(List<String> address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "DonorEntity{" +
                "donorId=" + donorId +
                ", donorName='" + donorName + '\'' +
                ", contactNumber='" + contactNumber + '\'' +
                ", amount='" + amount + '\'' +
                ", email='" + email + '\'' +
                ", donateFor='" + donateFor + '\'' +
                ", address=" + address +
                '}';
    }
}
