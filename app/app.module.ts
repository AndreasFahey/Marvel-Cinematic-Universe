import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhaseOnePage } from '../pages/phaseone/phaseone';
import { PhaseTwoPage } from '../pages/phasetwo/phasetwo';
import { PhaseThreePage } from '../pages/phasethree/phasethree';
import { IronManPage } from '../pages/iron-man/iron-man';
import { CapOnePage } from '../pages/cap-one/cap-one';
import { HulkPage } from '../pages/hulk/hulk';
import { IronManTwoPage } from '../pages/iron-man-two/iron-man-two';
import { ThorPage } from '../pages/thor/thor';
import { AvengersPage } from '../pages/avengers/avengers';
import { IronMan3Page } from '../pages/iron-man3/iron-man3';
import { Thor2Page } from '../pages/thor2/thor2';
import { Cap2Page } from '../pages/cap2/cap2';
import { GuardiansPage } from '../pages/guardians/guardians';
import { UltronPage } from '../pages/ultron/ultron';
import { AntManPage } from '../pages/ant-man/ant-man';
import { Cap3Page } from '../pages/cap3/cap3';
import { DrStrangePage } from '../pages/dr-strange/dr-strange';
import { Guardians2Page } from '../pages/guardians2/guardians2';
import { SpiderManPage } from '../pages/spider-man/spider-man';
import { Thor3Page } from '../pages/thor3/thor3';
import { BlackPantherPage } from '../pages/black-panther/black-panther';
import { InfinityWarPage } from '../pages/infinity-war/infinity-war';
import { UpcomingPage } from '../pages/upcoming/upcoming';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhaseOnePage,
    PhaseTwoPage,
    PhaseThreePage,
    UpcomingPage,
    CapOnePage,
    IronManPage,
    HulkPage,
    IronManTwoPage,
    ThorPage,
    AvengersPage,
    IronMan3Page,
    Thor2Page,
    Cap2Page,
    GuardiansPage,
    UltronPage,
    AntManPage,
    Cap3Page,
    DrStrangePage,
    Guardians2Page,
    SpiderManPage,
    Thor3Page,
    BlackPantherPage,
    InfinityWarPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhaseOnePage,
    PhaseTwoPage,
    PhaseThreePage,
    UpcomingPage,
    CapOnePage,
    IronManPage,
    HulkPage,
    IronManTwoPage,
    ThorPage,
    AvengersPage,
    IronMan3Page,
    Thor2Page,
    Cap2Page,
    GuardiansPage,
    UltronPage,
    AntManPage,
    Cap3Page,
    DrStrangePage,
    Guardians2Page,
    SpiderManPage,
    Thor3Page,
    BlackPantherPage,
    InfinityWarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
