import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InicioPage } from '../pages/inicio/inicio'
import { EscolaInicioPage } from '../pages/escola-inicio/escola-inicio';
import { AddEscolaPage } from '../pages/add-escola/add-escola';
import { EditEscolaPage } from '../pages/edit-escola/edit-escola';
import { TurmasPage } from '../pages/turmas/turmas';
import { TurmasDetailsPage } from '../pages/turmas-details/turmas-details';
import { AddTurmaPage } from '../pages/add-turma/add-turma';
import { EditTurmaPage } from '../pages/edit-turma/edit-turma';
import { ListarAlunosPage } from '../pages/listar-alunos/listar-alunos';
import { AddAlunoPage } from '../pages/add-aluno/add-aluno';
import { EditAlunoPage } from '../pages/edit-aluno/edit-aluno';
import { AvaliacoesPage } from '../pages/avaliacoes/avaliacoes';
import { ListaAvaliacoesPage } from '../pages/lista-avaliacoes/lista-avaliacoes';
import { EditAvaliacaoPage } from '../pages/edit-avaliacao/edit-avaliacao';
import { RelatorioTurmasPage } from '../pages/relatorio-turmas/relatorio-turmas';
import { ValoresAfrsPage } from '../pages/valores-afrs/valores-afrs';
import { ComponentesafrsPage } from '../pages/componentesafrs/componentesafrs';
import { TblzonariscoPage } from '../pages/tblzonarisco/tblzonarisco';
import { TblunificadaPage } from '../pages/tblunificada/tblunificada';
import { GrafcardioPage } from '../pages/grafcardio/grafcardio';
import { GrafosteoPage } from '../pages/grafosteo/grafosteo';
import { ManualPage } from '../pages/manual/manual';
import { PdfViewerPage } from '../pages/pdf-viewer/pdf-viewer';
import { GrafgeralPage } from '../pages/grafgeral/grafgeral';
import { AboutPage } from '../pages/about/about';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileOpener } from '@ionic-native/file-opener';
import { IonicStorageModule } from '@ionic/storage';

import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	InicioPage,
    ListPage,
    InicioPage,
      EscolaInicioPage,
     AddEscolaPage,
      EditEscolaPage,
      TurmasPage,
      TurmasDetailsPage,
      AddTurmaPage,
    EditTurmaPage,
     ListarAlunosPage,
   AddAlunoPage,
EditAlunoPage,
     AvaliacoesPage,
    ListaAvaliacoesPage,
     EditAvaliacaoPage,
   RelatorioTurmasPage,
    ValoresAfrsPage,
  ComponentesafrsPage,
      TblzonariscoPage,
    TblunificadaPage,
  GrafcardioPage,
     GrafosteoPage,
     ManualPage,
     PdfViewerPage,
 GrafgeralPage,
     AboutPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,    
    IonicModule.forRoot(MyApp),
    ChartsModule,
    HttpModule,
    PdfViewerModule,

    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InicioPage,
    EscolaInicioPage,
    AddEscolaPage,
    EditEscolaPage,
    TurmasPage,
    TurmasDetailsPage,
    AddTurmaPage,
    EditTurmaPage,
    ListarAlunosPage,
    AddAlunoPage,
    EditAlunoPage,
    AvaliacoesPage,
    ListaAvaliacoesPage,
    EditAvaliacaoPage,
    RelatorioTurmasPage,
    ValoresAfrsPage,
    ComponentesafrsPage,
    TblzonariscoPage,
    TblunificadaPage,
    GrafcardioPage,
    GrafosteoPage,
    ManualPage,
    PdfViewerPage,
    GrafgeralPage,
    AboutPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    DocumentViewer,
    FileTransfer,
    InAppBrowser,
    FileOpener,
    SocialSharing
  ]
})
export class AppModule {}
