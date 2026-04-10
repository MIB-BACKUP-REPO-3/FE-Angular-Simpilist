import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { RegisterComponent } from './features/auth/register/register.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
import { TodoComponent } from './features/todo/todo.component';
import { CalenderComponent } from './features/calender/calender.component';
import { PomodoroComponent } from './features/pomodoro/pomodoro.component';
import { PerformanceAnalysisComponent } from './features/performance-analysis/performance-analysis.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent, canActivate: [authGuard] },
      { path: 'home', component: HomeComponent, canActivate: [authGuard] },
      { path: 'todo-list', component: TodoComponent, canActivate: [authGuard] },
      { path: 'calender', component: CalenderComponent, canActivate: [authGuard] },
      { path: 'pomodoro', component: PomodoroComponent, canActivate: [authGuard] },
      { path: 'performance-analysis', component: PerformanceAnalysisComponent, canActivate: [authGuard] },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'register', component: RegisterComponent, canActivate: [guestGuard] },
      { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
    ],
  },

  { path: '**', redirectTo: '' },
];
