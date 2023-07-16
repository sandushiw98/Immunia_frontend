package com.project.Immunia.Service.Impl;
import com.project.Immunia.Entity.UserEntity;
import com.project.Immunia.Repository.UserRepository;
import com.project.Immunia.Response.LoginResponse;
import com.project.Immunia.Service.UserService;
import com.project.Immunia.Utils.JwtTokenUtil;
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
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

//    @Override
//    public String addUser(UserEntity userEntity) {
//        String userRole = determineUserRole(); // Determine user role based on the request endpoint
//
//        userEntity.setUsername(userEntity.getUsername());
//        userEntity.setEmail(userEntity.getEmail());
//        userEntity.setPhoneNumber(userEntity.getPhoneNumber());
//        userEntity.setUserRole(userRole);
//        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
//
//        userRepository.save(userEntity);
//
//        return userEntity.getUsername();
//    }

    @Override
    public LoginResponse loginUser(UserEntity userEntity) {
        String msg = "";
        UserEntity user1 = userRepository.findByEmail(userEntity.getEmail());
        if(user1 != null) {
            String password = userEntity.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);

            if (isPwdRight){
                Optional<UserEntity> user = userRepository.findOneByEmailAndPassword(userEntity.getEmail(), encodedPassword);
                if(user.isPresent()){
//                    String token =jwtTokenUtil.generateToken(loginDTO.getEmail());
                    String userRole = user.get().getUserRole();
                    return new LoginResponse("Login Success", true, userRole);
                    
//                    return new LoginResponse(token, true);
                }
                else{
                    return new LoginResponse("Login failed", false, null);
                }
            }
            else{
                return new LoginResponse("Invalid Credentials", false, null);
            }
        }
        else{
            return new LoginResponse("Invalid Credentials", false, null);
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
