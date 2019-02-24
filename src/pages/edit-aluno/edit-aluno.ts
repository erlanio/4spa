import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListarAlunosPage } from '../listar-alunos/listar-alunos';
import { Http } from '@angular/http';
import 'rxjs';
/**
* Generated class for the EditAlunoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-edit-aluno',
  templateUrl: 'edit-aluno.html',
})
export class EditAlunoPage {
  public id_aluno:any;
  public aluno:any;
  public nome:any;
  public sexo:any;
  public endereco:any;
  public numero:any;
  public email:any;
  public telefone:any;
  public series:any;
  public serie:any;
  public nascimento:any;
  public id_turma:any;
  public id_escola:any;
  public turmas:any;
  public turma:any;

  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(public navCtrl: NavController, public navParams: NavParams,  public HttpCtrl: Http,
    public alertCtrl: AlertController) {
      this.id_aluno = this.navParams.get('id_aluno');
      this.id_escola = this.navParams.get('id_escola');

      this.HttpCtrl.get(this.API_URL + 'turmas?id_escola='+this.id_escola)
      .map(res => res.json())
      .subscribe(data => {
        this.turmas = data;
      })

      this.HttpCtrl.get(this.API_URL + 'series')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data)
        this.series = data;
      })

      this.HttpCtrl.get(this.API_URL + 'editAluno?id_aluno='+this.id_aluno)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data)
        this.aluno = data;

        this.nome = this.aluno[0]['nome_estudante'];
        this.sexo = this.aluno[0]['sexo_estudante'];
        this.endereco = this.aluno[0]['endereco_estudante'];
        this.numero = this.aluno[0]['numero_estudante'];
        this.email = this.aluno[0]['email_estudante'];
        this.telefone = this.aluno[0]['telefone_estudante'];
        this.nascimento = this.aluno[0]['dt_nascimento'];
        this.serie = this.aluno[0]['serie_estudante'];
        this.turma = this.aluno[0]['id_turma'];
        this.id_turma = this.aluno[0]['id_turma'];
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

        this.HttpCtrl.get(this.API_URL + 'editAlunoSalvar?nome='+this.nome
        +'&endereco='+this.endereco
        +'&numero='+this.numero
        +'&email='+this.email
        +'&telefone='+this.telefone
        +'&nascimento='+this.nascimento
        +'&serie='+this.serie
        +'&id_turma='+this.id_turma
        +'&sexo='+this.sexo
        +'&id_aluno='+this.id_aluno
        +'&id_turma='+this.turma)
        .map(res => res.json())
        .subscribe(data => {

          if(data == true){


              const alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Alterado com sucesso!</p>',
                buttons: ['OK']
              });
              alerta.present();

              this.navCtrl.push(ListarAlunosPage,
                {
                  'id_turma': this.id_turma,
                  'id_escola': this.id_escola
                });

            }

          })
        }

      }


    }
