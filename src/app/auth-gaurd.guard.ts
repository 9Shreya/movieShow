import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree,Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiServiceService} from "./api-service.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  constructor(private service: ApiServiceService,private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.service.isLoggedin()) {
      this.router.navigateByUrl('/login');
      this.service.deleteToken();
      localStorage.setItem('token','')

      return false;
    }
    return true;
  }

}
