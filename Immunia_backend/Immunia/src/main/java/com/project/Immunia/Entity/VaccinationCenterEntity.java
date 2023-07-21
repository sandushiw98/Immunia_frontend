package com.project.Immunia.Entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "vaccination_center")
public class VaccinationCenterEntity {
    @Id
    @Column(name = "vaccinationId", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long vaccinationId;
    @Column(name = "province", length = 255)
    private String province;

    @Column(name = "center_type", length = 255)
    private String center_type;

    @Column(name = "center_name", length = 255)
    private String center_name;

    @ElementCollection
    @Column(name = "center_location", length = 255)
    private List<String> center_location;

    public VaccinationCenterEntity(Long vaccinationId, String province, String center_type, String center_name, List<String> center_location) {
        this.vaccinationId = vaccinationId;
        this.province = province;
        this.center_type = center_type;
        this.center_name = center_name;
        this.center_location = center_location;
    }

    public VaccinationCenterEntity() {
    }

    public Long getVaccinationId() {
        return vaccinationId;
    }

    public void setVaccinationId(Long vaccinationId) {
        this.vaccinationId = vaccinationId;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCenter_type() {
        return center_type;
    }

    public void setCenter_type(String center_type) {
        this.center_type = center_type;
    }

    public String getCenter_name() {
        return center_name;
    }

    public void setCenter_name(String center_name) {
        this.center_name = center_name;
    }

    public List<String> getCenter_location() {
        return center_location;
    }

    public void setCenter_location(List<String> center_location) {
        this.center_location = center_location;
    }

    @Override
    public String toString() {
        return "VaccinationCenterEntity{" +
                "vaccinationId=" + vaccinationId +
                ", province='" + province + '\'' +
                ", center_type='" + center_type + '\'' +
                ", center_name='" + center_name + '\'' +
                ", center_location=" + center_location +
                '}';
    }
}
