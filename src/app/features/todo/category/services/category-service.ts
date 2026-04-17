import { NotificationService } from './../../../../core/services/notification.service';
import { Category } from './../../../../models/todo/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from '../../../../core/model/pageable.model';
import { environment } from '../../../../../environments/environment';
import { toHttpParams } from '../../../../core/utilities/utilities';
import { CategoryPageRequest } from './model/category.models';
import { CrudService } from '../../../../core/services/base/crud.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends CrudService<Category,CategoryPageRequest>{

  constructor(http: HttpClient){
    super(http,`${environment.apiBaseUrl}/category`)
  }

  // constructor(
  //   private http: HttpClient
  // ) {}

  // createCategory(category: Partial<Category>) {
  //   return this.http.post<Category>(`${environment.apiBaseUrl}/category`, category);
  // }

  // updateCategory(category: Category) {
  //   return this.http.patch<Category>(`${environment.apiBaseUrl}/category/${category.id}`, category);
  // }

  // deleteCategory(id:number) {
  //   return this.http.delete(`${environment.apiBaseUrl}/category/${id}`);
  // }

  // getCategories(categoryPageRequest: CategoryPageRequest) {
  //   return this.http.get<Pageable<Category>>(`${environment.apiBaseUrl}/category`, {
  //     params: toHttpParams(categoryPageRequest),
  //   });
  // }
}
