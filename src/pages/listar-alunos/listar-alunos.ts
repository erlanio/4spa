import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddAlunoPage } from '../add-aluno/add-aluno';
import { EditAlunoPage } from '../edit-aluno/edit-aluno';
import { AvaliacoesPage } from '../avaliacoes/avaliacoes';
import { ListaAvaliacoesPage } from '../lista-avaliacoes/lista-avaliacoes';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';
/**
* Generated class for the ListarAlunosPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-listar-alunos',
  templateUrl: 'listar-alunos.html',
})
export class ListarAlunosPage {
  public id_turma:any;
  public id_escola:any;
  public alunos:any;
  public searchAluno:any;
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController) {
    this.id_turma = this.navParams.get('id_turma');
    this.id_escola = this.navParams.get('id_escola');


    this.HttpCtrl.get(this.API_URL + 'listaAlunos?id_turma='+this.id_turma)
    .map(res => res.json())
    .subscribe(data => {
      this.alunos = data;
    })

  }

  addAluno(){
    this.navCtrl.push(AddAlunoPage,
      {
        'id_turma': this.id_turma,
       });
    }

    deletarAluno(id){
      let alerta = this.alertCtrl.create({
        title: 'Deletar?',
        message: '<p>Deseja realmente deletar este ítem?<br>Todas as avalações também serão deletadas</p>',
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

              this.HttpCtrl.get(this.API_URL + 'deletarAluno?id='+id)
              .map(res => res.json())
              .subscribe(data => {
                if(data == true){
                  this.HttpCtrl.get(this.API_URL + 'listaAlunos?id_turma='+this.id_turma)
                  .map(res => res.json())
                  .subscribe(data => {
                    console.log(data)
                    this.alunos = data;
                  })
                }
              })

            }
          }
        ]
      });
      alerta.present();
    }

    updateList(){
      this.HttpCtrl.get(this.API_URL + 'searchAluno?query=' + this.searchAluno+'&id_turma='+this.id_turma)
      .map(res => res.json())
      .subscribe(data => {
      this.alunos = data;

      })
    }

    editarAluno(id){
      this.navCtrl.push(EditAlunoPage,
        {
          'id_aluno': id,
          'id_escola': this.id_escola,
         });
    }

    avaliacoes(id){
      this.navCtrl.push(ListaAvaliacoesPage,
        {
          'id_aluno': id,
          'id_escola': this.id_escola,
          'id_turma': this.id_turma,
         });
         
    }


}
