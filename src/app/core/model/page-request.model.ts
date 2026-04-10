import { SortField } from "./sort-field.model";


export interface PageRequest{
  pageNumber: number;
  pageSize: number;
  sortFields:SortField[];
}

