import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      form.controls['usuario'].markAsTouched;
      form.controls['senha'].markAsTouched;
      if(!form.controls.usuario.valid)
        this.UsuairioInput?.nativeElement.focus()
      if(!form.controls.senha.valid)
        this.SenhaInput?.nativeElement.focus()
      
    }  
    this.login()
  }

  exibeErro(nomeControle:string,form: NgForm){
    if(!form.controls[nomeControle])
      return false
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched
  }

  login(){
    // this.usuario
    // this.senha
    console.log(this.usuario,this.senha);
    
  }
}
