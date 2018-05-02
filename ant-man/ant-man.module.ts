import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntManPage } from './ant-man';

@NgModule({
  declarations: [
    AntManPage,
  ],
  imports: [
    IonicPageModule.forChild(AntManPage),
  ],
})
export class AntManPageModule {}
