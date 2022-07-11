import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { DataCommmunicationService } from 'src/app/services/data-commmunication.service';

import {SessionStorageService} from 'src/app/services/session-storage.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 username:string = "root"
 passwd:string = "Password"
 confPasswd:string = "Confirm Password"
 loginflag!:boolean

  constructor(private router:Router, private aService: SessionStorageService,
    private dcomm:DataCommmunicationService) { }

  usertypes : UserType[] = [
    {id:1,type :"Admin" },
    {id:1,type :"User" },
    ]
  userType !: UserType 
  loginUser: User = {
    id: 0,
    userName: '',
    roles: '',
    password: ''
  }
  ngOnInit(): void {
   //sessionStorage.clear;
   this.aService.initSessionData()
  }

  login()
{
  this.aService.setSessionData("auth", "true");
  

  this.dcomm.getUser(this.username).then((res:any) => {
       
        this.loginUser= res;
        
  });

  if(this.loginUser.userName===this.username && this.loginUser.password===this.passwd) {
  
    this.router.navigate(['/dashboard']);
  }

  else 
    {
      this.loginflag = true
       
    }
}


}


class UserType {

  id: number | undefined 
  type : string | undefined

}