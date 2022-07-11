import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToCCN } from 'src/app/shared/convertccn.pipe';

@NgModule({
  declarations: [ConvertToCCN],
  imports: [
    CommonModule
  ],
  exports: [
    ConvertToCCN
  ]
})
export class SharedModule { }
