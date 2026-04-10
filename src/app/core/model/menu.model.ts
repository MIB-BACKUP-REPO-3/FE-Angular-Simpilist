import { USER_TYPES } from '../constants/constants';

export interface MenuItem {
  label: string;
  link?: string;
  action?: () => void;
  isButton?: boolean;
  isSubMenu?: boolean;
  subMenuItems?: MenuItem[];
  icon?:string;
};

export type MENU_TYPES = (typeof USER_TYPES)[keyof typeof USER_TYPES];
