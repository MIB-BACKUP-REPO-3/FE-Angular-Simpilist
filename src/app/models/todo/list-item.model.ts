import { TodoItemStatus } from "../../shared/enums/todo-item-status.enum";
import { BaseEntity } from "../../core/model/base-entity.model";
import { Group } from "./group.model";

export interface ListItem extends BaseEntity{
  priority:number;
  description:string;
  title:string;
  group:Group;
  todoItemStatus:TodoItemStatus;
}
