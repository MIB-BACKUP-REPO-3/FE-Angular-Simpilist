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
