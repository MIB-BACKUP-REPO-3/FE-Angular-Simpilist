import { PageRequest } from "../../../../../core/model/page-request.model";

export interface CategoryPageRequest extends PageRequest{
  searchQuery:string
}
