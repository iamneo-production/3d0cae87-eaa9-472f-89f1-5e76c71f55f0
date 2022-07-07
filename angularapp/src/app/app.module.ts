import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModulesModule } from './modules/core-modules/core-modules.module';
import { RouterModule } from '@angular/router';
import { DataCommmunicationService } from './services/data-commmunication.service';
import { HomeModuleModule } from './modules/home-module/home-module.module';
import { AuthComponentComponent } from './components/auth-component/auth-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { UiGridComponent } from './components/ui-grid/ui-grid.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UiGridComponent,
    LoginComponent,
    DashboardComponent,
    AboutusComponent,
    PageNotFoundComponent,
    AuthComponentComponent,
    HomeComponentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModulesModule,
    HomeModuleModule,
    RouterModule
  ],
  providers: [DataCommmunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
