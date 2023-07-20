package com.example.train.controller;

import com.example.train.model.VaccineInventory;
import com.example.train.service.VaccineInventoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Api(tags = "VaccineInventory")
@RestController
@RequestMapping("/api/vaccineInventory")
@CrossOrigin
@RequiredArgsConstructor
public class VaccineInventoryController {
    private final VaccineInventoryService vaccineInventoryService;

    @ApiOperation(value = "all inventories", notes = "Get all inventories")
    @GetMapping("/")
    public ResponseEntity<List<VaccineInventory>> getVaccineInventories(){
        return ResponseEntity.ok().body(vaccineInventoryService.getVaccineInventories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<VaccineInventory> getVaccineInventory(@PathVariable Long id){
        return new ResponseEntity<VaccineInventory>(vaccineInventoryService.getVaccineInventory(id), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<VaccineInventory> saveVaccineInventory(@RequestBody VaccineInventory vaccineInventory){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/vaccineInventory/save").toUriString());
        return ResponseEntity.created(uri).body(vaccineInventoryService.saveVaccineInventory(vaccineInventory));
    }

//    @PutMapping("/update/{id}")
//    public ResponseEntity<AppUser> updateAppUser(@RequestBody AppUser appUser, @PathVariable Long id){
//        try{
////            Student existingStudent = studentService.StudentGet(id);
//            AppUser appUserNew = parentRepository.updateAppUser(id,appUser);
////            return new ResponseEntity<>(HttpStatus.OK);
//            return ResponseEntity.ok().body(appUserNew);
//        }catch (NoSuchElementException e){
//            return new ResponseEntity<AppUser>(HttpStatus.NOT_FOUND);
//        }
//    }

    @DeleteMapping("/delete/{id}")
    public String deleteVaccineInventory(@PathVariable Long id){
        vaccineInventoryService.deleteVaccineInventory(id);
        return "Deleted admin with id "+id;
    }
}
