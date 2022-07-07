import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public initSessionData(){
    sessionStorage.clear();
    
      }
      public setSessionData(key:string, data : any) {
       sessionStorage.setItem(key, data);
    
      }
     public getSessionData(key:string) : any {
    return sessionStorage.getItem(key);
    
     }
}
