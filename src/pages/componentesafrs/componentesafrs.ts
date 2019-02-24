import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
/**
* Generated class for the ComponentesafrsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-componentesafrs',
  templateUrl: 'componentesafrs.html',
})
export class ComponentesafrsPage {
  public id_turma:any;
  public avaliacoes:any;
  public escola:any;
  public codTurma:any;
  public totalZRSIMC:any;
  public totalZRSaptCardio:any;
  public totaZRSFlex:any;
  public totaZRSResAB:any;
  public totalAvaliacoes:any;

  pdfObj = null;

  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController, private plt: Platform, private file: File, private fileOpener: FileOpener) {


      this.id_turma = this.navParams.get('id_turma');
      console.log(this.id_turma);
      this.HttpCtrl.get(this.API_URL + 'valoresAFRS?id_turma='+this.id_turma)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if(data != ""){
          this.avaliacoes = data;
          this.escola = this.avaliacoes[0].nome_escola;
          this.codTurma = this.avaliacoes[0].cod_turma;
          this.totalZRSIMC = this.avaliacoes[0].totalZRSIMC;
          this.totalZRSaptCardio = this.avaliacoes[0].totalZRSaptCardio;
          this.totaZRSFlex = this.avaliacoes[0].totaZRSFlex;
          this.totaZRSResAB = this.avaliacoes[0].totaZRSResAB;
          this.totalAvaliacoes = this.avaliacoes[0].totalAvaliacoes;
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

    createPdf() {
      var docDefinition = {
        content: [
          { text: 'REMINDER', style: 'header' },
          { text: new Date().toTimeString(), alignment: 'right' },

          { text: 'From', style: 'subheader' },
          { text: "this.letterObj.from" },

          { text: 'To', style: 'subheader' },
          'this.letterObj.to',

          { text: 'this.letterObj.text', style: 'story', margin: [0, 20, 0, 20] },

          {
            ul: [
              'Bacon',
              'Rips',
              'BBQ',
            ]
          }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
          },
          subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 15, 0, 0]
          },
          story: {
            italic: true,
            alignment: 'center',
            width: '50%',
          }
        }
      }
      this.pdfObj = pdfMake.createPdf(docDefinition);
      this.downloadPdf();
    }

    downloadPdf() {
      if (this.plt.is('cordova')) {
        this.pdfObj.getBuffer((buffer) => {
          var blob = new Blob([buffer], { type: 'application/pdf' });

          // Save the PDF to the data Directory of our App
          this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
            // Open the PDf with the correct OS tools
            this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
          })
        });
      } else {
        // On a browser simply use download!
        this.pdfObj.download();
      }
    }

  }
