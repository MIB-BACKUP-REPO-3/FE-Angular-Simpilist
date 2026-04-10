import { NotificationType , ToastNotification } from '../../model/toast.model';

export const createToastNotification = (
  message: string,
  timestamp: string,
  type: NotificationType,
): ToastNotification => {
  return {
    message: message,
    id: crypto.randomUUID(),
    timestamp: timestamp,
    type: type,
  };
};


export const createToastNotificationWithSystemDate = (
  message: string,
  type: NotificationType,
): ToastNotification => {
  let date =new Date
  return {
    message: message,
    id: crypto.randomUUID(),
    timestamp: date.toDateString(),
    type: type,
  };
};
