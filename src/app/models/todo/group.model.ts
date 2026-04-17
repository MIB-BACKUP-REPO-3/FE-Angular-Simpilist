import { BaseEntity } from '../../core/model/base-entity.model';
import { NewEntity } from '../../core/model/entity-types';
import { Category } from './category.model';

export interface Group extends BaseEntity {
  groupName: string;
  category: Category;
  priority: number;
}



export type NewGroup = NewEntity<Group>;
