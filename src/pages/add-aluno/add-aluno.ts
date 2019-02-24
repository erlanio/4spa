import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListarAlunosPage } from '../listar-alunos/listar-alunos';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';
/**
* Generated class for the AddAlunoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-add-aluno',
  templateUrl: 'add-aluno.html',
})
export class AddAlunoPage {
  public id_turma:any;
  public series:any;
  public nome:any;
  public endereco:any;
  public numero:any;
  public email:any;
  public telefone:any;
  public nascimento:any;
  public serie:any;
  public sexo:any;
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController) {

      this.id_turma = this.navParams.get('id_turma');

      this.HttpCtrl.get(this.API_URL + 'series')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data)
        this.series = data;

      })


    }

    salvar(){
      if(this.nome == null || this.serie == null  || this.nascimento == null){
        const alerta = this.alertCtrl.create({
          title: '<p>Atenção!</p>',
          subTitle: '<p>Nome<br>Série<br>Data de Nascimento<br> São campos obrigatórios!</p>',
          buttons: ['OK']
        });
        alerta.present();
      }else{

        this.HttpCtrl.get(this.API_URL + 'salvarAluno?nome='+this.nome
        +'&endereco='+this.endereco
        +'&numero='+this.numero
        +'&email='+this.email
        +'&telefone='+this.telefone
        +'&nascimento='+this.nascimento
        +'&serie='+this.serie
        +'&id_turma='+this.id_turma
        +'&sexo='+this.sexo)
        .map(res => res.json())
        .subscribe(data => {

          if(data == true){

            this.navCtrl.push(ListarAlunosPage,
              {
                'id_turma': this.id_turma,
              });

              const alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Cadastrado com sucesso!</p>',
                buttons: ['OK']
              });
              alerta.present();

            }

          })
        }

      }

    }
