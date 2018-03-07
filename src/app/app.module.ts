import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {IntroComponent} from "./intro/intro.component";
import {ContactComponent} from "./contact/contact.component";
import {FeaturesComponent} from "./features/features.component";
import {TeamComponent} from "./team/team.component";
import {AppRoutingModule} from "./app.routing.module";
import {FormsModule} from "@angular/forms";
import {AlbumComponent} from "./album/album.component";
import {MainComponent} from "./main/main.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    ContactComponent,
    FeaturesComponent,
    TeamComponent,
    AlbumComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
