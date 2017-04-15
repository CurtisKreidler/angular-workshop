import { Component } from '@angular/core';
// import { Todo } from './todo'

export class Todo {
  isDone: boolean;
  // todoList: Todo[];
  itemName: string;
}

@Component({
  selector: 'my-app',
  template: `
  <div class="card">
    <h2>TODO: </h2>
    <div *ngFor="let todo of todoList">

      <input type="hidden" name="toggle" [(ngModel)]="todo.toggle">
          <div>
              <label>
                  <input type="checkbox"
                      [checked]="todo.toggle === toggles[0].value"
                      (change)="$event.target.checked? (todo.toggle =  toggles[0].value) : (todo.toggle = toggles[1].value)">
                  {{ toggles[0].display }}
              </label>
          </div>
        {{todo.name}}
    </div>
      <label>new item: </label>
      <input [(ngModel)]="todo.itemName" placeholder="new item">
  </div>`,
  styles: [`
  .card{
    display: flex-box;
    background-color:#fcfbd1;
    height: 200px;
    width: 200px;
    margin: auto;
    text-align: center;
    box-shadow: 4px 4px #eee;
  }
  .done{
    text-decoration: line-through;
  }
    `]
})
export class AppComponent  {

  todo: Todo = {
    isDone: false,
    itemName: "Squaaaaa"
  };

  public toggles = [
    { value: 'toggled', display: 'Toggled' },
    { value: 'untoggled', display: 'UnToggled' },
];

  todoList: Todo[] = [
    {isDone: false, itemName: "feed the dog"},
    {isDone: false, itemName: "finish workshop"},
    {isDone: false, itemName: "be cool"},
    {isDone: false, itemName: "ignore finance homework"},
    {isDone: false, itemName: "buy groceries"},
    {isDone: false, itemName: "study"}
];

// newItemToList(item: Todo): Todo[] = {
//
// }


}
