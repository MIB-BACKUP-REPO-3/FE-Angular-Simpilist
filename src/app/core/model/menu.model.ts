import { USER_TYPES } from '../constants/constants';

export type MenuItem = {
  label: string;
  link?: string;
  action?: () => void;
  isButton?: boolean;
  isSubMenu?: boolean;
  subMenuItems?: MenuItem[];
  icon?:string;
  imageUrl?:string;
};

export type MENU_TYPES = (typeof USER_TYPES)[keyof typeof USER_TYPES];
