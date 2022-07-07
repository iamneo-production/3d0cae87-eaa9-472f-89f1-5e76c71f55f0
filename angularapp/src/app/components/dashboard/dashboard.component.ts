import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/odelss/event';
import { User } from 'src/app/odelss/user';
import { DataCommmunicationService } from 'src/app/services/data-commmunication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dcomm:DataCommmunicationService) { }
  events : Event[] | undefined; 
  ngOnInit(): void {
    // this.events = this.dcomm.getEvents() 
    this.dcomm.getEvents().then((res:any) => {
      this.events = res;
    
    });
  }
  



// this.dcomm.getVenues().then((res:any) => {
// console.log(res);
// });

name !:string ; 
address !: string;
applicantName !:string ; 
applicantAddress !: string;
applicantMob:string| undefined; 
applicantEmail:string| undefined; 
fromDate:string| undefined;
endDate:string| undefined;
teamID:number| undefined;
venueID:number| undefined; 

event: Evento = {
  name: "",
  id: undefined,
  address: undefined,
  applicantName: undefined,
  applicantAddress: undefined,
  applicantMob: undefined,
  aaplicantEmail: undefined,
  fromDate: undefined,
  endDate: undefined,
  teamID: undefined,
  venueID: undefined
}; 
saveEvent() {

  this.event.name = this.name;
  this.event.address = this.address;
  
  this.event.applicantName = this.applicantName;
  this.event.applicantAddress = this.applicantAddress;
  
  
  this.dcomm.saveEvent(this.event);
}

}
