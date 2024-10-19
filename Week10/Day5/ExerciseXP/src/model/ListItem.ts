import { v4 as uuidv4 } from 'uuid';

interface ToDoItem {
  readonly id: string;
  item: string;
  checked: boolean;
}

export class ListItem implements ToDoItem  {

  constructor (
    public id: string = uuidv4(),
    public item: string,
    public checked: boolean = false,
  ) {} 

  toggleChecked(): void {
    this.checked = !this.checked;
  }
}