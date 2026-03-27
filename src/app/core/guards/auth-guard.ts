import { AuthStorageService } from './../services/auth-storage.service';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authStorageService = inject(AuthStorageService);
  const router = inject(Router);

  return authStorageService.accessToken ? true : router.createUrlTree(['/login']);
};
