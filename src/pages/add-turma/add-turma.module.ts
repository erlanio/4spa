import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTurmaPage } from './add-turma';

@NgModule({
  declarations: [
    AddTurmaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTurmaPage),
  ],
})
export class AddTurmaPageModule {}
