import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurmasDetailsPage } from './turmas-details';

@NgModule({
  declarations: [
    TurmasDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TurmasDetailsPage),
  ],
})
export class TurmasDetailsPageModule {}
