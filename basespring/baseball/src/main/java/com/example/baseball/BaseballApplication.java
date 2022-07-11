package com.example.baseball;

import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.boot.autoconfigure.domain.EntityScan;
// @Configuration
// @ComponentScan("com.example.baseball")
@SpringBootApplication
// @Configuration
// @EntityScan("com.example.basebclearall.model")
// @ComponentScan("com.example.baseball.model")
// @EnableTransactionManagement
// @EnableAutoConfiguration
// @EnableJpaRepositories(entityManagerFactoryRef = "dialerEntityManagerFactory", transactionManagerRef = "dialerTransactionManager", basePackages = { "com.example.baseball.repository" })
// @EntityScan({"com.example.baseball.model.User"})
public class BaseballApplication {

	public static void main(String[] args) {
		SpringApplication.run(BaseballApplication.class, args);
	}

}
