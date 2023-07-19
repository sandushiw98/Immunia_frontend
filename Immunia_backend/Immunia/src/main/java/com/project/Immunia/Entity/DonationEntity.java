package com.project.Immunia.Entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name ="donation")
public class DonationEntity {

    @Id
    @Column(name = "donationId", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long donationId;
    @Temporal(TemporalType.DATE)
    @Column(name = "donation_date")
    private Date donationDate;

    @Column(name = "amount", length = 255)
    private Integer amount;

    @ElementCollection
    @Column(name = "description", length = 255)
    private List<String> description;

    public DonationEntity() {
    }

    public DonationEntity(Long donationId, Date donationDate, Integer amount, List<String> description) {
        this.donationId = donationId;
        this.donationDate = donationDate;
        this.amount = amount;
        this.description = description;
    }

    public Long getDonationId() {
        return donationId;
    }

    public void setDonationId(Long donationId) {
        this.donationId = donationId;
    }

    public Date getDonationDate() {
        return donationDate;
    }

    public void setDonationDate(Date donationDate) {
        this.donationDate = donationDate;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public List<String> getDescription() {
        return description;
    }

    public void setDescription(List<String> description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "DonationEntity{" +
                "donationId=" + donationId +
                ", donationDate=" + donationDate +
                ", amount=" + amount +
                ", description=" + description +
                '}';
    }
}
