import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { DashboardComponent } from './area-logada/dashboard/dashboard.component';
import { LancamentosComponent } from './area-logada/lancamentos/lancamentos.component';
import { PlanosContaComponent } from './area-logada/planos-conta/planos-conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
    path:'auth',
    component:AreaLogadaComponent,
    children:[{
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },{
        path:'dashboard',
        component:DashboardComponent
      },{
        path:'planos-conta',
        component:PlanosContaComponent
      },{
        path:'lancamentos',
        component:LancamentosComponent
      },
     ]},{
      path:'cadastro',
      component:CadastroComponent
    },{
      path:'login',
      component:LoginComponent
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
