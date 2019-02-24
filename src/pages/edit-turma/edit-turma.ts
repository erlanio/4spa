import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TurmasDetailsPage } from '../turmas-details/turmas-details';
import { Http } from '@angular/http';
import 'rxjs';
/**
* Generated class for the EditTurmaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-edit-turma',
  templateUrl: 'edit-turma.html',
})
export class EditTurmaPage {
  public id_turma:any;
  public turma:any;
  public codTurma:any;
  public id_escola:any;


  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController) {
      this.id_turma = this.navParams.get('id_turma');

      this.HttpCtrl.get(this.API_URL + 'editTurma?id='+this.id_turma)
      .map(res => res.json())
      .subscribe(data => {
        this.turma = data;
        this.codTurma = this.turma[0]['cod_turma'];
        this.id_escola = this.turma[0]['id_escola'];
      })

    }

    salvarTurmaEdicao(){
      this.HttpCtrl.get(this.API_URL + 'salvarEditTurma?id_turma='+this.id_turma+'&codTurma='+this.codTurma+'&id_escola='+this.id_escola)
      .map(res => res.json())
      .subscribe(data => {
        if(data == true){
          const alerta = this.alertCtrl.create({
            title: '<p>Atenção!</p>',
            subTitle: '<p>Turma alterada com sucesso!</p>',
            buttons: ['OK']
          });
          alerta.present();

          this.navCtrl.push(TurmasDetailsPage,
            {
                'id_escola': this.id_escola,
            });

        }else{
          const alerta = this.alertCtrl.create({
            title: '<p>Ops!</p>',
            subTitle: '<p>'+data+'</p>',
            buttons: ['OK']
          });
          alerta.present();
        }
      })
    }


  }
