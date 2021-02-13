import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExercicioDataBindingComponent } from './exercicio-data-binding/exercicio-data-binding.component';
import { ContadorComponent } from './contador/contador.component';
import { FormsModule } from '@angular/forms';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { PipesComponent } from './pipes/pipes.component';

import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';

registerLocaleData(localePtBr, 'pt-br')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    DiretivasComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-br'
  },{
    provide:DEFAULT_CURRENCY_CODE,
    useValue:'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
