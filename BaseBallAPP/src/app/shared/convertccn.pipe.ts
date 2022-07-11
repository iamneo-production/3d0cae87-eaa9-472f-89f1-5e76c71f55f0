import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name:'convertccn' })

export class ConvertToCCN implements PipeTransform {
    transform(value: any, arg1:any,arg2:any) {
            
         if(value) {
            
            return parseInt(value) * parseInt(arg1) / parseInt(arg2)
         } 

        return parseInt(value) * parseInt(arg1) / parseInt(arg2);
    }

    
}