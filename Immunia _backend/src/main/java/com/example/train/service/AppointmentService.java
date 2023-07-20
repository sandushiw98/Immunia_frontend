package com.example.train.service;

import com.example.train.model.Appointment;
import com.example.train.model.Donor;

import java.util.List;

public interface AppointmentService {
    Appointment saveAppointment(Appointment appointment);
    List<Appointment> getAppointments();
    Appointment getAppointment(Long id);
}
