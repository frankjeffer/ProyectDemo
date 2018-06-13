import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { CLO_ROUTING } from './app.routes';

//servicios
import {ClothesService} from './services/clothes.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { ClothesInfoComponent } from './components/clothes-info/clothes-info.component';
import { BuscadorClothesComponent } from './components/buscador-clothes/buscador-clothes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClothesComponent,
    ClothesInfoComponent,
    BuscadorClothesComponent
  ],
  imports: [
    BrowserModule,
    CLO_ROUTING
  ],
  providers: [
    ClothesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
