import { BaseEntity } from "../../core/model/base-entity.model"
import { NewEntity } from "../../core/model/entity-types";

export interface Category extends BaseEntity{
  categoryName:string
  priority:number
}


export type NewCategory = NewEntity<Category>;
