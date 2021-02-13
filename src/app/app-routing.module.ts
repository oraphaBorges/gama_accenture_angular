import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LoginComponent } from './login/login.component';
import { PlanosContaComponent } from './planos-conta/planos-conta.component';

const routes: Routes = [{
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'cadastro',
    component:CadastroComponent
  },{
    path:'dashboard',
    component:DashboardComponent
  },{
    path:'planos-conta',
    component:PlanosContaComponent
  },{
    path:'lancamentos',
    component:LancamentosComponent
  },{
    path:'**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
