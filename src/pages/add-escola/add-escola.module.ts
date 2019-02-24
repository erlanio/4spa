import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEscolaPage } from './add-escola';

@NgModule({
  declarations: [
    AddEscolaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEscolaPage),
  ],
})
export class AddEscolaPageModule {}
