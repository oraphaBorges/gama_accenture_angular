import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad} from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  canLoad():boolean {  
    if(this.authService.isLogged())
      return true

    this.router.navigate(['login'])
    return false;
  }

  canActivate():boolean {  
    if(this.authService.isLogged())
      return true

    this.router.navigate(['login'])
    return false
  }
  
}
