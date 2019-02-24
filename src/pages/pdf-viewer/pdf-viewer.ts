import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { EscolaInicioPage } from '../escola-inicio/escola-inicio';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-pdf-viewer',
  templateUrl: 'pdf-viewer.html',
})
export class PdfViewerPage {

  displayData: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private iab: InAppBrowser
  ) {}

  ionViewDidLoad() {
    console.log(this.navParams);

    this.displayData = this.navParams.get('displayData');
  }

  onClose(): void {
    this.viewCtrl.dismiss();
  }

}
