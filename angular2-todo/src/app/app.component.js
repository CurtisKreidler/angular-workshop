"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import { Todo } from './todo'
var Todo = (function () {
    function Todo(isDone, itemName) {
        this.isDone = isDone;
        this.itemName = itemName;
    }
    return Todo;
}());
exports.Todo = Todo;
var AppComponent = (function () {
    function AppComponent() {
        this.todoList = [
            { isDone: false, itemName: "feed the dog" },
            { isDone: false, itemName: "finish workshop" },
            { isDone: false, itemName: "be cool" },
            { isDone: false, itemName: "ignore finance homework" },
            { isDone: false, itemName: "buy groceries" },
            { isDone: false, itemName: "study" }
        ];
    }
    AppComponent.prototype.newItemToList = function (name, todoList) {
        var item = new Todo(false, name);
        todoList.push(item);
        console.log(typeof (item));
        console.log(todoList);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"card\">\n    <h2 id=\"todo-title\">Angular 2 TODO-APP: </h2>\n    <div *ngFor=\"let todo of todoList\">\n        <div class=\"task\" [style.text-decoration]=\"todo.isDone ? 'line-through' : ''\"\n          [style.color] = \"todo.isDone ? 'grey' : ''\" >\n            <label>\n              <input type=\"checkbox\" [(ngModel)]=\"todo.isDone\">\n              {{ todo.itemName }}\n            </label>\n        </div>\n    </div>\n    <div class=\"newTask\">\n      <input [(ngModel)]=\"itemName\" placeholder=\"new item\">\n      <button (click) = \"newItemToList(itemName, todoList)\">add</button>\n    </div>\n  </div>",
        styles: ["\n  .card{\n    background-color:#fcfbd1;\n    height: 50%;\n    width: 30%;\n    margin: auto;\n    padding: 25px 15px;\n    box-shadow: 4px 4px #eee;\n  }\n  .task{\n    display: box;\n    padding: 5px 0;\n  }\n  .done{\n    text-decoration: line-through;\n    color: grey;\n  }\n  .newTask{\n    margin-top: 1em;\n  }\n  #todo-title{\n    text-align: center;\n    margin-top: .4em;\n  }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map