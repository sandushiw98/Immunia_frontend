package com.project.Immunia.Entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "child")

public class VaccineEntity {
    @Id
    @Column(name = "vaccineId", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long donationId;

    @Column(name = "vaccine_name", length = 255)
    private String vaccineName;

    @Column(name = "manufacturer", length = 255)
    private String manufacturer;

    @Column(name = "recommended_age", length = 255)
    private String recommendedAge;

    @Temporal(TemporalType.DATE)
    @Column(name = "manufactured_date")
    private Date manufacturedDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "expirary_date")
    private Date expiraryDate;

    @Column(name = "manufacturer", length = 255)
    private String manufacturerVaccine;

    @ElementCollection
    @Column(name = "description", length = 255)
    private List<String> description;

    public VaccineEntity() {
    }

    public VaccineEntity(Long donationId, String vaccineName, String manufacturer, String recommendedAge, Date manufacturedDate, Date expiraryDate, String manufacturerVaccine, List<String> description) {
        this.donationId = donationId;
        this.vaccineName = vaccineName;
        this.manufacturer = manufacturer;
        this.recommendedAge = recommendedAge;
        this.manufacturedDate = manufacturedDate;
        this.expiraryDate = expiraryDate;
        this.manufacturerVaccine = manufacturerVaccine;
        this.description = description;
    }

    public Long getDonationId() {
        return donationId;
    }

    public void setDonationId(Long donationId) {
        this.donationId = donationId;
    }

    public String getVaccineName() {
        return vaccineName;
    }

    public void setVaccineName(String vaccineName) {
        this.vaccineName = vaccineName;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getRecommendedAge() {
        return recommendedAge;
    }

    public void setRecommendedAge(String recommendedAge) {
        this.recommendedAge = recommendedAge;
    }

    public Date getManufacturedDate() {
        return manufacturedDate;
    }

    public void setManufacturedDate(Date manufacturedDate) {
        this.manufacturedDate = manufacturedDate;
    }

    public Date getExpiraryDate() {
        return expiraryDate;
    }

    public void setExpiraryDate(Date expiraryDate) {
        this.expiraryDate = expiraryDate;
    }

    public String getManufacturerVaccine() {
        return manufacturerVaccine;
    }

    public void setManufacturerVaccine(String manufacturerVaccine) {
        this.manufacturerVaccine = manufacturerVaccine;
    }

    public List<String> getDescription() {
        return description;
    }

    public void setDescription(List<String> description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "VaccineEntity{" +
                "donationId=" + donationId +
                ", vaccineName='" + vaccineName + '\'' +
                ", manufacturer='" + manufacturer + '\'' +
                ", recommendedAge='" + recommendedAge + '\'' +
                ", manufacturedDate=" + manufacturedDate +
                ", expiraryDate=" + expiraryDate +
                ", manufacturerVaccine='" + manufacturerVaccine + '\'' +
                ", description=" + description +
                '}';
    }
}
