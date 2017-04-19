export class Todo {
  isDone: boolean;
  itemName: string;

  constructor(
  isDone: boolean,
  itemName?: string){
    this.isDone = isDone;
    this.itemName = itemName;
  }
}
