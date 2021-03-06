import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, routes } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        MatSelectModule, //
        MatTooltipModule,
        MatProgressBarModule } from '@angular/material';

import { APP_PROVIDERS } from './app.providers';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { GitHubCardComponent } from "./git-hub-card/git-hub-card.component";
import {SelectOverviewExample} from './simple-selector/select-overview-example';//
import { SearchUserComponent } from './search-user/search-user.component';
import { PasivoComponent } from './pasivo/pasivo.component';
import { ReactivoComponent } from './reactivo/reactivo.component'; 
import { UsuarioComponent } from './usuario/usuario.component';
//import { Router } from '@angular/router'; //


export const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatSelectModule,
  MatTooltipModule//
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    GitHubCardComponent,
    SelectOverviewExample,//
    SearchUserComponent, 
    PasivoComponent,
    ReactivoComponent, 
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [SelectOverviewExample],//

  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})

///
@NgModule({
  exports: [
    MatSelectModule
  ]
})

//
export class AppModule { }
