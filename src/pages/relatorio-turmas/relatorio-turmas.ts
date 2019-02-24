import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValoresAfrsPage } from '../valores-afrs/valores-afrs';
import { ComponentesafrsPage } from '../componentesafrs/componentesafrs';
import { TblzonariscoPage } from '../tblzonarisco/tblzonarisco';
import { TblunificadaPage } from '../tblunificada/tblunificada';
import { GrafcardioPage } from '../grafcardio/grafcardio';
import { GrafosteoPage } from '../grafosteo/grafosteo';
import { GrafgeralPage } from '../grafgeral/grafgeral';
/**
 * Generated class for the RelatorioTurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatorio-turmas',
  templateUrl: 'relatorio-turmas.html',
})
export class RelatorioTurmasPage {
  public id_turma:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id_turma = this.navParams.get('id_turma');

  }

  valoresAFRS(){
    this.navCtrl.push(ValoresAfrsPage,
      {
        'id_turma': this.id_turma,
      });
  }

  componentesAFRS(){
    this.navCtrl.push(ComponentesafrsPage,
      {
        'id_turma': this.id_turma,
      });
  }
  tblZonaRisco(){
    this.navCtrl.push(TblzonariscoPage,
      {
        'id_turma': this.id_turma,
      });
  }

  tblunificada(){
    this.navCtrl.push(TblunificadaPage,
      {
        'id_turma': this.id_turma,
      });
  }

  grafCardio(){
    this.navCtrl.push(GrafcardioPage,
      {
        'id_turma': this.id_turma,
      });
  }

  grafGeral(){
    this.navCtrl.push(GrafgeralPage,
      {
        'id_turma': this.id_turma,
      });
  }

  grafOsteo(){
    this.navCtrl.push(GrafosteoPage,
      {
        'id_turma': this.id_turma,
      });
  }

}
