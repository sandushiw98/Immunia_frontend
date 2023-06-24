package com.project.Immunia.Controller;

import com.project.Immunia.Dto.LoginDTO;
import com.project.Immunia.Dto.UserDTO;
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

    @PostMapping("/parent")
    public ResponseEntity<String> saveParentUser(@RequestBody UserDTO userDTO) {
        userDTO.setUserRole("parent"); // Set user role as "parent"
        String id = userService.addUser(userDTO);
        return ResponseEntity.ok(id);
    }

    @PostMapping("/vaccination-center")
    public ResponseEntity<String> saveVaccinationCenterUser(@RequestBody UserDTO userDTO) {
        userDTO.setUserRole("vaccination center"); // Set user role as "vaccination center"
//        System.out.println(userDTO);
        String id = userService.addUser(userDTO);
        return ResponseEntity.ok(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> LoginUser(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

}