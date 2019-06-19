import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';

@NgModule({
  declarations: [StructuralDirectiveComponent],
  exports:[
    StructuralDirectiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StructuralDirectiveModule { }
