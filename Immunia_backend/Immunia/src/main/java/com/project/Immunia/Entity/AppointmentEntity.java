package com.project.Immunia.Entity;


import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name= "appointment")
public class AppointmentEntity {

    @Id
    @Column(name = "appointmentId", length = 45)
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

}
