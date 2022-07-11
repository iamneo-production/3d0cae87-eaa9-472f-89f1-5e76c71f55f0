import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { DataCommmunicationService } from 'src/app/services/data-commmunication.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams : Team[] | undefined; 

  constructor(private dcomm:DataCommmunicationService) { }

  ngOnInit(): void {
    this.dcomm.getTeams().then((res:any) => {
      this.teams = res;
     
    
    });
  }
  teamname!: string;
  description!: string;
  country!: string;

  team: Team = {
    teamname: "",
    description: "",
    country: "",
    id: 0,
    players: []
  }; 

  createTeam(){
      this.team.teamname = this.teamname;
      this.team.description = this.description;
      this.team.country = this.country;
      
      this.dcomm.saveTeam(this.team);
  
  }

}
