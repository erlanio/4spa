import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { ActionSheetController } from 'ionic-angular'
import { SocialSharing } from '@ionic-native/social-sharing';

/**
* Generated class for the TblunificadaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-tblunificada',
  templateUrl: 'tblunificada.html',
})
export class TblunificadaPage {
  public id_turma:any;
  public avaliacoes:any;
  public escola:any;
  public codTurma:any;
  public totalZRSIMC:any;
  public totalZRSaptCardio:any;
  public totaZRSFlex:any;
  public totaZRSResAB:any;
  public totalAvaliacoes:any;
  public totalZRSdCardio:any;
  public totalZRSdOsteo:any;
  public pdfObj:any;
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams ,
    public HttpCtrl: Http,
    public alertCtrl: AlertController,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private socialSharing: SocialSharing,
    public actionSheetCtrl: ActionSheetController) {

      this.id_turma = this.navParams.get('id_turma');
      console.log(this.id_turma);
      this.HttpCtrl.get(this.API_URL + 'valoresAFRS?id_turma='+this.id_turma)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if(data != ""){
          this.avaliacoes = data;
          console.log(this.avaliacoes.length);
          this.escola = this.avaliacoes[0].nome_escola;
          this.codTurma = this.avaliacoes[0].cod_turma;
          this.totalZRSIMC = this.avaliacoes[0].totalZRSIMC;
          this.totalZRSaptCardio = this.avaliacoes[0].totalZRSaptCardio;
          this.totaZRSFlex = this.avaliacoes[0].totaZRSFlex;
          this.totaZRSResAB = this.avaliacoes[0].totaZRSResAB;
          this.totalAvaliacoes = this.avaliacoes[0].totalAvaliacoes;
          this.totalZRSdCardio = this.avaliacoes[0].totalZRSdCardio;
          this.totalZRSdOsteo = this.avaliacoes[0].totalZRSdOsteo;
        }else{
          const alerta = this.alertCtrl.create({
            title: '<p>Atenção!</p>',
            subTitle: '<p>Não existe nenhum avaliação para esta turma!</p>',
            buttons: ['OK']
          });
          alerta.present();

        }

      })

    }

  }
