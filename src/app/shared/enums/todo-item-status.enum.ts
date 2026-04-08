export enum TodoItemStatus {
  DONE = 'DONE',
  ON_HOLD = 'ON_HOLD',
  TODO = 'TODO'
}

export const TODO_ITEM_STATUS_LABEL: Record<TodoItemStatus, string> = {
  [TodoItemStatus.DONE]: 'Done',
  [TodoItemStatus.ON_HOLD]: 'On Hold',
  [TodoItemStatus.TODO]: 'To-Do'
};


