import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { inject } from '@angular/core';

export const guardLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const routing = inject(Router);

  if (!authService.isAutentificated()){
    routing.navigate(['login']);
  }

  return authService.isAutentificated();
};
