import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  imports: [],
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.scss'
})
export class TodoEntryComponent {
  @Input() todo:string = "Todo entry";
  @Input() isImportant: boolean = false;
  @Output() remove = new EventEmitter();  
}
