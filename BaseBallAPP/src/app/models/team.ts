import { Player } from "./player";

export interface Team {
    id:number ;
    teamname:string;
    description:string ;
    country:string;
    players:Player[];
}
