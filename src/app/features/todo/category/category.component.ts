import { Category, NewCategory } from './../../../models/todo/category.model';
import { NotificationService } from './../../../core/services/notification.service';
import { logAndNotifyError, createSearchablePageRequest } from '../../../core/utilities/utilities';
import { CategoryService } from './services/category-service';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditState } from '../../../core/model/edit-state.model';

@Component({
  selector: 'app-category',
  imports: [FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService,
  ) {}

  showForm = signal(false);
  editField: WritableSignal<EditState<Category> | null> = signal(null);

  categories: WritableSignal<Category[]> = signal([]);
  newCategory: NewCategory = {
    categoryName: '',
    priority: 0,
  };

  ngOnInit(): void {
    this.fetchCategories();
  }

  showAddForm(): void {
    this.showForm.set(true);
  }

  hideAddForm(event: Event): void {
    event.preventDefault();
    this.showForm.set(false);
  }

  saveInitialCategory(category: Category) {
    console.log(category);
    this.editField.set({
      original: category,
      current: structuredClone(category),
    }); //do deep copy
  }

  cancelEdit() {
    const original = this.editField()?.original;
    if (!original) return;

    this.categories.update((categories) => {
      return categories.map((c) => (c.id === original.id ? structuredClone(original) : c));
    });
    this.editField.set(null);
  }

  saveCategory() {
    this.categoryService.create(this.newCategory).subscribe({
      next: (response: Category) => {
        this.notificationService.showInfoNotification('Saved Category ' + response.categoryName);
        this.fetchCategories();
        this.showForm.set(false);
      },
      error: (err) => {
        logAndNotifyError(err, this.notificationService);
      },
    });
  }

  editCategory() {
    const edit = this.editField();
    if (!edit ) return;

    this.categoryService.update(edit.current.id, edit.current).subscribe({
      next: (response: Category) => {
        this.notificationService.showInfoNotification('updated Category ' + response.categoryName);
        this.fetchCategories();
        this.editField.set(null);
      },
      error: (err) => {
        logAndNotifyError(err, this.notificationService);
      },
    });
  }

  deleteCategory(category: Category) {
    if (category.id) {
      this.categoryService.delete(category.id).subscribe({
        next: () => {
          this.notificationService.showInfoNotification('Deleted Category');
          this.fetchCategories();
        },
        error: (err) => {
          logAndNotifyError(err, this.notificationService);
        },
      });
    }
  }

  fetchCategories() {
    this.categoryService.findAll(createSearchablePageRequest()).subscribe((page) => {
      this.categories.set(page.content);
    });
  }
}
