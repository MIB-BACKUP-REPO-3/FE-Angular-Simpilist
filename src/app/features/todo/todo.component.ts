import { Component } from '@angular/core';
import { CategoryComponent } from "./category/category.component";
import { GroupComponent } from "./group/group.component";

@Component({
  selector: 'app-todo',
  imports: [CategoryComponent, GroupComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {




}
