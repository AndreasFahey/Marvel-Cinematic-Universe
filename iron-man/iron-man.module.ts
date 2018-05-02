import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IronManPage } from './iron-man';

@NgModule({
  declarations: [
    IronManPage,
  ],
  imports: [
    IonicPageModule.forChild(IronManPage),
  ],
})
export class IronManPageModule {}
