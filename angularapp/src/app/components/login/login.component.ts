import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataCommmunicationService } from 'src/app/services/data-commmunication.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = "root"
  passwd:string = "Password"
  confPasswd:string = "Confirm Password"
 
 
   constructor(private router:Router, private aService: SessionStorageService,
     private dcomm:DataCommmunicationService) { }
 
   usertypes : UserType[] = [
     {id:1,type :"Admin" },
     {id:1,type :"User" },
     ]
   userType !: UserType 
   
   ngOnInit(): void {
      this.aService.initSessionData()
   }
 
   login()
 {
   this.aService.setSessionData("auth", "true");
   // sessionStorage.setItem("auth", "true")
   
   if(this.username==="root" && this.passwd==="root") {
   this.router.navigate(['/dashboard']);
   }
 
   else 
     {
        alert ("Invaild login");
     }
 }
 
}

class UserType {

  id: number | undefined 
  type : string | undefined

}