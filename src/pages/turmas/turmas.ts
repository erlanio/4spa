import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TurmasDetailsPage } from '../turmas-details/turmas-details';
import { Http } from '@angular/http';
import 'rxjs';
/**
 * Generated class for the TurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turmas',
  templateUrl: 'turmas.html',
})
export class TurmasPage {
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  public escolas: any;
  public searchEscola: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,   public HttpCtrl: Http,
    public alertCtrl: AlertController) {

      this.HttpCtrl.get(this.API_URL + 'escolas')
      .map(res => res.json())
      .subscribe(data => {
        this.escolas = data;
      })

  }

  updateList(){
    this.HttpCtrl.get(this.API_URL + 'escolaBuscar?query=' + this.searchEscola)
    .map(res => res.json())
    .subscribe(data => {
      this.escolas = data;

    })
  }

  allList(){
    this.HttpCtrl.get(this.API_URL + 'escolas')
    .map(res => res.json())
    .subscribe(data => {
      this.escolas = data;
    })
  }

  buscarTurmas(id){
    this.navCtrl.push(TurmasDetailsPage,
      {
          'id_escola': id,
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurmasPage');
  }

}
