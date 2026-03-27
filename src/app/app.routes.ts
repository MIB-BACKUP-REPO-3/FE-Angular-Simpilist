import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Home } from './features/auth/home/home';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { Register } from './features/auth/register/register';
import { Contact } from './features/contact/contact';
import { About } from './features/about/about';
export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    canActivate: [guestGuard],
  },
  {
    path: '',
    component: Home,
    canActivate: [authGuard],
  },
    {
    path: 'home',
    component: Home,
    canActivate: [authGuard],
  },
  {
    path: 'register',
    component: Register,
    canActivate: [guestGuard],
  },
    {
    path: 'contact',
    component: Contact
  },
    {
    path: 'about',
    component: About
  }
];
