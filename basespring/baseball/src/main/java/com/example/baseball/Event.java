package com.example.baseball;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="events")

public class Event
{
@GeneratedValue
@Id

@Column(name = "id")
Long id;
@Column(name = "name")
  String name ; 
  @Column(name = "address")


  String address;
  @Column(name = "appname")
  String applicantName ;
  @Column(name = "appaddress") 
  String applicantAddress;
  @Column(name = "appmobno")

  String applicantMob; 
  @Column(name = "appemail")
  String aaplicantEmail;
  @Column(name = "fromdate") 
  Date fromDate;
  @Column(name = "enddate")
  Date endDate;
  @Column(name = "team")
  int teamID;
  @Column(name = "venue")
  int venueID; 
Event() {}


  public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getApplicantName() {
        return applicantName;
    }
    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }
    public String getApplicantAddress() {
        return applicantAddress;
    }
    public void setApplicantAddress(String applicantAddress) {
        this.applicantAddress = applicantAddress;
    }
    public String getApplicantMob() {
        return applicantMob;
    }
    public void setApplicantMob(String applicantMob) {
        this.applicantMob = applicantMob;
    }
    public String getAaplicantEmail() {
        return aaplicantEmail;
    }
    public void setAaplicantEmail(String aaplicantEmail) {
        this.aaplicantEmail = aaplicantEmail;
    }
    public Date getFromDate() {
        return fromDate;
    }
    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }
    public Date getEndDate() {
        return endDate;
    }
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
    public int getTeamID() {
        return teamID;
    }
    public void setTeamID(int teamID) {
        this.teamID = teamID;
    }
    public int getVenueID() {
        return venueID;
    }
    public void setVenueID(int venueID) {
        this.venueID = venueID;
    }

}
