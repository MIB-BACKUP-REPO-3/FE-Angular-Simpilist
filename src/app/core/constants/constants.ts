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
