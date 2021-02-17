import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginCredenciais, LoginResponse } from './login.interfaces';

import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL

  constructor(
    private http:HttpClient,
    private authService: AuthService
  ) { }

  logar(credencais:LoginCredenciais):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.API_URL+'login',credencais)
      .pipe(
        tap(response=>{
          this.authService.setToken(response.token)
          this.authService.setUsuario(response.usuario)
        })
      )
  }
}
