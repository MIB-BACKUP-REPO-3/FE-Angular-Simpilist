import { Injectable } from '@angular/core';
import { GroupPageRequest } from './model/group.model';
import { Pageable } from '../../../../core/model/pageable.model';
import { environment } from '../../../../../environments/environment';
import { Group, NewGroup } from '../../../../models/todo/group.model';
import { HttpClient } from '@angular/common/http';
import { toHttpParams } from '../../../../core/utilities/utilities';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  getGroups(groupPageRequest: GroupPageRequest) {
    return this.http.get<Pageable<Group>>(`${environment.apiBaseUrl}/group`, {
      params: toHttpParams(groupPageRequest),
    });
  }

  createGroup(group: NewGroup) {
    return this.http.post<Group>(`${environment.apiBaseUrl}/group`, group);
  }

  updateGroup(group: Group) {
    return this.http.patch<Group>(`${environment.apiBaseUrl}/group/${group.id}`, group);
  }

  deleteGroup(id: number) {
    return this.http.delete(`${environment.apiBaseUrl}/group/${id}`);
  }
}
