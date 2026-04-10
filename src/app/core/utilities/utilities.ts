import { HttpParams } from '@angular/common/http';
import { PAGINATION_CONFIG } from '../constants/constants';
import { PageRequest } from '../model/page-request.model';
import { SearchablePageRequest } from '../model/searchable-page-request.model';

export const createPageRequest = (request?: Partial<PageRequest>): PageRequest => {
  return {
    pageNumber: request?.pageNumber ?? PAGINATION_CONFIG.DEFAULT_FIRST_PAGE,
    pageSize: request?.pageSize ?? PAGINATION_CONFIG.DEFAULT_PAGE_SIZE,
    sortFields: request?.sortFields ?? [PAGINATION_CONFIG.DEFAULT_SORT_FIELD],
  };
};

export const createSearchablePageRequest = (
  request?: Partial<SearchablePageRequest>,
): SearchablePageRequest => {
  return {
    ...createPageRequest(request),
    searchQuery: request?.searchQuery ?? PAGINATION_CONFIG.DEFAULT_SEARCH_QUERY,
  };
};

export const toHttpParams = (obj: any): HttpParams => {
  let params = new HttpParams();

  Object.keys(obj).forEach((propertyName) => {
    const propertyValue = obj[propertyName];
    if (propertyValue === undefined || propertyValue === null) return;
    if (Array.isArray(propertyValue)) {
      propertyValue.forEach((arrayItem, arrayIndex) => {
        if (typeof arrayItem === 'object') {
          Object.keys(arrayItem).forEach((itemKey) => {
            params = params.append(`${propertyName}[${arrayIndex}].${itemKey}`, arrayItem[itemKey]);
          });
        } else {
          params = params.append(propertyName, arrayItem);
        }
      });
    } else {
      params = params.set(propertyName, propertyValue);
    }
  });

  return params;
};
