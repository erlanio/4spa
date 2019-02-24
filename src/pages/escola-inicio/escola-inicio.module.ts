import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscolaInicioPage } from './escola-inicio';

@NgModule({
  declarations: [
    EscolaInicioPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolaInicioPage),
  ],
})
export class EscolaInicioPageModule {}
