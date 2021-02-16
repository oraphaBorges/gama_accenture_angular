import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsntAuthenticatedGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  canActivate():boolean {  
    if(!this.authService.isLogged()){
      return true
    }
    
    this.router.navigate(['dashboard'])
    return false
  }
  
}
