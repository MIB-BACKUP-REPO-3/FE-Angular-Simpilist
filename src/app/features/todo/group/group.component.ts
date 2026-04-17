import { NotificationService } from './../../../core/services/notification.service';
import { GroupService } from './services/group-service';
import { Group } from './../../../models/todo/group.model';
import { Category } from './../../../models/todo/category.model';
import { Component, input, OnInit, signal } from '@angular/core';
import { createSearchablePageRequest, logAndNotifyError } from '../../../core/utilities/utilities';

@Component({
  selector: 'app-group',
  imports: [],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent implements OnInit {
  constructor(
    private groupService: GroupService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.fetchGroups();
  }

  category = input<Category>();
  groups = signal<Group[]>([]);

  fetchGroups() {
    this.groupService.getGroups(createSearchablePageRequest()).subscribe({
      next: (response) => {
        this.groups.set(response.content);
      },
      error: (err) => {
        logAndNotifyError(err, this.notificationService);
      },
    });
  }
}
