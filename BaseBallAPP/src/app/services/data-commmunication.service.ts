import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../models/User';
import { Venue } from '../models/venue';
import { Evento } from '../models/event';
import { Team } from '../models/team';

// let header = new HttpHeaders();
// header.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class DataCommmunicationService {

  constructor(private httpc:HttpClient) { 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    
  }

 
url:string = "http://local.dom.com:8080/api/"

public getEvents():Promise<Evento[] | undefined>  {

//  return Promise.resolve(this.events);

  return this.httpc.get<Evento[]>(this.url+"events").toPromise();
}
  //   get('/candy',(req,res)=>{
//   res.set('Access-Control-Allow-Origin', 'http://localhost:8000');
//   res.json({'candy':'bubble-gum'})
//   })

public getVenues():Promise<Venue[] | undefined>  {

    return this.httpc.get<Venue[]>(this.url+"venues").toPromise();
  }

  public getUser(name:String):Promise<User | undefined>  {

    return this.httpc.get<User>(this.url+"users/name?name="+name).toPromise();
  }
 
//team
  public getTeams():Promise<Team[] | undefined>  {

    return this.httpc.get<Team[]>(this.url+"teams").toPromise();
  }

 
  public saveTeam(team: Team) {

    this.httpc.post(this.url + "users", team).subscribe(data => {
      console.log(data);
    });
  }

  //venue
  
  
 
  public saveVenue(venue: Venue) {

    this.httpc.post(this.url + "venues", venue).subscribe(data => {
      console.log(data);
    });
  }


    // public saveUser(user: User): Observable<any> {
    //   const urlS = this.url+"users";
    //   alert("save" + urlS);
    //   return this.httpc.post<any>(urlS, user);
    // }
  

  //   saveUser(user: User): Observable<User> {
  //     console.log(user.username)
  //     let httpHeaders = new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         'Cache-Control': 'no-cache'
  //     });
  //     return this.httpc.post(this.url+"users", user, { headers: httpHeaders }).pipe(
  //         map(this.extractData),
  //         catchError(this.handleErrorObservable)
  //     );
  // }

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

  private extractData(res: any) {
    let body = res;
  console.log(res);

    return body;
}
private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
}
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
}

}



