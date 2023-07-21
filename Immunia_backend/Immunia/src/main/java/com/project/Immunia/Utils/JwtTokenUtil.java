package com.project.Immunia.Utils;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;




    @Component
    public class JwtTokenUtil {

        @Value("${jwt.secret}")
        private String jwtSecret;

        @Value("${jwt.expiration}")
        private int jwtExpiration;

        public String generateToken(String username) {
            Date now = new Date();
            Date expiryDate = new Date(now.getTime() + jwtExpiration * 1000);

            return Jwts.builder()
                    .setSubject(username)
                    .setIssuedAt(now)
                    .setExpiration(expiryDate)
                    .signWith(SignatureAlgorithm.HS256, jwtSecret)
                    .compact();
        }
    }

