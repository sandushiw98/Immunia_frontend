package com.example.train.service;

import com.example.train.model.AppUser;
import com.example.train.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AppUserServiceImpl implements AppUserService, UserDetailsService {
    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;

    public AppUser saveAppUser(AppUser appUser){
        log.info("Saving user {} to the database",appUser.getUserRole());
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        return appUserRepository.save(appUser);
    }
    public List<AppUser> getAppUsers(){
        log.info("Get all users from database");
        return appUserRepository.findAll();
    }
    public AppUser getAppUser(Long id){
        log.info("Get {} user from database",id);
        return appUserRepository.findById(id).get();
    }
    public void deleteAppUser(Long id){
        log.info("Delete user {} from database",id);
        appUserRepository.deleteById(id);
    }
    public AppUser updateAppUser(Long id,AppUser appUser){
        AppUser existingAppUser = appUserRepository.findById(id).get();

        if(Objects.nonNull(appUser.getContactNumber()) && !"".equalsIgnoreCase(appUser.getContactNumber())){
            existingAppUser.setContactNumber(appUser.getContactNumber());
        }
        return appUserRepository.save(existingAppUser);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findAppUserByEmail(email);
        if(appUser == null){
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        }else {
            log.info("User found in the database: {}",email);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//        appUser.getUserName().forEach(userRole -> authorities.add(new SimpleGrantedAuthority(userRole.getName())));
        return new org.springframework.security.core.userdetails.User(appUser.getEmail(), appUser.getPassword(), authorities);
    }
}
