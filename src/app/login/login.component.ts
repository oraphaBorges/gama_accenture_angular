import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';
import { LoginResponse } from './login.interfaces';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('usuairioInput') UsuairioInput:ElementRef|undefined
  @ViewChild('senhaInput') SenhaInput:ElementRef|undefined

  usuario=""
  senha=""

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      form.controls['usuario'].markAsTouched;
      form.controls['senha'].markAsTouched;
      if(!form.controls.usuario.valid){
        this.UsuairioInput?.nativeElement.focus()
        return;
      }
      if(!form.controls.senha.valid){
        this.SenhaInput?.nativeElement.focus()
        return;
      }
    }  
    this.login()
  }

  exibeErro(nomeControle:string,form: NgForm){
    if(!form.controls[nomeControle])
      return false
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched
  }

  login(){
    const credenciais = {usuario:this.usuario,senha:this.senha}
    this.loginService.logar(credenciais)
      .pipe(
        take(1),
      )
      .subscribe(
        response =>this.onSucessLogin(response),
        error =>this.onErrorLogin(error)
      )
  }

  onSucessLogin(response:LoginResponse){
    this.router.navigate(['dashboard'])
  }
  onErrorLogin(error:HttpErrorResponse){
    console.log(error);
  }
}
