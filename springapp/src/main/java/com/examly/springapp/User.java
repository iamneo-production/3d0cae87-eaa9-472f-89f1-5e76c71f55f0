package com.examly.springapp;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@jakarta.persistence.Entity
@jakarta.persistence.Table(name = "users")
public class User {

User() {}
    @Id
    @Column(name="id")
@GeneratedValue
private Long id;

@Column(name= "email")    
private String email;

@Column(name= "password")  
private String password;

@Column(name= "username")  
private String userName;

@Column(name= "mobileno")  
private String mobienumber;

@Column(name= "role")  
private String userRole;

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

public String getPassword() {
    return password;
}

public void setPassword(String password) {
    this.password = password;
}

public String getUserName() {
    return userName;
}

public void setUserName(String userName) {
    this.userName = userName;
}

public String getMobienumber() {
    return mobienumber;
}

public void setMobienumber(String mobienumber) {
    this.mobienumber = mobienumber;
}

public String getUserRole() {
    return userRole;
}

public void setUserRole(String userRole) {
    this.userRole = userRole;
}




}
