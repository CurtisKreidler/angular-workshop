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
    <h2 id="todo-title">Angular 2 TODO-APP: </h2>
    <div *ngFor="let todo of todoList">
        <div class="task" [style.text-decoration]="todo.isDone ? 'line-through' : ''"
          [style.color] = "todo.isDone ? 'grey' : ''" >
            <label>
              <input type="checkbox" [(ngModel)]="todo.isDone">
              {{ todo.itemName }}
            </label>
        </div>
    </div>
    <div class="newTask">
      <input [(ngModel)]="itemName" placeholder="new item">
      <button (click) = "newItemToList(itemName, todoList)">add</button>
    </div>
  </div>`,
  styles: [`
  .card{
    background-color:#fcfbd1;
    height: 50%;
    width: 30%;
    margin: auto;
    padding: 25px 15px;
    box-shadow: 4px 4px #eee;
  }
  .task{
    display: box;
    padding: 5px 0;
  }
  .done{
    text-decoration: line-through;
    color: grey;
  }
  .newTask{
    margin-top: 1em;
  }
  #todo-title{
    text-align: center;
    margin-top: .4em;
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
