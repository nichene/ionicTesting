import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MadPage } from './mad';

@NgModule({
  declarations: [
    MadPage,
  ],
  imports: [
    IonicPageModule.forChild(MadPage),
  ],
})
export class MadPageModule {}
