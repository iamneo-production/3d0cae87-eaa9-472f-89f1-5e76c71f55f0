import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { DataCommmunicationService } from 'src/app/services/data-commmunication.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  userid:string = "root"
  email:string = "EMail"
  username:string = "User name"
  mobNo:string = "Mobile Number"
  passwd:string = "Password"
  confPasswd:string = "Confirm Password"
  role:string = "" 
 
   constructor(private router:Router, private aService: SessionStorageService,
     private dcomm:DataCommmunicationService) { }
 
   usertypes : UserType[] = [
     {id:1,type :"Admin" },
     {id:2,type :"Organizer" },
     ]
   userType !: UserType 
    user:User ={
      id: 0,
      userName: '',
      roles: '',
      password:''
    }
   
   ngOnInit(): void {
    //sessionStorage.clear;
    //this.aService.initSessionData()
   }
 
  submit() {
    this.user.userName = this.username;
    this.user.roles = this.role;
    // this.user.username=this.username;
    // this.user.username=this.username;
    // this.user.username=this.username;

    this.dcomm.saveUser(this.user);
  }
 
 doSelectUserType(e:any) {
   this.userType = this.usertypes[e.target.value-1];
   this.role = this.userType.type
   console.log(this.userType.type)
    }
}
class UserType {

  id: number | undefined 
  type !: string

}