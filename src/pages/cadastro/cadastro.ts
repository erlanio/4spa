import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public nome: any;
  public email: any;
  public senha: any;
  public repeteSenha: any;

  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  salvar() {
    if (this.senha == this.repeteSenha) {
      if (this.nome == null || this.email == null || this.senha == null) {
        const alerta = this.alertCtrl.create({
          title: '<p>Atenção!</p>',
          subTitle: '<p>Todos os campos são obrigatórios!</p>',
          buttons: ['OK']
        });
        alerta.present();
      } else {
        this.HttpCtrl.get(this.API_URL + 'salvarCadastro?nome=' + this.nome
          + '&email=' + this.email
          + '&senha=' + this.senha)
          .map(res => res.json())
          .subscribe(data => {

            const alerta = this.alertCtrl.create({
              title: '<p>Atenção!</p>',
              subTitle: '<p>' + data + '</p>',
              buttons: ['OK']
            });
            alerta.present();

            if (data == "Usuário cadastrado com Sucesso!") {
              this.navCtrl.push(HomePage,
                {

                });

            }

          }) //FIM subscribe


      }
    }else{
      const alerta = this.alertCtrl.create({
        title: '<p>Atenção!</p>',
        subTitle: '<p>Senhas não conferem!</p>',
        buttons: ['OK']
      });
      alerta.present();
    }

  }
}
