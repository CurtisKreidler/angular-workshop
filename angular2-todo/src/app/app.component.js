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
    function Todo() {
    }
    return Todo;
}());
exports.Todo = Todo;
var AppComponent = (function () {
    function AppComponent() {
        this.todo = {
            isDone: false,
            itemName: "Squaaaaa"
        };
        this.toggles = [
            { value: 'toggled', display: 'Toggled' },
            { value: 'untoggled', display: 'UnToggled' },
        ];
        this.todoList = [
            { isDone: false, itemName: "feed the dog" },
            { isDone: false, itemName: "finish workshop" },
            { isDone: false, itemName: "be cool" },
            { isDone: false, itemName: "ignore finance homework" },
            { isDone: false, itemName: "buy groceries" },
            { isDone: false, itemName: "study" }
        ];
        // newItemToList(item: Todo): Todo[] = {
        //
        // }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"card\">\n    <h2>TODO: </h2>\n    <div *ngFor=\"let todo of todoList\">\n\n      <input type=\"hidden\" name=\"toggle\" [(ngModel)]=\"todo.toggle\">\n          <div>\n              <label>\n                  <input type=\"checkbox\"\n                      [checked]=\"todo.toggle === toggles[0].value\"\n                      (change)=\"$event.target.checked? (todo.toggle =  toggles[0].value) : (todo.toggle = toggles[1].value)\">\n                  {{ toggles[0].display }}\n              </label>\n          </div>\n        {{todo.name}}\n    </div>\n      <label>new item: </label>\n      <input [(ngModel)]=\"todo.itemName\" placeholder=\"new item\">\n  </div>",
        styles: ["\n  .card{\n    display: flex-box;\n    background-color:#fcfbd1;\n    height: 200px;\n    width: 200px;\n    margin: auto;\n    text-align: center;\n    box-shadow: 4px 4px #eee;\n  }\n  .done{\n    text-decoration: line-through;\n  }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map