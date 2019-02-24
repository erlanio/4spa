import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaAvaliacoesPage } from '../lista-avaliacoes/lista-avaliacoes';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';
/**
* Generated class for the AvaliacoesPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-avaliacoes',
  templateUrl: 'avaliacoes.html',
})
export class AvaliacoesPage {
  public id_aluno:any;
  public id_escola:any;
  public aluno:any;
  public nome:any;
  public escola:any;
  public codTurma:any;
  public idade:any;
  public dataAtual:any;
  public resultIMC:any;
  public hideMe:any;
  public aptCardiovascular:any;
  public pratEsporte:any;
  public imcIdeal:any;
  public apc:any;
  public flexIdeal:any;
  public flexibilidade:any;
  public abdIdeal:any;
  public abdSN:any;
  public abdominal:any;
  public apcSN:any;
  public imcSN:any;
  public dcardioSN:any;
  public flexSN:any;
  public dOsteo:any;
  public freqSemanal:any;
  public hrDiarias:any;
  public ativo:any;
  public itemAtivo:any;
  public itemSedentario:any;
  public altura:any;
  public cintura:any;
  public ceSN:any;
  public peso:any;
  public imc:any;
  public id_turma:any;


  private API_URL: string = "http://cev.urca.br/treinamento/Api/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
    public alertCtrl: AlertController) {
      this.id_aluno = this.navParams.get('id_aluno');
      this.id_escola = this.navParams.get('id_escola');
      this.id_turma = this.navParams.get('id_turma');
      this.hideMe = false;
      this.itemAtivo = false;
      this.ativo ="n";
      this.itemSedentario= true;
      this.pratEsporte = "n";
      this.HttpCtrl.get(this.API_URL + 'buscarAlunoAval?id_aluno='+this.id_aluno)
      .map(res => res.json())
      .subscribe(data => {
        this.aluno = data;
        console.log(this.aluno);
        this.nome = this.aluno[0]['nome_estudante'];
        this.escola = this.aluno[0]['nome_escola'];
        this.codTurma = this.aluno[0]['cod_turma'];
        this.idade = this.aluno[0]['idade'];
        this.dataAtual = this.aluno[0]['dataAtual'];
        this.aptCardiovascular = this.aluno[0]['aptIdeal'];
        this.imcIdeal = this.aluno[0]['imcIdeal'];
        this.flexIdeal = this.aluno[0]['flexIdeal'];
        this.abdIdeal = this.aluno[0]['abdIdeal'];

      })

    }

    pratEsporteChange(){
      if(this.pratEsporte == 'n'){
        this.hrDiarias = 0;
        this.freqSemanal = 0;
        this.ativo = "n";
        this.hideMe = false;
        this.itemAtivo = false;
        this.itemSedentario = true;
      }else{
        this.hideMe = true;

      }
    }

    isAtivo(){
      if(this.freqSemanal == 2 || this.freqSemanal == 3){
        if(this.hrDiarias == 2 || this.hrDiarias ==3){
          this.ativo = "s"
          this.itemAtivo = true;
          this.itemSedentario = false;
        }else{
          this.itemAtivo = false;
          this.itemSedentario =  true;
          this.ativo = "n";
        }
      }else{
        this.itemAtivo = false;
        this.itemSedentario =  true;
      }

    }

    apcCardio(){

      if(this.apc != null){
        this.apc = this.apc.replace(",", ".");
        var diferenca = this.apc - this.aptCardiovascular;
        if(diferenca < 0){
          this.apcSN = "ZRS";
        }else{
          this.apcSN = "ZS";
        }

        if(this.apcSN == "ZRS" && this.imcSN == "ZRS"){
          this.dcardioSN = "SIM";
        }else{
          this.dcardioSN = "NÃO";
        }
      }
    }

    flex(){
      if(this.flexibilidade != null){
        this.flexibilidade = this.flexibilidade.replace(",", ".");
        var diferencaFlex = this.flexibilidade - this.flexIdeal;

        if(diferencaFlex < 0){
          this.flexSN = "ZRS";
        }else{
          this.flexSN = "ZS";
        }
      }

      if(this.abdominal != null && this.flexibilidade != null){
        if(this.abdSN == "ZRS" && this.flexSN == "ZRS"){
          this.dOsteo = "SIM";
        }else{
          this.dOsteo == "NÃO";
        }
      }
    }


    ceCalc(){
      if(this.altura != null){
        var altura = this.altura.replace(".","");
        altura = altura.replace(",","");
        var cintura = this.cintura.replace(",", ".");
        var resultCintura = cintura / altura;

        console.log(resultCintura);
        if(resultCintura < 0.5){
          this.ceSN = "ZS";

        }else{
          this.ceSN = "ZRS";
        }

      }
    }

    abdominalCh(){
      if(this.abdominal != null){
        this.abdominal = this.abdominal.replace(",", ".");
        var diferencaAbd = this.abdominal - this.abdIdeal;
        if(diferencaAbd < 0){
          this.abdSN = "ZRS";

        }else{
          this.abdSN = "ZS";

        }
      }

      if(this.abdominal != null && this.flexibilidade != null){
        if(this.abdSN == "ZRS" && this.flexSN == "ZRS"){
          this.dOsteo = "SIM";
        }else{
          this.dOsteo = "NÃO";
        }
      }
    }

    imcCalc(){
      var altura = this.altura;
      if(altura != null && this.peso != null){
        altura = altura.replace(",", ".");
        this.resultIMC = this.peso / (altura * altura);
        this.imc = this.resultIMC.toFixed(2);

        if(this.imcIdeal < this.resultIMC){
          this.imcSN = "ZRS";
        }else{
          this.imcSN = "ZS";
        }
      }
    }

    salvarAvaliacao(){

      if(
        this.id_aluno == null ||
        this.idade == null ||
        this.dataAtual == null ||
        this.peso == null ||
        this.altura == null ||
        this.cintura == null ||
        this.pratEsporte == null ||
        this.imc == null ||
        this.imcSN == null ||
        this.apc == null ||
        this.apcSN == null ||
        this.flexibilidade == null ||
        this.flexSN == null ||
        this.abdominal == null ||
        this.abdSN == null ||
        this.dcardioSN == null ||
        this.dOsteo == null ||
        this.ceSN == null
      ){
        const alerta = this.alertCtrl.create({
          title: '<p>Atenção!</p>',
          subTitle: '<p>Preencha todos os dados para continuar!</p>',
          buttons: ['OK']
        });
        alerta.present();

      }else{
        this.enviarAvaliacao();
        const alerta = this.alertCtrl.create({
          title: '<p>Atenção!</p>',
          subTitle: '<p>Avaliação realizada com sucesso!</p>',
          buttons: ['OK']
        });
        alerta.present();
      }


    }

    enviarAvaliacao(){
      this.HttpCtrl.get(this.API_URL + 'salvarAvaliacao?id_aluno='+this.id_aluno
      +'&idade='+this.idade
      +'&dt_avaliacao='+this.dataAtual
      +'&peso='+this.peso
      +'&altura='+this.altura
      +'&cintura='+this.cintura
      +'&prat_exercicios='+this.pratEsporte
      +'&freqSemanal='+this.freqSemanal
      +'&hrDiarias='+this.hrDiarias
      +'&isAtivo='+this.ativo
      +'&imc='+this.imc
      +'&imcSN='+this.imcSN
      +'&apc='+this.apc
      +'&apcSN='+this.apcSN
      +'&flexibilidade='+this.flexibilidade
      +'&flexSN='+this.flexSN
      +'&abdominal='+this.abdominal
      +'&abdSN='+this.abdSN
      +'&dcardioSN='+this.dcardioSN
      +'&dOsteo='+this.dOsteo
      +'&ceSN='+this.ceSN
    )
    .map(res => res.json())
    .subscribe(data => {
      if(data == true){
        this.navCtrl.push(ListaAvaliacoesPage,
          {
            'id_aluno': this.id_aluno,
            'id_escola': this.id_escola,
          });
        }
      })
    }

  }
