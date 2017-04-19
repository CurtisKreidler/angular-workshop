"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var todo_1 = require("./todo");
var task_data_1 = require("./task-data");
var AppComponent = (function () {
    function AppComponent() {
        this.todoList = task_data_1.TodoList;
    }
    AppComponent.prototype.numOfTasksTODO = function (todoList) {
        // numOfTasks;
        // for(let x in todoList){
        //   if(x[2] = false){
        //
        //   }
        //
        // }
        var num = todoList.length;
        return num;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.newItemToList = function (name, todoList) {
        var item = new todo_1.Todo(false, name);
        todoList.push(item);
        // console.log(typeof(item));
        // console.log(todoList); keep in for clarity
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map