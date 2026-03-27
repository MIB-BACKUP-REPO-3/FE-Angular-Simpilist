import { Router } from '@angular/router';
import { MENU_TYPES } from '../model/menu.model';
import { MenuItem } from '../model/menu.model';
import { AuthStorageService } from '../services/auth-storage.service';

const logout = (auth: AuthStorageService, router: Router): MenuItem => {
  return {
    label: 'Logout',
    action: () => {
      auth.logout();
      router.navigate(['/login']);
    },
    isButton: true,
  };
};

export const createMenuConfig = (
  auth: AuthStorageService,
  router: Router,
): Record<MENU_TYPES, MenuItem[]> => ({
  guest: [
    { label: 'Home', link: '/home' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Login', link: '/login' },
    { label: 'Register', link: '/register' },
  ],

  user: [{ label: 'Home', link: '/home' }, logout(auth, router)],

  admin: [logout(auth, router)],
});
