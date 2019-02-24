import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AddTurmaPage } from '../add-turma/add-turma';
import { EditTurmaPage } from '../edit-turma/edit-turma';
import { ListarAlunosPage } from '../listar-alunos/listar-alunos';
import { RelatorioTurmasPage } from '../relatorio-turmas/relatorio-turmas';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';
/**
* Generated class for the TurmasDetailsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-turmas-details',
  templateUrl: 'turmas-details.html',
})
export class TurmasDetailsPage {
  public id_escola:any;
  public turmas:any;
  public searchTurma:any;
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController) {
      //RECEBE O PARÂMETRO DA OUTRA TELA
      this.id_escola = this.navParams.get('id_escola');

      this.HttpCtrl.get(this.API_URL + 'turmas?id_escola='+this.id_escola)
      .map(res => res.json())
      .subscribe(data => {
        this.turmas = data;
      })

    }

    addTurma(){
      this.navCtrl.push(AddTurmaPage,
        {
          'id_escola': this.id_escola,
        });
      }

      deletarTurma(id){


        let alert = this.alertCtrl.create({
          title: 'Deletar?',
          message: 'Deseja realmente deletar esta turma?',
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

                this.HttpCtrl.get(this.API_URL + 'deletarTurma?id='+id)
                .map(res => res.json())
                .subscribe(data => {
                  if(data == true){

                    this.HttpCtrl.get(this.API_URL + 'turmas?id_escola='+this.id_escola)
                    .map(res => res.json())
                    .subscribe(data => {
                      this.turmas = data;
                    })

                  }
                })

              }
            }
          ]
        });
        alert.present();
      }

      editarTurma(id){
        this.navCtrl.push(EditTurmaPage,
          {
            'id_turma': id,
          });
        }

        relatorioTurma(id){
          this.navCtrl.push(RelatorioTurmasPage,
            {
              'id_turma': id,
            });
        }

        listarAlunosTurma(id){
          this.navCtrl.push(ListarAlunosPage,
            {
              'id_turma': id,
              'id_escola': this.id_escola,

            });
          }


        updateList(){
          this.HttpCtrl.get(this.API_URL + 'searchTurma?query=' + this.searchTurma+'&id_escola='+this.id_escola)
          .map(res => res.json())
          .subscribe(data => {
            console.log(data);
            this.turmas = data;

          })
        }


      }
