import { createSearchablePageRequest } from '../../../core/utilities/utilities';
import { CategoryService } from './services/category-service';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Category } from '../../../models/todo/category.model';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  mockData: WritableSignal<Category[]> = signal([]);

  ngOnInit(): void {
    this.categoryService.getCategories(createSearchablePageRequest()).subscribe((page) => {
      this.mockData.set(page.content);
    });
  }
}
