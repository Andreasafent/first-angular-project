import { Component, OnInit } from '@angular/core';
import { TodoAddComponent } from '../../components/todo-add/todo-add.component';
import { TodoEntryComponent } from '../../components/todo-entry/todo-entry.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-todos',
  imports: [
    TodoAddComponent,
    TodoEntryComponent,
    NgFor
  ],
  templateUrl: './my-todos.component.html',
  styleUrl: './my-todos.component.scss'
})

export class MyTodosComponent implements OnInit {
  
  todos: string[]=[];

  ngOnInit(){
    const todos = localStorage.getItem('todos');
    if(todos){
      this.todos = JSON.parse(todos);
    }
  }

  addToTodoList(todo: string){
    if(todo === ""){
      alert("Please enter a task");
      return;
    }

    this.todos.push(todo);
    // this.cdr.detectChanges();  // Tell Angular to check for changes

    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  removeTodo(i:number){
    this.todos.splice(i, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  checkForImportance(todo: string){
    return todo.includes('important');
  }

  trackByIndex(index: number, todo:string){
    return index;
  }
}
