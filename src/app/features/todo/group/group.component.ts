import { Component } from '@angular/core';
import { Group } from '../../../models/todo/group.model';
import { Category } from '../../../models/todo/category.model';

@Component({
  selector: 'app-group',
  imports: [],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent {

  groupCategory: Category = {
    categoryName: 'testCategory',
    id: 1,
    priority: 1,
  };
  mockData: Group[] = [
    {
      groupName: 'test',
      priority: 1,
      id: 1,
      category: this.groupCategory,
    },
    {
      groupName: 'test',
      priority: 1,
      id: 2,
      category: this.groupCategory,
    },
    {
      groupName: 'test',
      priority: 1,
      id: 3,
      category: this.groupCategory,
    },
    {
      groupName: 'test',
      priority: 1,
      id: 4,
      category: this.groupCategory,
    },
    {
      groupName: 'test',
      priority: 1,
      id: 5,
      category: this.groupCategory,
    },
  ];

  // todo fix the group
}
