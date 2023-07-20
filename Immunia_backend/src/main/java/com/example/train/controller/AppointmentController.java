package com.example.train.controller;

import com.example.train.model.Appointment;
import com.example.train.model.Parent;
import com.example.train.service.AppointmentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Api(tags = "Appointment")
@RestController
@RequestMapping("/api/appointment")
@CrossOrigin
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;
    @ApiOperation(value = "all appointments", notes = "Get all appointments")
    @GetMapping("/")
    public ResponseEntity<List<Appointment>> getAppointments(){
        return ResponseEntity.ok().body(appointmentService.getAppointments());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointment(@PathVariable Long id){
        return new ResponseEntity<Appointment>(appointmentService.getAppointment(id), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Appointment> saveAppointment(@RequestBody Appointment appointment){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/appointment/save").toUriString());
        return ResponseEntity.created(uri).body(appointmentService.saveAppointment(appointment));
    }

}
