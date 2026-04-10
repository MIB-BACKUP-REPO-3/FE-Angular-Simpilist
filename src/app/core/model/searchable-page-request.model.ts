import { PageRequest } from './page-request.model';

export interface SearchablePageRequest extends PageRequest {
  searchQuery?: string;
}
