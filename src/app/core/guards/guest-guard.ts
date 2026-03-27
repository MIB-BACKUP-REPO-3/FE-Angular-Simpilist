import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStorageService } from '../services/auth-storage.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const authStorageService = inject(AuthStorageService);
  const router = inject(Router);

  return !authStorageService.accessToken ? true : router.createUrlTree(['/']);
};
