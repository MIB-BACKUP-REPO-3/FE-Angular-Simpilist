import { NOTIFICATION_TYPES } from './../constants/constants';

export type notificationType = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];

export type ToastNotification = {
  message: string;
  id: string;
  timestamp: string;
  type: notificationType;
};
