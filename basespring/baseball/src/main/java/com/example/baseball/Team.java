package com.example.baseball;

    import jakarta.persistence.Column;
    import jakarta.persistence.GeneratedValue;
    import jakarta.persistence.Id;
    
    @jakarta.persistence.Entity
    @jakarta.persistence.Table(name = "team")
    public class Team {
    
    Team() {}
        @Id
        @Column(name="id")
    @GeneratedValue
    private Long id;
    
    @Column(name= "teamname")    
    private String teamname;
    
    @Column(name= "description")  
    private String description;
    
    @Column(name= "country")  
    private String country;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeamname() {
        return teamname;
    }

    public void setTeamname(String teamname) {
        this.teamname = teamname;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
    




}