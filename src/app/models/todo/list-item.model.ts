import { TodoItemStatus } from "../../shared/enums/todo-item-status.enum";
import { BaseEntity } from "../base-entity.model";
import { ListGroup } from "./list-group.model";

export interface ListItem extends BaseEntity{
  priority:number;
  description:string;
  title:string;
  listGroup:ListGroup;
  todoItemStatus:TodoItemStatus;
}
