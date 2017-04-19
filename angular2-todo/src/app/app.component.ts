import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoList } from './task-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
todoList = TodoList;

numOfTasksTODO(todoList: Todo[]): number {
  // numOfTasks;
  // for(let x in todoList){
  //   if(x[2] = false){
  //
  //   }
  //
  // }

  let num = todoList.length;
  return num;
}

ngOnInit(){

}

newItemToList(name: string, todoList: Todo[]): void {
    let item = new Todo(false , name);
    todoList.push(item);
    // console.log(typeof(item));
    // console.log(todoList); keep in for clarity
}


}
