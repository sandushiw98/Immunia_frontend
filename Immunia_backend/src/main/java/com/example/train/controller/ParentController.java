package com.example.train.controller;

import com.example.train.model.Parent;
import com.example.train.service.ParentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Api(tags = "Parent")
@RestController
@RequestMapping("/api/parent")
@CrossOrigin
@RequiredArgsConstructor
public class ParentController {
    private final ParentService parentService;
    @ApiOperation(value = "all parents", notes = "Get all parents")
    @GetMapping("/")
    public ResponseEntity<List<Parent>> getParentUsers(){
        return ResponseEntity.ok().body(parentService.getParentUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Parent> getParentUser(@PathVariable Long id){
        return new ResponseEntity<Parent>(parentService.getParentUser(id), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Parent> saveParentUser(@RequestBody Parent parent){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/parent/save").toUriString());
        return ResponseEntity.created(uri).body(parentService.saveParentUser(parent));
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
    public String deleteParentUser(@PathVariable Long id){
        parentService.deleteParentUser(id);
        return "Deleted admin with id "+id;
    }
}
