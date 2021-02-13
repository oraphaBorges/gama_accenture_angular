import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { DashboardComponent } from './area-logada/dashboard/dashboard.component';
import { LancamentosComponent } from './area-logada/lancamentos/lancamentos.component';
import { PlanosContaComponent } from './area-logada/planos-conta/planos-conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { DiretivasComponent } from './shared/components/diretivas/diretivas.component';
import { ExercicioDataBindingComponent } from './shared/components/exercicio-data-binding/exercicio-data-binding.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PipesComponent } from './shared/components/pipes/pipes.component';


registerLocaleData(localePtBr, 'pt-br')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    DiretivasComponent,
    PipesComponent,
    LoginComponent,
    CadastroComponent,
    LancamentosComponent,
    DashboardComponent,
    PlanosContaComponent,
    Error404Component,
    AreaLogadaComponent,
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
