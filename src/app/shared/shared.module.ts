import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from './components/alert/alert.module';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  exports: [AlertModule],
  declarations: []
})
export class SharedModule { }
