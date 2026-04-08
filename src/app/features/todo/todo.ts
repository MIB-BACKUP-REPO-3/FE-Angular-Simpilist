import { Component } from '@angular/core';
import { Category } from "./category/category";
import { Group } from "./group/group";

@Component({
  selector: 'app-todo',
  imports: [Category, Group],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {



}
