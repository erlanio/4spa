import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';

/**
* Generated class for the ValoresAfrsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-valores-afrs',
  templateUrl: 'valores-afrs.html',
})
export class ValoresAfrsPage {

  public id_turma:any;
  public avaliacoes:any;
  public escola:any;
  public codTurma:any;
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  pdfObj = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController) {

      this.id_turma = this.navParams.get('id_turma');

      this.HttpCtrl.get(this.API_URL + 'valoresAFRS?id_turma='+this.id_turma)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        if(data != ""){
          this.avaliacoes = data;
          this.escola = this.avaliacoes[0].nome_escola;
          this.codTurma = this.avaliacoes[0].cod_turma;
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
