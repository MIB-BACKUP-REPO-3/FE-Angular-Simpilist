import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { NotificationContainer } from './core/components/notification-container/notification-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NotificationContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simpilist');
}
