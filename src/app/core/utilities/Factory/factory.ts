import { notificationType, ToastNotification } from '../../model/toast.model';

export const createToastNotification = (
  message: string,
  timestamp: string,
  type: notificationType,
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
  type: notificationType,
): ToastNotification => {
  let date =new Date
  return {
    message: message,
    id: crypto.randomUUID(),
    timestamp: date.toDateString(),
    type: type,
  };
};
