import { BaseEntity } from '../../core/model/base-entity.model';
import { Category } from './category.model';

export interface Group extends BaseEntity {
  groupName: string;
  category: Category;
  priority: number;
}
