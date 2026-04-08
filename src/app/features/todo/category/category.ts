import { Component } from '@angular/core';
import { GroupCategory } from '../../../models/todo/group-category.model';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
    mockData: GroupCategory[] = [
      { categoryName: 'test', priority: 1, id: 1 },
      { categoryName: 'test1', priority: 2, id: 2 },
      { categoryName: 'test2', priority: 3, id: 3 },
      { categoryName: 'test3', priority: 4, id: 4 },
      { categoryName: 'test4', priority: 5, id: 5 },
    ];

}
