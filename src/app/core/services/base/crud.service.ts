import { HttpClient } from '@angular/common/http';
import { toHttpParams } from '../../utilities/utilities';
import { Pageable } from '../../model/pageable.model';
import { Observable } from 'rxjs';

export abstract class CrudService<T, Q> {
  constructor(
    protected http: HttpClient,
    protected baseURL: string,
  ) {}

  findOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseURL}/${id}`);
  }

  findAll(query: Q): Observable<Pageable<T>> {
    return this.http.get<Pageable<T>>(`${this.baseURL}`, {
      params: toHttpParams(query),
    });
  }

  create(t: Partial<T>): Observable<T> {
    return this.http.post<T>(this.baseURL, t);
  }

  update(id: number, t: T): Observable<T> {
    return this.http.patch<T>(`${this.baseURL}/${id}`, t);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
