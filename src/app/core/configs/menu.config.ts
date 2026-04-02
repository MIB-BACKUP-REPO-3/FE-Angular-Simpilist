import { Router } from '@angular/router';
import { MENU_TYPES } from '../model/menu.model';
import { MenuItem } from '../model/menu.model';
import { AuthStorageService } from '../services/auth-storage.service';

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
    action: () => {},
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

// const UserSubMenu = (): MenuItem => {
//   return{
//     // i am bbuilding this
//     isSubMenu:true,
//     label:
//   }
// };
