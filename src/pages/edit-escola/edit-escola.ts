import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EscolaInicioPage } from '../escola-inicio/escola-inicio';
import { Http } from '@angular/http';
import 'rxjs';
/**
* Generated class for the EditEscolaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-edit-escola',
  templateUrl: 'edit-escola.html',
})
export class EditEscolaPage {

  public id_escola:any;
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  public escola:any;
  public est:any;
  public tipoEscolas:any;
  public estados:any;
  public nomeEscola:any;
  public telefone:any;
  public tipo:any;
  public estado:any;
  public bairro:any;
  public rua:any;
  public numero:any;
  public email:any;
  public cidade:any;
  public cidades:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public HttpCtrl: Http,
    public alertCtrl: AlertController) {

      //RECEBE O PARÂMETRO DA OUTRA TELA
      this.id_escola = this.navParams.get('id_escola');

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

      //FAZER REQUISIÇÃO NA API
      this.HttpCtrl.get(this.API_URL + 'retornaEscolaEdit?id_escola='+this.id_escola)
      .map(res => res.json())
      .subscribe(data => {
        this.escola = data;

        if(data != null){
          this.nomeEscola = this.escola[0]['nome_escola'];
          this.telefone = this.escola[0]['telefone_escola'];
          this.tipo = this.escola[0]['tipo_escola'];
          this.estado = this.escola[0]['id_estado'];
          this.bairro = this.escola[0]['bairro_escola'];
          this.rua = this.escola[0]['rua_escola'];
          this.numero = this.escola[0]['numero_escola'];
          this.email = this.escola[0]['email_escola'];
          this.est = this.estado;

          this.HttpCtrl.get(this.API_URL + 'cidades?id_estado='+this.est)
          .map(res => res.json())
          .subscribe(data => {
            this.cidades = data;
          })

          this.cidade = this.escola[0]['id_cidade'];
        }
      })
    }

    cidadeBuscar(){
      this.HttpCtrl.get(this.API_URL + 'cidades?id_estado='+this.estado)
      .map(res => res.json())
      .subscribe(data => {
        this.cidades = data;
      })
    }

    salvarEdicaoEscola(){

      if(this.estado == null
        || this.cidade ==null
        || this.tipo == null
        || this.nomeEscola == null){

          const alerta = this.alertCtrl.create({
            title: '<p>Ops!</p>',
            subTitle: '<p>Preencha todos os dados para continuar!</p>',
            buttons: ['OK']
          });
          alerta.present();
        }else{

          this.HttpCtrl.get(
            this.API_URL + 'salvarEscolaEdicao?estado='+this.estado
            +'&cidade='+this.cidade
            +'&tipo='+this.tipo
            +'&nomeEscola='+this.nomeEscola
            +'&bairro='+this.bairro
            +'&numero='+this.numero
            +'&email='+this.email
            +'&rua='+this.rua
            +'&telefone='+this.telefone
            +'&id_escola='+this.id_escola)
            .map(res => res.json())
            .subscribe(data => {
              if(data == true){
                const alerta = this.alertCtrl.create({
                  title: '<p>Atenção!</p>',
                  subTitle: '<p>Dados alterados com sucesso!</p>',
                  buttons: ['OK']
                });
                alerta.present();
              }else{
                const alerta = this.alertCtrl.create({
                  title: '<p>Atenção!</p>',
                  subTitle: '<p>Erro ao tentar salvar, tente novamente!</p>',
                  buttons: ['OK']
                });
                alerta.present();
              }
              this.navCtrl.push(EscolaInicioPage,
                {  });
              })
            }
          }
        }
