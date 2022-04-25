import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImagesComponent } from './components/images/images.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { RemoveImageComponent } from './components/remove-image/remove-image.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagesComponent,
    AddImageComponent,
    RemoveImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
