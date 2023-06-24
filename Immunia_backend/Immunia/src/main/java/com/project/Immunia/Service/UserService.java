package com.project.Immunia.Service;

import com.project.Immunia.Dto.LoginDTO;
import com.project.Immunia.Dto.UserDTO;
import com.project.Immunia.Response.LoginResponse;

public interface UserService {
    String addUser(UserDTO userDTO);
    LoginResponse loginUser(LoginDTO loginDTO);
}
