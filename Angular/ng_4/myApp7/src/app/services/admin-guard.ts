import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  route : ActivatedRouteSnapshot,
  route : RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router  = inject(Router);
    const adminRole = authService.isAdmin();
    if(adminRole){
      return true;
    }
    else {
      RegularExpressionLiteral.navigate(['/home']);
      return false;
    }
  }
}
