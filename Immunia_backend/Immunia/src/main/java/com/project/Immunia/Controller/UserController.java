package com.project.Immunia.Controller;

import com.project.Immunia.Entity.UserEntity;
import com.project.Immunia.Response.LoginResponse;
import com.project.Immunia.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")

public class UserController {
    @Autowired
    private UserService userService;

//    @PostMapping("/parent")
//    public ResponseEntity<String> saveParentUser(@RequestBody UserEntity userEntity) {
//        userEntity.setUserRole("parent"); // Set user role as "parent"
//        String id = userService.addUser(userEntity);
//        return ResponseEntity.ok(id);
//    }
//
//    @PostMapping("/vaccination-center")
//    public ResponseEntity<String> saveVaccinationCenterUser(@RequestBody UserEntity userEntity) {
//        userEntity.setUserRole("vaccination center"); // Set user role as "vaccination center"
////        System.out.println(userDTO);
//        String id = userService.addUser(userEntity);
//        return ResponseEntity.ok(id);
//    }

    @PostMapping("/login")
    public ResponseEntity<?> LoginUser(@RequestBody UserEntity userEntity){
        LoginResponse loginResponse = userService.loginUser(userEntity);
        return ResponseEntity.ok(loginResponse);
    }

}