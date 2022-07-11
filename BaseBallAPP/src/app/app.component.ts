import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {VenueModalComponent} from 'src/app/venue-modal/venue-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaseBallAPP';

  imageSrc = 'assets/images/logo.jpg'  
  imageAlt = 'logo'

  constructor() { }
 

}
