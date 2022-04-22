import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImagesComponent } from './components/images/images.component';
import { AddImageComponent } from './components/add-image/add-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagesComponent,
    AddImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
