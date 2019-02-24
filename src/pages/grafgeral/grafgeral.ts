import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs';
import { ChartsModule } from 'ng2-charts';
/**
 * Generated class for the GrafgeralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grafgeral',
  templateUrl: 'grafgeral.html',
})
export class GrafgeralPage {

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
    public totalAvaliacoes:any;
    public ZRSCardio:any;
    public ZRSOsteo:any;
    public totalZRSdCardio:any;
    public totalZRSdOsteo:any;
    public avaliacoes:any;
    public id_turma:any;
    public ZSOsteo:any;
    public ZSCardio:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public HttpCtrl: Http,
      public alertCtrl: AlertController) {

        this.id_turma = this.navParams.get('id_turma');

        this.HttpCtrl.get(this.API_URL + 'GrafGeralCardio?id_turma='+this.id_turma)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.avaliacoes = data;
          this.totalAvaliacoes = this.avaliacoes.totalAvaliacoes;
          this.ZRSCardio = this.avaliacoes.ZRSCardio;
          this.ZRSOsteo = this.avaliacoes.ZRSOsteo;
          this.totalZRSdCardio = this.avaliacoes.totalZRSdCardio;
          this.totalZRSdOsteo = this.avaliacoes.totalZRSdOsteo;
          this.ZSOsteo = this.avaliacoes.ZSOsteo;
          this.ZSCardio = this.avaliacoes.ZSCardio;
        })
      }

      calc(tipo){
        if (tipo === 'cardiometabolica') {
          this.calcBar();
        } else {
          this.calcDoughnut();
        }
      }

      calcBar(){
        this.doughnutChartLabelsFem = [

          'ZRS '+this.ZRSCardio+"%",
            'ZS '+this.ZSCardio+"%",

        ];
        this.doughnutChartDataFem = [this.ZRSCardio, this.ZSCardio];
      }

      calcDoughnut(){
        this.doughnutChartLabels = [

          'ZRS '+this.ZRSOsteo+"%",
            'ZS '+this.ZSOsteo+"%",

        ];
        this.doughnutChartData = [this.ZRSOsteo, this.ZSOsteo];
      };
}
