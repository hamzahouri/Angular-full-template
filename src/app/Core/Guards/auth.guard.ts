import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../Services/Auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userAuthService:AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userAuthService.getLocalStorageUser()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/session/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}