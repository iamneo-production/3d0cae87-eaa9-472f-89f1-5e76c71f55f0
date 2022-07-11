import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentComponent } from 'src/app/components/auth-component/auth-component.component'
import { AuthServiceService } from 'src/app/services/auth-service.service'


@NgModule({
  declarations: [AuthComponentComponent],
  imports: [
    CommonModule
  ],
  providers: [AuthServiceService]
})
export class CoreModulesModule { }
