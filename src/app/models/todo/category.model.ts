import { BaseEntity } from "../../core/model/base-entity.model"

export interface Category extends BaseEntity{
  categoryName:string
  priority:number
}
