import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AvaliacoesPage } from '../avaliacoes/avaliacoes';
import { EditAvaliacaoPage } from '../edit-avaliacao/edit-avaliacao';
import { ListarAlunosPage } from '../listar-alunos/listar-alunos';
import { Http } from '@angular/http';
import 'rxjs';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { ActionSheetController } from 'ionic-angular'
import { SocialSharing } from '@ionic-native/social-sharing';
/**
* Generated class for the ListaAvaliacoesPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-lista-avaliacoes',
  templateUrl: 'lista-avaliacoes.html',
})
export class ListaAvaliacoesPage {
  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  public avaliacoes:any;
  public nome: any;
  public id_aluno:any;
  public id_escola:any;
  public escola:any;
  public cod_turma:any;
  public aluno:any;
  public id_turma:any;
  public pdfObj:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController, private plt: Platform, private file: File, private fileOpener: FileOpener,
    private socialSharing: SocialSharing,
    public actionSheetCtrl: ActionSheetController
  ) {

    this.id_aluno = this.navParams.get('id_aluno');
    this.id_escola = this.navParams.get('id_escola');
    this.id_turma = this.navParams.get('id_turma');

    this.buscarAluno(this.id_aluno);
  }

  buscarAluno(id_aluno){
    this.HttpCtrl.get(this.API_URL + 'buscarAlunoAval?id_aluno='+this.id_aluno)
    .map(res => res.json())
    .subscribe(data => {
      if(data == 1){
        this.navCtrl.push(ListarAlunosPage,
          {
            'id_turma':this.id_turma,
            'id_escola': this.id_escola,

          });

          const alerta = this.alertCtrl.create({
            title: '<p>Atenção!</p>',
            subTitle: '<p>Este estudante tem uma idade diferente da que a tabela pode abranger!</p>',
            buttons: ['OK']
          });
          alerta.present();
        }else{
          this.aluno = data;

          this.nome = this.aluno[0]['nome_estudante'];
          this.escola = this.aluno[0]['nome_escola'];
          this.cod_turma = this.aluno[0]['cod_turma'];
          this.buscarAvaliacoes(this.id_aluno);
        }


      });
    }

    share(id){
      var dataAvaliacao;
      var peso;
      var ativo;
      var freqSemana;
      var hr_diarias;
      this.HttpCtrl.get(this.API_URL + 'buscarAvaliacaoEdit?id_avaliacao='+id)
      .map(res => res.json())
      .subscribe(data => {
        dataAvaliacao = data[0].dt_avaliacao;
        peso = data[0].peso_avaliacao;

        if(data[0].freq_semana == 1){
          freqSemana = "1 a 2 dias";
        }else if(data[0].freq_semana == 2){
          freqSemana = "3 a 4 dias";
        }else if(data[0].freq_semana == 3){
          freqSemana = "acima de 4 dias";
        }else{
          freqSemana = "0";
        }

        if(data[0].hr_diarias == 1){
          hr_diarias = "menos de 1 hora";
        }else if(data[0].hr_diarias == 2){
          hr_diarias = "de 1 a 2 horas";
        }else if(data[0].hr_diarias == 3){
          hr_diarias = "mais de 2 horas";
        }else{
          hr_diarias = "0";
        }

        if(data[0].isAtivo == "s"){
          ativo = "ATIVO";
        }else{
          ativo = "SEDENTÁRIO";
        }

        var msg  = "AVALIAÇÃO - \n" + this.nome +" - " + this.escola + " - " + this.cod_turma +
        "\n - NOME: "+ this.nome +
        '\n - Idade: ' +  data[0].idade +
        '\n - Data Avaliação: ' + dataAvaliacao +
        '\n - Peso: ' +  data[0].peso_avaliacao +
        '\n - Estatura: ' + data[0].altura_avaliacao +
        '\n - Cintura: ' + data[0].cintura_avaliacao +
        '\n - Cintura/Estatura: ' +  data[0].cinturaEstatus_status +
        '\n - Ativo/Sedentário: ' +  ativo +
        '\n - Frequência Semanal: ' + freqSemana +
        '\n - Horas diárias: ' + hr_diarias +
        '\n - IMC: ' +  data[0].imc_avaliacao + ' - '+ data[0].imc_status+
        '\n - Aptidão Cardiorespiratória: ' +  data[0].aptCardio + ' - '+ data[0].aptCardio_status+
        '\n - Flexibilidade: ' +  data[0].flex_avaliacao + ' - '+ data[0].flex_status+
        '\n - Resistência Abdominal: ' +  data[0].resAbd_avaliacao + ' - '+ data[0].resAbd_status+
        '\n - Risco de Doenças Cardiomentabólicas: ' +  data[0].dCardiometabolica+
        '\n - Risco de Doenças Osteomusculares: ' +  data[0].dOsteomusculares+
        '\n - Risco de Doenças Osteomusculares: ' +  data[0].dOsteomusculares;
        this.socialSharing.share(msg, "www/assets/imgs/4spa-logo.png", null);
      })
    }




    buscarAvaliacoes(id_aluno){
      this.HttpCtrl.get(this.API_URL + 'buscaAvaliacao?id_aluno='+this.id_aluno)
      .map(res => res.json())
      .subscribe(data => {
        this.avaliacoes = data;

      });
    }

    novaAvaliacao(){
      this.navCtrl.push(AvaliacoesPage,
        {
          'id_aluno': this.id_aluno,
          'id_escola': this.id_escola,
        });
      }

      editarAvaliacao(id){

        this.navCtrl.push(EditAvaliacaoPage,
          {
            'id_avaliacao': id,
            'id_aluno': this.id_aluno,
            'id_escola': this.id_escola,
          });
        }

        deletarAvaliacao(id){


          let alerta = this.alertCtrl.create({
            title: 'Deletar?',
            message: '<p>Deseja realmente deletar este ítem?<br><strong>Uma vez deletada a avaliação não poderá ser recuperada!</strong></p>',
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

                  this.HttpCtrl.get(this.API_URL + 'deletarAvaliacao?id_avaliacao='+id)
                  .map(res => res.json())
                  .subscribe(data => {
                    if(data == true){
                      this.buscarAvaliacoes(this.id_aluno);
                    }
                  })

                }
              }
            ]
          });
          alerta.present();

        }



        createPdf(id_avaliacao) {
          var dataAvaliacao;
          var peso;
          var ativo;
          var freqSemana;
          var hr_diarias;
          this.HttpCtrl.get(this.API_URL + 'buscarAvaliacaoEdit?id_avaliacao='+id_avaliacao)
          .map(res => res.json())
          .subscribe(data => {
            console.log(data);
            dataAvaliacao = data[0].dt_avaliacao;
            peso = data[0].peso_avaliacao;

            if(data[0].freq_semana == 1){
              freqSemana = "1 a 2 dias";
            }else if(data[0].freq_semana == 2){
              freqSemana = "3 a 4 dias";
            }else if(data[0].freq_semana == 3){
              freqSemana = "acima de 4 dias";
            }else{
              freqSemana = "0";
            }

            if(data[0].hr_diarias == 1){
              hr_diarias = "menos de 1 hora";
            }else if(data[0].hr_diarias == 2){
              hr_diarias = "de 1 a 2 horas";
            }else if(data[0].hr_diarias == 3){
              hr_diarias = "mais de 2 horas";
            }else{
              hr_diarias = "0";
            }

            if(data[0].isAtivo == "s"){
              ativo = "ATIVO";
            }else{
              ativo = "SEDENTÁRIO";
            }


            var docDefinition = {
              content: [
                { text: this.nome +' - ' + this.escola +' - ' + this.cod_turma, style: 'header' },
                { text: new Date().toTimeString(), alignment: 'right' },

                { text:
                  'Idade: ' +  data[0].idade +
                  ' - Data Avaliação: ' + dataAvaliacao
                  ,style: 'subheader'},

                  { text:
                    'Peso: ' +  data[0].peso_avaliacao +
                    ' - Estatura: ' + data[0].altura_avaliacao +
                    ' - Cintura: ' + data[0].cintura_avaliacao
                    ,style: 'subheader'},

                    { text:
                      'Cintura/Estatura: ' +  data[0].cinturaEstatus_status
                      ,style: 'subheader'},


                      { text:
                        'Ativo/Sedentário: ' +  ativo
                        ,style: 'subheader'},

                        {text:
                          '      Frequência Semanal: ' + freqSemana
                        },

                        {text:
                          '      Horas diárias: ' + hr_diarias
                        },

                        { text:
                          'IMC: ' +  data[0].imc_avaliacao + ' - '+ data[0].imc_status
                          ,style: 'subheader'},

                          { text:
                            'Aptidão Cardiorespiratória: ' +  data[0].aptCardio + ' - '+ data[0].aptCardio_status
                            ,style: 'subheader'},

                            { text:
                              'Flexibilidade: ' +  data[0].flex_avaliacao + ' - '+ data[0].flex_status
                              ,style: 'subheader'},

                              { text:
                                'Resistência Abdominal: ' +  data[0].resAbd_avaliacao + ' - '+ data[0].resAbd_status
                                ,style: 'subheader'},

                                { text:
                                  'Risco de Doenças Cardiomentabólicas: ' +  data[0].dCardiometabolica
                                  ,style: 'subheader'},

                                  { text:
                                    'Risco de Doenças Osteomusculares: ' +  data[0].dOsteomusculares
                                    ,style: 'subheader'},

                                  ],
                                  styles: {
                                    header: {
                                      fontSize: 14,
                                      bold: true,
                                    },
                                    subheader: {
                                      fontSize: 14,
                                      bold: false,
                                      margin: [0, 15, 0, 0]
                                    },
                                    story: {
                                      italic: true,
                                      alignment: 'center',
                                      width: '50%',
                                    }
                                  }
                                }
                                this.pdfObj = pdfMake.createPdf(docDefinition);
                                this.downloadPdf();


                              })



                            }

                            downloadPdf() {
                              if (this.plt.is('cordova')) {
                                this.pdfObj.getBuffer((buffer) => {
                                  var blob = new Blob([buffer], { type: 'application/pdf' });

                                  // Save the PDF to the data Directory of our App
                                  this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
                                    // Open the PDf with the correct OS tools
                                    this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
                                  })
                                });
                              } else {
                                // On a browser simply use download!
                                this.pdfObj.download();
                              }
                            }

                          }
