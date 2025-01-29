import { Component, OnInit } from '@angular/core';
import { TodoAddComponent } from '../../components/todo-add/todo-add.component';
import { TodoEntryComponent } from '../../components/todo-entry/todo-entry.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-my-todos',
  imports: [
    TodoAddComponent,
    TodoEntryComponent,
    NgFor,
  ],
  templateUrl: './my-todos.component.html',
  styleUrl: './my-todos.component.scss'
})

export class MyTodosComponent implements OnInit {
  
  public todos: {title: string, id:number; completed?:boolean}[]=[];

  constructor(private router: Router, private todoService: TodoService){

  }

  ngOnInit(){
    this.todoService.getTodos()?.subscribe(todos => {
      console.log(todos);
      this.todos = todos;
    });
  }

  addToTodoList(todo: string){
    if(todo === ""){
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      title: todo,
      id: Math.floor(Math.random()*100)
    }

    this.todos.push(newTodo);
    // this.cdr.detectChanges();  // Tell Angular to check for changes

    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  removeTodo(idToDelete:number){
    this.todos = this.todos.filter(todo => todo.id !== idToDelete)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  editTodo(id:number){
    this.router.navigate(["/edit-todo", id]);
  }

  checkForImportance(todo: string){
    return todo.includes('important');
  }

  trackByIndex(index: number, todo:{title:string, id:number}){
    return todo.id;
  }
}
