package com.project.Immunia.Service.Impl;

import com.project.Immunia.Dto.UserDTO;
import com.project.Immunia.Entity.UserEntity;
import com.project.Immunia.Repository.UserRepository;
import com.project.Immunia.Service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service
public class UserImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDTO) {
        String userRole = determineUserRole(); // Determine user role based on the request endpoint

        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(userDTO.getUsername());
        userEntity.setPhoneNumber(userDTO.getPhoneNumber());
        userEntity.setUserRole(userRole);
        userEntity.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        userRepository.save(userEntity);

        return userEntity.getUsername();
    }

    private String determineUserRole() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String requestUri = request.getRequestURI();

        if (requestUri.contains("/parent")) {
            return "parent";
        } else if (requestUri.contains("/vaccination-center")) {
            return "vaccination center";
        } else {
            // Default user role if no match is found
            return "default";
        }
    }
}
