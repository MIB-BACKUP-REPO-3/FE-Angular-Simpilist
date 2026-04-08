import { AuthStorageService } from './../../../core/services/auth-storage.service';
import { MENU_TYPES, MenuItem } from './../../../core/model/menu.model';
import { Router } from '@angular/router';

const logoutMenuButton = (auth: AuthStorageService, router: Router): MenuItem => {
  return {
    label: 'Logout',
    icon:"/images/logout.svg",
    action: () => {
      auth.logout();
      router.navigate(['/login']);
    },
    isButton: true,
  };
};

const simpleMenuItem = (
  label: string,
  link: string,
  icon: string = "",
  isButton: boolean = false,
): MenuItem => {
  return {
    label: label,
    icon:icon,
    link: link,
    isSubMenu: false,
    isButton: isButton,
  };
};

const subMenuItem = (label: string, menuItems: MenuItem[], isButton: boolean): MenuItem => {
  return {
    label: label,
    isSubMenu: true,
    subMenuItems: menuItems,
    isButton: isButton,
  };
};

export const createHeaderMenuConfig = (
  auth: AuthStorageService,
  router: Router,
): Record<MENU_TYPES, MenuItem[]> => ({
  guest: [
    simpleMenuItem('Home', '/home',"/images/home.svg"),
    simpleMenuItem('About', '/about',"/images/about.svg"),
    simpleMenuItem('Contact', '/contact',"/images/contact.svg"),
    simpleMenuItem('Login', '/login',"/images/login.svg"),
    simpleMenuItem('Register', '/register',"/images/register.svg"),
  ],

  user: [
    simpleMenuItem('Home', '/home',"/images/home.svg"),
    simpleMenuItem('Todo List', '/todo-list',"/images/todo.svg"),
    simpleMenuItem('Pomodoro', '/pomodoro',"/images/pomodoro.svg"),
    simpleMenuItem('Performance Analysis', '/performance-analysis',"/images/analysis.svg"),
    simpleMenuItem('Calender', '/calender',"/images/calender.svg"),
    logoutMenuButton(auth, router),
  ],

  admin: [logoutMenuButton(auth, router)],
});

