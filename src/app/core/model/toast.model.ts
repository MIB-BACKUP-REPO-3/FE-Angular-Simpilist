import { NOTIFICATION_TYPES } from './../constants/constants';

export type NotificationType = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];

export interface ToastNotification {
  message: string;
  id: string;
  timestamp: string;
  type: NotificationType;
};
