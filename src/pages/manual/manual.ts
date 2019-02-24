import { Component } from '@angular/core';
import { Modal, ModalController, NavController } from 'ionic-angular';
import { PdfViewerPage } from './../pdf-viewer/pdf-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
* Generated class for the ManualPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {
  constructor(
   public modalCtrl: ModalController,
   public navCtrl: NavController,
   private iab: InAppBrowser
 ) {
  
  }

     onOpenPDF(): void {
      let URL = encodeURIComponent('http://cev.urca.br/treinamento/assets/pdf/manual.pdf');
      this.iab.create('https://docs.google.com/viewer?url=' + URL);
     }

}
