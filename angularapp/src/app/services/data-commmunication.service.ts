import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venue } from '../odelss/venue';
import { Evento } from '../odelss/event';
import { User } from '../odelss/user';

@Injectable({
  providedIn: 'root'
})
export class DataCommmunicationService {
  constructor(private httpc:HttpClient) { }

 

 // Get Event data



url:string = "http://localhost:8080/"

public getUsers():Promise<User[] | undefined>  {

  return this.httpc.get<User[]>(this.url+"/users").toPromise();
}  



public getEvents():Promise<Evento[] | undefined>  {

  return this.httpc.get<Evento[]>(this.url+"/events").toPromise();
}  

public getVenues():Promise<Venue[] | undefined>  {

    return this.httpc.get<Venue[]>(this.url+"venues").toPromise();
  }

  public saveUser(user: User) {

    this.httpc.post(this.url + "users", user).subscribe(data => {
      console.log(data);
    });
  }
  public saveEvent(event: Evento) {

    this.httpc.post(this.url + "events", event).subscribe(data => {
      console.log(data);
    });
  }
 
}

  
  
  