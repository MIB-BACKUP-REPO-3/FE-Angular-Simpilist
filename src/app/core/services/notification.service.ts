import { ToastNotification } from './../model/toast.model';
import { Injectable } from '@angular/core';
import { ErrorResponse } from '../model/error-response.model';
import { createToastNotification, createToastNotificationWithSystemDate } from '../utilities/Factory/ToastNotificationFactory';
import { NOTIFICATION_TYPES } from '../constants/constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private toastNotifications$ = new Subject<ToastNotification>();
  toastObservable$ = this.toastNotifications$.asObservable();
  show(toastNotification: ToastNotification) {
    this.toastNotifications$.next(toastNotification);
  }

  showErrorNotification(error: ErrorResponse) {
    this.show(createToastNotification(
      error.message,
      error.timeStamp,
      NOTIFICATION_TYPES.ERROR));
  }

  showInfoNotification(message: string) {
    this.show(
      createToastNotificationWithSystemDate(
        message,
        NOTIFICATION_TYPES.INFO),
    );
  }

  showWarningNotification(message: string) {
    this.show(
      createToastNotificationWithSystemDate(
        message,
        NOTIFICATION_TYPES.WARNING),
    );
  }
}
