import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule
  ],
  declarations: []
})
export class CustomMaterialModuleModule { }
