import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Venue } from 'src/app/models/venue';
import { DataCommmunicationService } from 'src/app/services/data-commmunication.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  venues!: Venue[];
  constructor(public dcomm: DataCommmunicationService) { }
 
  imageSrc = 'assets/images/logo.jpg'  
  imageAlt = 'logo'
   id!:number
   venue ! :Venue
   
   name!: string;
   address!: string;
   url!: string;

ngOnInit(): void {
  this.dcomm.getVenues().then((res:any) => {
    this.venues = res;
  
  });

}

createVenue(){
  this.venue.name = this.name;
  this.venue.address = this.address;
  this.venue.url = this.url;
  
  this.dcomm.saveVenue(this.venue);

}
onselect(venue:Venue,  $e:any) {
 alert(venue.id);

}
}
