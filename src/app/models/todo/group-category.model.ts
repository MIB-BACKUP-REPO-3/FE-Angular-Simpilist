import { BaseEntity } from "../base-entity.model"

export interface GroupCategory extends BaseEntity{
  categoryName:string
  priority:number
}
