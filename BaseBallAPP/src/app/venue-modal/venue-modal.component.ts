import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from '../models/modalData';
import { Venue } from '../models/venue';
import { DataCommmunicationService } from '../services/data-commmunication.service';

@Component({
  selector: 'app-venue-modal',
  templateUrl: './venue-modal.component.html',
  styleUrls: ['./venue-modal.component.css']
})
export class VenueModalComponent implements OnInit {
  venues!: Venue[];
  
  constructor( public dialogRef: MatDialogRef<VenueModalComponent>,
    public dcomm: DataCommmunicationService, @Inject(MAT_DIALOG_DATA) public data: Venue ) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
    imageSrc = 'assets/images/logo.jpg'  
    imageAlt = 'logo'
     id!:number
     venue ! :Venue
  ngOnInit(): void {
    this.dcomm.getVenues().then((res:any) => {
      this.venues = res;
    
    });
  
  }
  updateAllComplete() {


  }

  onselect(venue:Venue,  $e:any) {
   alert(venue.id);

  }
}
