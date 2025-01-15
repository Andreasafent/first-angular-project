import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoEntryComponent } from './components/todo-entry/todo-entry.component';
import { TodoAddComponent } from "./components/todo-add/todo-add.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, FormsModule, NgFor, TodoEntryComponent, TodoAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My Todo list';
  todos: string[]=[
    "Wash dishes",
    "Mop floor"
  ];
  editTodoIndex = -1

  addToTodoList(todo: string){
    if(todo === ""){
      alert("Please enter a task");
      return;
    }

    this.todos.push(todo);
  }

  removeTodo(i:number){
    this.todos.splice(i, 1);
  }


  editTodo(index:number){
    this.editTodoIndex = index;
  }

  saveTodo(){
    this.editTodoIndex = -1;
  }

  trackByIndex(index: number, todo:string){
    return index;
  }
}
