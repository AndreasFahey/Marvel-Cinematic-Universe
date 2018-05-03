import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IronMan3Page } from './../iron-man3/iron-man3';
import { Thor2Page } from './../thor2/thor2';
import { Cap2Page } from './../cap2/cap2';
import { GuardiansPage } from './../guardians/guardians';
import { UltronPage } from './../ultron/ultron';
import { AntManPage } from './../ant-man/ant-man';

@Component({
  selector: 'page-phasetwo',
  templateUrl: 'PhaseTwo.html'
})
export class PhaseTwoPage {

  constructor(public navCtrl: NavController) {
  }
  openIronMan3(){
    this.navCtrl.push(IronMan3Page);
}

openThor2(){
    this.navCtrl.push(Thor2Page);
}

openCap2(){
    this.navCtrl.push(Cap2Page);
}
openGuardians(){
  this.navCtrl.push(GuardiansPage);
}
openAvengers2(){
    this.navCtrl.push(UltronPage);
  }
openAntMan(){
    this.navCtrl.push(AntManPage);
  }

}