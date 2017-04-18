import { Component } from '@angular/core';
// import { Todo } from './todo'

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

@Component({
  selector: 'my-app',
  template: `
  <div class="card">
    <h2>TODO: </h2>
    <div *ngFor="let todo of todoList">
        <div [style.text-decoration]="todo.isDone ? 'line-through' : ''"
          [style.color] = "todo.isDone ? 'grey' : ''" >
            <label>
              <input type="checkbox" [(ngModel)]="todo.isDone">
              {{ todo.itemName }}
            </label>
        </div>
    </div>
    <div class="newTask">
      <label>new item: </label>
      <input [(ngModel)]="itemName" placeholder="new item">
      <button (click) = "newItemToList(itemName, todoList)">add</button>
    </div>
  </div>`,
  styles: [`
  .card{
    position: relative;
    display: flex-box;
    background-color:#fcfbd1;
    height: 500px;
    width: 200px;
    margin: auto;
    text-align: center;
    box-shadow: 4px 4px #eee;
  }
  .done{
    text-decoration: line-through;
    color: grey;
  }
  .newTask{
    margin-top: 15px;
  }
    `]
})
export class AppComponent  {


todoList: Todo[] = [
    {isDone: false, itemName: "feed the dog"},
    {isDone: false, itemName: "finish workshop"},
    {isDone: false, itemName: "be cool"},
    {isDone: false, itemName: "ignore finance homework"},
    {isDone: false, itemName: "buy groceries"},
    {isDone: false, itemName: "study"}
];


newItemToList(name: string, todoList: Todo[]): void {
    let item = new Todo(false , name);
    todoList.push(item);
    console.log(typeof(item));
    console.log(todoList);
}


}
