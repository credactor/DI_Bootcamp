import { ListItem } from "./ListItem";

export default class FullList {

    private list: ListItem[] = [];
  
    addItem(item: ListItem): void {
      this.list.push(item);
      this.saveList();
    }
  
    removeItem(id: string): void {
      this.list = this.list.filter(item => item.id !== id);
      this.saveList();
    }
  
    getList(): ListItem[] {
      return this.list;
    }
  
    clearList(): void {
      this.list = [];
      this.saveList();
    }
  
    saveList(): void {
      localStorage.setItem('todoList', JSON.stringify(this.list));
    }
  
    loadList(): void {
      const loadedList = localStorage.getItem('todoList');
      if (loadedList) {
        this.list = JSON.parse(loadedList) as ListItem[];
      }
    }
}