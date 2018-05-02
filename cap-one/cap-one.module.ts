import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapOnePage } from './cap-one';

@NgModule({
  declarations: [
    CapOnePage,
  ],
  imports: [
    IonicPageModule.forChild(CapOnePage),
  ],
})
export class CapOnePageModule {}
