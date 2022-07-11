import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiGridComponent } from './components/ui-grid/ui-grid.component';
import {DataCommmunicationService} from './services/data-commmunication.service'
import {CoreModulesModule} from './modules/core-modules/core-modules.module';
import { HomeModuleModule } from './modules/home-module/home-module.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { CcnComponent } from './components/ccn/ccn.component';
import { SignupComponent }  from './components/signup/signup.component';
import {HttpClientModule } from '@angular/common/http'
import { SharedModule } from './modules/shared/shared.module';
import { VenueModalComponent } from './venue-modal/venue-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VenuemodalComponent } from './components/venuemodal/venuemodal.component';
import { AngularMaterialModule } from './shared/angular-material.module';
// import { MatTableModule } from '@angular/material'

import { MatTableModule } from '@angular/material/table';
import { TeamComponent } from './components/team/team.component';
import { VenueComponent } from './components/venue/venue.component';

@NgModule({
  declarations: [
    AppComponent,
    UiGridComponent,
    LoginComponent,
    DashboardComponent,
    AboutusComponent,
    PageNotFoundComponent,
    CcnComponent,
    SignupComponent,
    VenueModalComponent,
    TeamComponent,
    VenueComponent
    // VenuemodalComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModulesModule,
    HomeModuleModule,
    RouterModule,
    HttpClientModule ,
    SharedModule,
    BrowserAnimationsModule,
    AngularMaterialModule ,

    MatTableModule


    
  ],
  providers: [DataCommmunicationService],
  bootstrap: [AppComponent],
  entryComponents: [VenueModalComponent]
})
export class AppModule { }
