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
  openCaptainOne(){
    this.navCtrl.push(IronMan3Page);
}

openIronMan(){
    this.navCtrl.push(Thor2Page);
}

openHulk(){
    this.navCtrl.push(Cap2Page);
}
openIronManTwo(){
  this.navCtrl.push(GuardiansPage);
}
openThor(){
    this.navCtrl.push(UltronPage);
  }
openAvengers(){
    this.navCtrl.push(AntManPage);
  }

}