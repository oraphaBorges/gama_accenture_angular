import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    delete this.usuario
    delete this.token
    localStorage.clear()
  }
  
  usuario:Usuario|undefined
  token:string|undefined

  constructor() { }

  isLogged(){
    if(this.getUsuario() && this.getToken())
      return true
    return false
  }

  setUsuario(usuario: Usuario){
    this.usuario = usuario
    localStorage.setItem('usuario',JSON.stringify(usuario))
  }

  setToken(token:string){
    this.token = token
    localStorage.setItem('token',token)
  }

  getUsuario(){
    if(this.usuario)
      return this.usuario

    const UsuarioGuardado =  localStorage.getItem('usuario')
    if(UsuarioGuardado){
      this.usuario = JSON.parse(UsuarioGuardado)
      return this.usuario
    }
    return undefined
  }
  getToken(){
    if(this.token)
      return this.token
      
    const tokenGuardado =  localStorage.getItem('token')
    if(tokenGuardado){
      this.token = tokenGuardado
      return this.token
    }
    return undefined
  }
}
