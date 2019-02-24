import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import 'rxjs';
/**
* Generated class for the GrafcardioPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-grafcardio',
  templateUrl: 'grafcardio.html',
})
export class GrafcardioPage {

  barChartOptions: any = [{
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            fontSize: 10,
            colors: '#fff'
          }
        }
      ]
    }
  }];
  barChartLabels = [];
  barChartType:string = 'pie';
  barChartLegend:boolean = true;
  barChartData:any;
  barChartColors:Array<any> = [
    {
      backgroundColor: '#3F51B5',
      borderColor: '#3F51B5',
      pointBackgroundColor: '#3F51B5',
      pointBorderColor: '#3F51B5',
      pointHoverBackgroundColor: '#3F51B5',
      pointHoverBorderColor: '#3F51B5',
      labels: '#3F51B5'
    }]

    doughnutChartLabels:string[];
    doughnutChartData:number[];
    doughnutChartType:string = 'pie';

    doughnutChartLabelsFem:string[];
    doughnutChartDataFem:number[];
    doughnutChartTypeFem:string = 'pie';

    private API_URL: string = "http://cev.urca.br/treinamento/Api/";
    public sexoMasculoZRS:any;
    public sexoMasculoZS:any;
    public avaliacoes:any;
    public totalMasculino:any;
    public totalMasculinoZS:any;
    public totalMasculinoZRS:any;
    public sexoFemininoZS:any;
    public sexoFemininoZRS:any;
    public totalFemininoZS:any;
    public totalFemininoZRS:any;
    public totalFeminino:any;
    public id_turma:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
      public alertCtrl: AlertController) {

        this.id_turma = this.navParams.get('id_turma');

        this.HttpCtrl.get(this.API_URL + 'GrafOsteoMasc?id_turma='+this.id_turma)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.avaliacoes = data;
          this.sexoMasculoZRS = this.avaliacoes.ZRS;
          this.sexoMasculoZS = this.avaliacoes.ZS;
          this.totalMasculino = this.avaliacoes.totalMasculino;
          this.totalMasculinoZS = this.avaliacoes.totalMasculinoZS;
          this.totalMasculinoZRS = this.avaliacoes.totalMasculinoZRS;
          this.sexoFemininoZRS = this.avaliacoes.ZRSF;
          this.sexoFemininoZS = this.avaliacoes.ZSF;
          this.totalFeminino = this.avaliacoes.totalFeminino;
          this.totalFemininoZS = this.avaliacoes.totalFemininoZS;
          this.totalFemininoZRS = this.avaliacoes.totalFemininoZRS;

        })
      }

      calc(tipo){
        if (tipo === 'Feminino') {
          this.calcBar();
        } else {
          this.calcDoughnut();
        }
      }

      calcBar(){
        this.doughnutChartLabelsFem = [

          'ZRS '+this.sexoFemininoZRS+"%",
            'ZS '+this.sexoFemininoZS+"%",

        ];
        this.doughnutChartDataFem = [this.sexoFemininoZRS,this.sexoFemininoZS];
      }

      calcDoughnut(){
        this.doughnutChartLabels = [

          'ZRS '+this.sexoMasculoZRS+"%",
          'ZS '+this.sexoMasculoZS+"%",

        ];
        this.doughnutChartData = [this.sexoMasculoZRS, this.sexoMasculoZS];
      };
    }
