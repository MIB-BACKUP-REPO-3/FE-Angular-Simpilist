import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Home } from './features/home/home';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { Register } from './features/auth/register/register';
import { Contact } from './features/contact/contact';
import { About } from './features/about/about';
import { Todo } from './features/todo/todo';
import { Calender } from './features/calender/calender';
import { Pomodoro } from './features/pomodoro/pomodoro';
import { PerformanceAnalysis } from './features/performance-analysis/performance-analysis';
import { MainLayout } from './layout/main-layout/main-layout';
// keeping the previous version for learning
// export const routes: Routes = [
//   {
//     path: 'login',
//     component: Login,
//     canActivate: [guestGuard],
//   },
//   {
//     path: '',
//     component: Home,
//     canActivate: [authGuard],
//   },
//   {
//     path: 'home',
//     component: Home,
//     canActivate: [authGuard],
//   },
//   {
//     path: 'register',
//     component: Register,
//     canActivate: [guestGuard],
//   },
//   {
//     path: 'contact',
//     component: Contact,
//   },
//   {
//     path: 'about',
//     component: About,
//   },
//   {
//     path: 'todo-list',
//     component: Todo,
//     canActivate: [authGuard],
//   },
//   {
//     path: 'calender',
//     component: Calender,
//     canActivate: [authGuard],
//   },
//   {
//     path: 'pomodoro',
//     component: Pomodoro,
//     canActivate: [authGuard],
//   },
//   {
//     path: 'todo-list',
//     component: Todo,
//     canActivate: [authGuard],
//   },
//   {
//     path: 'performance-analysis',
//     component: PerformanceAnalysis,
//     canActivate: [authGuard],
//   },
// ];
export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home, canActivate: [authGuard] },
      { path: 'home', component: Home, canActivate: [authGuard] },
      { path: 'todo-list', component: Todo, canActivate: [authGuard] },
      { path: 'calender', component: Calender, canActivate: [authGuard] },
      { path: 'pomodoro', component: Pomodoro, canActivate: [authGuard] },
      { path: 'performance-analysis', component: PerformanceAnalysis, canActivate: [authGuard] },
      { path: 'contact', component: Contact },
      { path: 'about', component: About },
      { path: 'register', component: Register, canActivate: [guestGuard] },
      { path: 'login', component: Login, canActivate: [guestGuard] },
    ],
  },

  { path: '**', redirectTo: '' },
];
