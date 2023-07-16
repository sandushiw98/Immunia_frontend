package com.project.Immunia.Service;

import com.project.Immunia.Entity.UserEntity;
import com.project.Immunia.Response.LoginResponse;

public interface UserService {
//    String addUser(UserEntity userEntity);
    LoginResponse loginUser(UserEntity userEntity);
}
