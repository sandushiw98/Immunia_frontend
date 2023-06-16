package com.project.Immunia.Controller;

import com.project.Immunia.Dto.UserDTO;
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
    @GetMapping("/hello")
    public String printStr(){

        return "Helloworld";
    }
    @PostMapping("/parent")
    public ResponseEntity<String> saveParentUser(@RequestBody UserDTO userDTO) {
        userDTO.setUserRole("parent"); // Set user role as "parent"
        String id = userService.addUser(userDTO);
        return ResponseEntity.ok(id);
    }

    @PostMapping("/vaccination-center")
    public ResponseEntity<String> saveVaccinationCenterUser(@RequestBody UserDTO userDTO) {
        userDTO.setUserRole("vaccination center"); // Set user role as "vaccination center"
        String id = userService.addUser(userDTO);
        return ResponseEntity.ok(id);
    }

}