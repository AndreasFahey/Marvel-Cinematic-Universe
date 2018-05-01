import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CapOnePage } from './../cap-one/cap-one';
import { IronManPage } from './../iron-man/iron-man';
import { HulkPage } from './../hulk/hulk';
import { IronManTwoPage } from './../iron-man-two/iron-man-two';
import { ThorPage } from './../thor/thor';
import { AvengersPage } from './../avengers/avengers';

@Component({
  selector: 'page-phaseone',
  templateUrl: 'PhaseOne.html'
})
export class PhaseOnePage {

  constructor(public navCtrl: NavController) {
  }
  openCapOne(){
    this.navCtrl.push(CapOnePage);
}

openIronMan(){
    this.navCtrl.push(IronManPage);
}

openHulk(){
    this.navCtrl.push(HulkPage);
}
openIronMan2(){
  this.navCtrl.push(IronManTwoPage);
}
openThor(){
    this.navCtrl.push(ThorPage);
  }
openAvengers(){
    this.navCtrl.push(AvengersPage);
  }

}