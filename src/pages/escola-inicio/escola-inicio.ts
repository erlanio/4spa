import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { AddEscolaPage } from '../add-escola/add-escola';
import { EditEscolaPage } from '../edit-escola/edit-escola';
import { TurmasDetailsPage } from '../turmas-details/turmas-details';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';
/**
* Generated class for the EscolaInicioPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-escola-inicio',
  templateUrl: 'escola-inicio.html',
})
export class EscolaInicioPage {
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  public escolas: any;
  public searchEscola: any;
  public id_usuario:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public HttpCtrl: Http,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController

  ) {

    this.id_usuario = this.navParams.get('id_usuario');
    
    this.menuCtrl.enable(true, 'myMenu');

    this.HttpCtrl.get(this.API_URL + 'escolas?id_usuario='+this.id_usuario)
    .map(res => res.json())
    .subscribe(data => {
      this.escolas = data;
    })

  }

  updateList(){
    this.HttpCtrl.get(this.API_URL + 'escolaBuscar?query=' + this.searchEscola+'&id_usuario='+this.id_usuario)
    .map(res => res.json())
    .subscribe(data => {
      this.escolas = data;

    })
  }

  allList(){
    this.HttpCtrl.get(this.API_URL + 'escolas?id_usuario='+this.id_usuario)
    .map(res => res.json())
    .subscribe(data => {
      this.escolas = data;
    })
  }

  addEscola(){
    this.navCtrl.push(AddEscolaPage,
      {
          'id_usuario': this.id_usuario,
      });
    }

    press(id){

      let alert = this.alertCtrl.create({
        title: 'Deletar?',
        message: 'Deseja realmente deletar este ítem?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {

            }
          },
          {
            text: 'Deletar',
            handler: () => {

              this.HttpCtrl.get(this.API_URL + 'deletarEscola?id='+id)
              .map(res => res.json())
              .subscribe(data => {
                if(data == true){
                this.HttpCtrl.get(this.API_URL + 'escolas?id_usuario='+this.id_usuario)
                  .map(res => res.json())
                  .subscribe(data => {
                    this.escolas = data;
                  })
                }
              })

            }
          }
        ]
      });
      alert.present();

    }

    editEscola(id){
      this.navCtrl.push(EditEscolaPage,
        {
          'id_escola': id,

        });
      }

      buscarTurmas(id){
        console.log(id);
        this.navCtrl.push(TurmasDetailsPage,
          {
            'id_escola': id,
          });
        }

      }
