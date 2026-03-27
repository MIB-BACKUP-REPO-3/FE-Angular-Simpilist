import { USER_TYPES } from '../constants/constants';

export type MenuItem = {
  label: string;
  link?: string;
  action?: () => void;
  isButton?:Boolean;
};

export type MENU_TYPES = (typeof USER_TYPES)[keyof typeof USER_TYPES];
