  import { ToastNotification } from './../../model/toast.model';
  import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
  import { NotificationService } from '../../services/notification.service';
  import { CommonModule } from '@angular/common';
  import { APPLICATION_CONFIGURATIONS } from '../../constants/constants';
  @Component({
    selector: 'app-notification-container',
    imports: [CommonModule],
    templateUrl: './notification-container.html',
    styleUrls: ['./notification-container.css'],
    standalone: true,
  })
  export class NotificationContainer {
    constructor(
      private notificationService: NotificationService,
      private cdr: ChangeDetectorRef,
      private ngZone: NgZone,
    ) {}

    timeouts: Record<string, any> = {};
    notifications: ToastNotification[] = [];

    ngOnInit() {
      this.notificationService.toastObservable$.subscribe((toastNotification: ToastNotification) => {
        let id = toastNotification.id;

        this.ngZone.run(() => {
          this.notifications.push(toastNotification);
          this.cdr.detectChanges();

          this.timeouts[id] = setTimeout(() => {
            this.removeMessage(id);
            this.cdr.detectChanges();
          }, APPLICATION_CONFIGURATIONS.TOAST_TIMEOUT);
        });
      });
    }

    removeMessage(id: string) {
      if (this.timeouts[id]) {
        clearTimeout(this.timeouts[id]);
        delete this.timeouts[id];
      }
      this.notifications = this.notifications.filter((m) => m.id !== id);
    }
  }
