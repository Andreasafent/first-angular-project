import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  imports: [],
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.scss'
})
export class TodoEntryComponent {
  @Input() todo:string = "Todo entry";
  @Output() remove = new EventEmitter();

  checkForImportance(){
    return this.todo.includes('important');
  }
}
