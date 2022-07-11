package com.example.baseball;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin


class BBRestController {
   
    private final UserRepository repository;
    private final EventRepository repositoryE;
    private final VenueRepository repositoryV;
    private final TeamRepository repositoryT;

    BBRestController(UserRepository repository,EventRepository repositoryE, 
    VenueRepository repositoryV,TeamRepository repositoryT ) {
      this.repository = repository;
      this.repositoryE = repositoryE;
      this.repositoryV = repositoryV;
      this.repositoryT = repositoryT;
    }

    @GetMapping("/users")
    List<User> all() {
      return repository.findAll();
    }
    // end::get-aggregate-root[]
  
    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
      return repository.save(newUser);
    }
  
    // Single item
    
    @GetMapping("/users/{id}")
    Optional<User> ones(@PathVariable Long id) {
      Optional<User> u = null;
        try {
       u = repository.findById(id);
      }
      catch(Exception ex) {} 
      // .orElseThrow(() -> new Exception());
       return u;
    }
  

// find by user by name
    @RequestMapping(path="/users/name")
    @ResponseBody
    User one(@RequestParam String name) {
      List<User> u = null;
        try {
       u =  repository.findByUserName(name);
      }
      catch(Exception ex) {} 
      // .orElseThrow(() -> new Exception());
       return u.get(0);
    }
    @PutMapping("/users/{id}")
    User replaceEmployee(@RequestBody User newUser, @PathVariable Long id) {
      
      return repository.findById(id)
        .map(user -> {
          user.setUserName(newUser.getUserName());
          user.setUserRole(newUser.getUserRole());
          return repository.save(user);
        })
        .orElseGet(() -> {
            newUser.setId(id);
          return repository.save(newUser);
        });
    }
  
    @DeleteMapping("/users/{id}")
    void deleteEmployee(@PathVariable Long id) {
      repository.deleteById(id);
    }


    //eventss
    // @CrossOrigin("http://127.0.0.1:8080/")
    @GetMapping("/events")
    List<Event> allE() {
      return repositoryE.findAll();
    }
    // end::get-aggregate-root[]
  
    @PostMapping("/events")
    Event neEvent(@RequestBody Event newEvent) {
      return repositoryE.save(newEvent);
    }
  
    // Event sservicess
    
    @GetMapping("/events/{id}")
    Optional<Event> onee(@PathVariable Long id) {
      Optional<Event> u = null;
        try {
       u = repositoryE.findById(id);
      }
      catch(Exception ex) {} 
      // .orElseThrow(() -> new Exception());
       return u;
    }
  
    @PutMapping("/events/{id}")
    Event replaceEvent(@RequestBody Event newUser, @PathVariable Long id) {
      
      return repositoryE.findById(id)
        .map(event -> {
          event.setName(newUser.getName());
          event.setAddress(newUser.getAddress());
          return repositoryE.save(event);
        })
        .orElseGet(() -> {
            newUser.setId(id);
          return repositoryE.save(newUser);
        });
    }
  
    @DeleteMapping("/events/{id}")
    void deleteEvenet(@PathVariable Long id) {
      repositoryE.deleteById(id);
    }


    // venues

    @GetMapping("/venues")
    List<Venue> allV() {
      return repositoryV.findAll();
    }
  
  
    @PostMapping("/venues")
    Venue newUserE(@RequestBody Venue c) {
      return repositoryV.save(c);
    }
  
    //teams

    @GetMapping("/teams")
    List<Team> allT() {
      return repositoryT.findAll();
    }
    
  
    @PostMapping("/teams")
    Team newT(@RequestBody Team t) {
      return repositoryT.save(t);
    }

  }


