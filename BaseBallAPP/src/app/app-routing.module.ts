import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamComponent } from './components/team/team.component';
import { VenueComponent } from './components/venue/venue.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
{path:"signup",  component: SignupComponent  } ,
{path:"login",  component: LoginComponent  } ,
{path:"dashboard",  component: DashboardComponent,canActivate:[AuthGuardService]  } ,
{path:"team",  component: TeamComponent,canActivate:[AuthGuardService]  } ,
{path:"venue",  component: VenueComponent,canActivate:[AuthGuardService]  } ,
{path:"aboutus",  component: AboutusComponent,canActivate:[AuthGuardService]  },
{path:"",  redirectTo: "login" ,pathMatch: "full" } ,
{path:"**",  component:PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
