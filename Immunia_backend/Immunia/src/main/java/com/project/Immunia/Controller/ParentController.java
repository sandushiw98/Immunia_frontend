package com.project.Immunia.Controller;

import com.project.Immunia.Entity.ParentEntity;
import com.project.Immunia.Service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/parent")

public class ParentController {
    @Autowired
    private ParentService parentService;

    @PostMapping("/signup")
    public ResponseEntity<String> saveParentUser(@RequestBody ParentEntity parentEntity) {
        parentEntity.setUserRole("parent");
        String id = parentService.addParent(parentEntity);
        return ResponseEntity.ok(id);
    }
}
