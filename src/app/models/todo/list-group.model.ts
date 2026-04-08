import { BaseEntity } from '../base-entity.model';
import { GroupCategory } from './group-category.model';

export interface ListGroup extends BaseEntity {
  groupName: string;
  groupCategory: GroupCategory;
  priority: number;
}
