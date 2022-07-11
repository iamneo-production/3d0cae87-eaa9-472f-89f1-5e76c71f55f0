
     package com.example.baseball;

    import jakarta.persistence.Column;
    import jakarta.persistence.GeneratedValue;
    import jakarta.persistence.Id;
    
    @jakarta.persistence.Entity
    @jakarta.persistence.Table(name = "venue")
    public class Venue {
    
    Venue() {}
        @Id
        @Column(name="id")
    @GeneratedValue
    private Long id;
    
    @Column(name= "name")    
    private String name;
    
    @Column(name= "address")  
    private String address;
    
    @Column(name= "url")  
    private String url;
    
    @Column(name= "alt")  
    private String alt;

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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getAlt() {
        return alt;
    }

    public void setAlt(String alt) {
        this.alt = alt;
    }
    
   
 

}
