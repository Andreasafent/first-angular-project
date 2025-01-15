import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {
  @Output() addTodo = new EventEmitter<string>();

  newTodo: string = "";

  onAddTodo(){
    this.addTodo.emit(this.newTodo);
    this.newTodo = "";
  }
}
