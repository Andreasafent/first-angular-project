import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoEntryComponent } from './components/todo-entry/todo-entry.component';
import { TodoAddComponent } from "./components/todo-add/todo-add.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, FormsModule, NgFor, TodoEntryComponent, TodoAddComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'My Todo list';
  todos: string[]=[
    "Wash dishes",
    "Mop floor"
  ];
  editTodoIndex = -1

  constructor(private cdr: ChangeDetectorRef){

  }

  addToTodoList(todo: string){
    if(todo === ""){
      alert("Please enter a task");
      return;
    }

    this.todos.push(todo);
    this.cdr.detectChanges();  // Tell Angular to check for changes
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

  checkForImportance(todo: string){
    return todo.includes('important');
  }

  trackByIndex(index: number, todo:string){
    return index;
  }
}
