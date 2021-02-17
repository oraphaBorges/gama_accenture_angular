import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  API_URL = environment.API_URL
  
  constructor(
    private htpp: HttpClient,
    private authServive:AuthService
  ) { }
  getDashboard(inicio:string,fim:string) {
    return this.htpp.get(this.API_URL+'dashboard',{
      headers:{
        'Authorization':this.authServive.getToken()!
      },
      params:{
        login:this.authServive.getUsuario()!.login,
        inicio:inicio,
        fim:fim
      }
    })
  }
  }
