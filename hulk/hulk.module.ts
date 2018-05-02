import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HulkPage } from './hulk';

@NgModule({
  declarations: [
    HulkPage,
  ],
  imports: [
    IonicPageModule.forChild(HulkPage),
  ],
})
export class HulkPageModule {}
