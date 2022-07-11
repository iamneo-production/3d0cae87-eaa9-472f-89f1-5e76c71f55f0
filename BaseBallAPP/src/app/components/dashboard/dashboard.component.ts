import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Evento } from 'src/app/models/event';
import { DataCommmunicationService } from 'src/app/services/data-commmunication.service';
import { VenueModalComponent } from 'src/app/venue-modal/venue-modal.component';
// import { MatTableModule } from '@angular/material'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})


export class DashboardComponent implements OnInit {

  constructor(private dcomm:DataCommmunicationService, public dialog: MatDialog) { }
  events : Evento[] | undefined; 
  dataSource!: Evento[];
  div1!:boolean

  ngOnInit(): void {
    this.div1 = false
    // this.events = this.dcomm.getEvents() 
    this.dcomm.getEvents().then((res:any) => {
      this.events = res;
      this.dataSource =res
    
    });
  }
  

displayedColumns: string[] = ['name', 'address', 'applicantName', 'applicantAddress','applicantMob', 'fromDate', 'endDate','teamID', 'venueID' ];
ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}
]
//columns : any = this.dcomm.getColumns()

// this.dcomm.getVenues().then((res:any) => {
// console.log(res);
// });
clickedRows = new Set<PeriodicElement>();

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

  nameV!: string;
  color!: string;
saveEvent() {

  this.event.name = this.name;
  this.event.address = this.address;
  
  this.event.applicantName = this.applicantName;
  this.event.applicantAddress = this.applicantAddress;
  
  
  this.dcomm.saveEvent(this.event);
}
openDialog(): void {
  const dialogRef = this.dialog.open(VenueModalComponent, {
    width: '550px',
    data: { name: this.nameV, color: this.color }
  });
  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}

// show create tab
@ViewChild("div1") myNameElem: ElementRef | undefined;
show(){
  this.div1 = true
  
 
}
// cancel button

cancel(){
  this.div1 = false

}
//  cancel button ends

}

class User {
  id:number | undefined ;
  username:string | undefined;
  role:string | undefined;
  
  }

function CrossOrigin(arg0: string) {
  throw new Error('Function not implemented.');
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}