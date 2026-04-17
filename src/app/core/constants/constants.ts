import { SortField } from './../model/sort-field.model';
export const NOTIFICATION_CONFIG={
  SUCCESSFUL_REGISTRATION:"You have successfully registered, please login using the information you registered with"
}

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  CURRENT_USER: 'current_user',
};

export const USER_TYPES = {
  GUEST: 'guest',
  USER: 'user',
  ADMIN: 'admin',
} as const;

export const APPLICATION_CONFIGURATIONS = {
  TOAST_TIMEOUT: 3000,
};

export const NOTIFICATION_TYPES = {
 ERROR:"error",
 WARNING:"warning",
 INFO:"info"
} as const

export const SORT_DIRECTIONS = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;


export const DEFAULT_SORT_FIELD:SortField={
  field:"createdAt",
  direction:"ASC"
}

export const PAGINATION_CONFIG={
  DEFAULT_FIRST_PAGE:0,
  DEFAULT_PAGE_SIZE:10,
  DEFAULT_SORT_FIELD:DEFAULT_SORT_FIELD,
  DEFAULT_SEARCH_QUERY:""
}

