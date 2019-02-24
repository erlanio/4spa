import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { EscolaInicioPage} from '../escola-inicio/escola-inicio';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';
/**
* Generated class for the AddEscolaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-add-escola',
  templateUrl: 'add-escola.html',
})
export class AddEscolaPage {
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  public tipoEscolas:any;
  public estados:any;
  public cidades:any;
  public estado:any;
  public cidade:any;
  public bairro:any;
  public numero:any;
  public email:any;
  public rua:any;
  public tipo:any;
  public nomeEscola:any;
  public id_usuario:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http, public alertCtrl: AlertController) {

    this.id_usuario = this.navParams.get('id_usuario');

    this.HttpCtrl.get(this.API_URL + 'tipoEscolas')
    .map(res => res.json())
    .subscribe(data => {
      this.tipoEscolas = data;
    })

    this.HttpCtrl.get(this.API_URL + 'estados')
    .map(res => res.json())
    .subscribe(data => {
      this.estados = data;

    })

  }

  cidadeBuscar(){
    this.HttpCtrl.get(this.API_URL + 'cidades?id_estado='+this.estado)
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
      console.log(data);
      this.cidades = data;
    })
  }

  salvar(){
    if(this.estado == null
      || this.cidade ==null
      || this.tipo == null
      || this.nomeEscola == null
    ){

        const alerta = this.alertCtrl.create({
          title: '<p>Ops!</p>',
          subTitle: '<p>Preencha todos os dados para continuar!</p>',
          buttons: ['OK']
        });
        alerta.present();
      }else{
        this.HttpCtrl.get(
          this.API_URL + 'salvarEscola?estado='+this.estado
          +'&cidade='+this.cidade
          +'&tipo='+this.tipo
          +'&nomeEscola='+this.nomeEscola
          +'&bairro='+this.bairro
          +'&numero='+this.numero
          +'&email='+this.email
          +'&rua='+this.rua
          +'&id_usuario='+this.id_usuario)
          .map(res => res.json())
          .subscribe(data => {

            if(data != true){
              const alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Ocorreu um erro ao tentar salvar, tente novamente!</p>',
                buttons: ['OK']
              });


            }else{
              this.navCtrl.push(EscolaInicioPage,
                {
                    'id_usuario': this.id_usuario,
                 });
              }

            })
          }
        }
        ionViewDidLoad() {
          console.log('ionViewDidLoad AddEscolaPage');
        }

      }
