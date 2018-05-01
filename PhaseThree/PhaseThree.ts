import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cap3Page } from './../cap3/cap3';
import { DrStrangePage } from './../dr-strange/dr-strange';
import { Guardians2Page } from './../guardians2/guardians2';
import { SpiderManPage } from './../spider-man/spider-man';
import { Thor3Page } from './../thor3/thor3';
import { BlackPantherPage } from './../black-panther/black-panther';
import { InfinityWarPage } from './../infinity-war/infinity-war';

@Component({
  selector: 'page-phasethree',
  templateUrl: 'PhaseThree.html'
})
export class PhaseThreePage {

  constructor(public navCtrl: NavController) {
  }
  openCapThree(){
    this.navCtrl.push(Cap3Page);
}

openDrStrange(){
    this.navCtrl.push(DrStrangePage);
}

openGuardians2(){
    this.navCtrl.push(Guardians2Page);
}
openSpiderMan(){
  this.navCtrl.push(SpiderManPage);
}
openThor3(){
    this.navCtrl.push(Thor3Page);
  }
openBlackPanther(){
    this.navCtrl.push(BlackPantherPage);
  }
  openAvengers3(){
    this.navCtrl.push(InfinityWarPage);
  }

}