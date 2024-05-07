import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LogInService } from './shared/log-in.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard{
  constructor(public loginService: LogInService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
      return this.router.parseUrl("");
    }
  }
}
