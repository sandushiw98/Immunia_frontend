package com.example.train.controller;

import com.example.train.model.VaccineCenter;
import com.example.train.service.VaccineCenterService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Api(tags = "center")
@RestController
@RequestMapping("/api/center")
@CrossOrigin
@RequiredArgsConstructor
public class VaccineCenterController {
    private final VaccineCenterService vaccineCenterService;
    @ApiOperation(value = "all centers", notes = "Get all centers")
    @GetMapping("/")
    public ResponseEntity<List<VaccineCenter>> getVaccineCenterUsers(){
        return ResponseEntity.ok().body(vaccineCenterService.getVaccineCenterUsers());
    }
    @GetMapping("/{id}")
    public ResponseEntity<VaccineCenter> getVaccineCenterUser(@PathVariable Long id){
        return new ResponseEntity<VaccineCenter>(vaccineCenterService.getVaccineCenterUser(id), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<VaccineCenter> saveVaccineCenterUser(@RequestBody VaccineCenter vaccineCenter){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/center/save").toUriString());
        return ResponseEntity.created(uri).body(vaccineCenterService.saveVaccineCenterUser(vaccineCenter));
    }
    @DeleteMapping("/delete/{id}")
    public String deleteVaccineCenterUser(@PathVariable Long id){
        vaccineCenterService.deleteVaccineCenterUser(id);
        return "Deleted admin with id "+id;
    }
}
