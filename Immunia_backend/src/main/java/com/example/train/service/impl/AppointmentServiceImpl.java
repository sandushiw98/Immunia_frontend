package com.example.train.service.impl;

import com.example.train.model.Appointment;
import com.example.train.repository.AppointmentRepository;
import com.example.train.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AppointmentServiceImpl implements AppointmentService {
    private final AppointmentRepository appointmentRepository;

    public Appointment saveAppointment(Appointment appointment){
        log.info("Saving appointment {} to the database",appointment.getAppointmentId());
        return appointmentRepository.save(appointment);
    }
    public List<Appointment> getAppointments(){
        log.info("Get all appointments from database");
        return appointmentRepository.findAll();
    }
    public Appointment getAppointment(Long id){
        log.info("Get {} appointment from database",id);
        return appointmentRepository.findById(id).get();
    }
}
