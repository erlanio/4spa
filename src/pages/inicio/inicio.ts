import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EscolaInicioPage } from '../escola-inicio/escola-inicio';
import { AboutPage } from '../about/about';
import { TurmasPage } from '../turmas/turmas';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
/**
* Generated class for the InicioPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  public id_usuario:any;
  public platform:any;
  constructor(public navCtrl: NavController, platform: Platform, private storage: Storage, public navParams: NavParams, private iab: InAppBrowser, public menuCtrl: MenuController)
  {
    this.platform = platform;
    this.id_usuario = this.navParams.get('id_usuario');
    this.menuCtrl.enable(false, 'myMenu');

    if(this.id_usuario != undefined){
      storage.set('id_usuario', this.id_usuario);
      storage.set('logado', true);
    }else{
      storage.get('id_usuario').then((val) => {
        this.id_usuario = val;
      })
    }
  }

  escola(){
    this.navCtrl.push(EscolaInicioPage,
      {
        'id_usuario' : this.id_usuario,
      });
    }

    avaliacoes(){
      this.navCtrl.push(EscolaInicioPage,
        {
          'id_usuario' : this.id_usuario,
        });

      }

      turmas(){
        this.navCtrl.push(TurmasPage,
          {});
        }

        sair(){
          this.storage.remove('id_usuario');
          this.storage.remove('logado');
          this.platform.exitApp();
        }

        about(){
          this.navCtrl.push(AboutPage,
            {});
          }


          onOpenPDF(): void {
            let URL = encodeURIComponent('http://cev.urca.br/treinamento/assets/pdf/manual.pdf');
            this.iab.create('https://docs.google.com/viewer?url=' + URL);
          }



        }
