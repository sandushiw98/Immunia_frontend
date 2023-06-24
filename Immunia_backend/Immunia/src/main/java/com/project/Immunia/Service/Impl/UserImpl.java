package com.project.Immunia.Service.Impl;
import com.project.Immunia.Dto.LoginDTO;
import com.project.Immunia.Dto.UserDTO;
import com.project.Immunia.Entity.UserEntity;
import com.project.Immunia.Repository.UserRepository;
import com.project.Immunia.Response.LoginResponse;
import com.project.Immunia.Service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import java.util.Optional;

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
        userEntity.setEmail(userDTO.getEmail());
        userEntity.setPhoneNumber(userDTO.getPhoneNumber());
        userEntity.setUserRole(userRole);
        userEntity.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        userRepository.save(userEntity);

        return userEntity.getUsername();
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        UserEntity user1 = userRepository.findByEmail(loginDTO.getEmail());
        if(user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);

            if (isPwdRight){
                Optional<UserEntity> user = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if(user.isPresent()){
                    return new LoginResponse("Login Success", true);
                }
                else{
                    return new LoginResponse("Login failed", false);
                }
            }
            else{
                return new LoginResponse("Invalid Credentials", false);
            }
        }
        else{
            return new LoginResponse("Invalid Credentials", false);
        }
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
