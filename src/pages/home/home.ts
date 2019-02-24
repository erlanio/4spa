import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { AddEscolaPage } from '../add-escola/add-escola';
import { EscolaInicioPage } from '../escola-inicio/escola-inicio';
import { CadastroPage } from '../cadastro/cadastro';
import { TurmasPage } from '../turmas/turmas';
import { Http } from '@angular/http';
import 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email:any;
  public senha:any;
  public id_usuario:any;
  public logado:any;
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";

  public login: any;
  constructor(
    public navCtrl: NavController,
    public HttpCtrl: Http,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public navParams: NavParams,
    platform: Platform, private storage: Storage
  ) {
    this.menuCtrl.enable(false, 'myMenu');

    storage.get('logado').then((loger) => {
      if(loger != null){

        storage.get('id_usuario').then((val) => {
          this.navCtrl.push(InicioPage,
            {
              'id_usuario': val,
            });

          });

        }

      });

    }

    logar(){
      if(this.email == null || this.senha == null){
        const alerta = this.alertCtrl.create({
          title: '<p>Ops!</p>',
          subTitle: '<p>Preencha todos os dados para continuar!</p>',
          buttons: ['OK']
        });
        alerta.present();
      }else{
        this.HttpCtrl.get(this.API_URL + 'login?senha='+this.senha+'&email='+this.email)
        .map(res => res.json())
        .subscribe(data => {
          if(data != 0){
            this.login = data;
            this.logado = this.login.logado;
            this.id_usuario = this.login.id_usuario;
          }else{
            this.logado = false;
          }


        })

        if(this.logado == false){
          const alerta = this.alertCtrl.create({
            title: '<p>Ops!</p>',
            subTitle: '<p>Dados incorretos, tente novamente!</p>',
            buttons: ['OK']
          });
          alerta.present();
        }else if (this.logado == true && this.id_usuario != null){
          this.navCtrl.push(InicioPage,
            {
              'id_usuario': this.id_usuario,
            });

          }
        }

      }

      turmas(){
        this.navCtrl.push(TurmasPage,
          {});
        }

        cadastro(){
          this.navCtrl.push(CadastroPage,
            {});
          }
        }
