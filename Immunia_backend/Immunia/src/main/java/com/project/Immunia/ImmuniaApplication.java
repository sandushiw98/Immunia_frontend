package com.project.Immunia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

import javax.sql.DataSource;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ImmuniaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImmuniaApplication.class, args);
	}


}
