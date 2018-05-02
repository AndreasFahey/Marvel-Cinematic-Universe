import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvengersPage } from './avengers';

@NgModule({
  declarations: [
    AvengersPage,
  ],
  imports: [
    IonicPageModule.forChild(AvengersPage),
  ],
})
export class AvengersPageModule {}
