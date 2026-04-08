import { Component } from '@angular/core';
import { ListGroup } from '../../../models/todo/list-group.model';
import { GroupCategory } from '../../../models/todo/group-category.model';

@Component({
  selector: 'app-group',
  imports: [],
  templateUrl: './group.html',
  styleUrl: './group.css',
})
export class Group {
  groupCategory: GroupCategory = {
    categoryName: 'testCategory',
    id: 1,
    priority: 1,
  };
  mockData: ListGroup[] = [
    {
      groupName: 'test',
      priority: 1,
      id: 1,
      groupCategory: this.groupCategory,
    },
    {
      groupName: 'test',
      priority: 1,
      id: 2,
      groupCategory: this.groupCategory,
    },
    {
      groupName: 'test',
      priority: 1,
      id: 3,
      groupCategory: this.groupCategory,
    },
    {
      groupName: 'test',
      priority: 1,
      id: 4,
      groupCategory: this.groupCategory,
    },
    {
      groupName: 'test',
      priority: 1,
      id: 5,
      groupCategory: this.groupCategory,
    },
  ];

  // todo fix the group
}
