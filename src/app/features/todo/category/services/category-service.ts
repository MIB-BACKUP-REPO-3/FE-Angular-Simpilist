import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from '../../../../core/model/pageable.model';
import { Category } from '../../../../models/todo/category.model';
import { environment } from '../../../../../environments/environment';
import { SearchablePageRequest } from '../../../../core/model/searchable-page-request.model';
import { toHttpParams } from '../../../../core/utilities/utilities';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(categoryPageRequest: SearchablePageRequest) {
    return this.http.get<Pageable<Category>>(`${environment.apiBaseUrl}/category`, {
      params: toHttpParams(categoryPageRequest),
    });
  }
}
