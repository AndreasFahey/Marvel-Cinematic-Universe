import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThorPage } from './thor';

@NgModule({
  declarations: [
    ThorPage,
  ],
  imports: [
    IonicPageModule.forChild(ThorPage),
  ],
})
export class ThorPageModule {}
