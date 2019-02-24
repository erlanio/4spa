import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TurmasDetailsPage } from '../turmas-details/turmas-details';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';
/**
 * Generated class for the AddTurmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-turma',
  templateUrl: 'add-turma.html',
})
export class AddTurmaPage {

  public id_escola:any;
  public codTurma:any;
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController) {

    this.id_escola = this.navParams.get('id_escola');
    console.log(this.id_escola);
  }

  salvarTurma(){
    if(this.codTurma == null){
      const alerta = this.alertCtrl.create({
        title: '<p>Ops!</p>',
        subTitle: '<p>Preencha todos os dados para continuar!</p>',
        buttons: ['OK']
      });
      alerta.present();
    }else{
      this.HttpCtrl.get(this.API_URL + 'adicionarTurma?id_escola='+this.id_escola+'&codTurma='+this.codTurma)
      .map(res => res.json())
      .subscribe(data => {
    if(data == true){
      const alerta = this.alertCtrl.create({
        title: '<p>Atenção!</p>',
        subTitle: '<p>Turma cadastra com sucesso!</p>',
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

}
