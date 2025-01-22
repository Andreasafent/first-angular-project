import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  imports: [],
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.scss'
})
export class TodoEntryComponent {
  @Input() todo!:{id:number, name:string};
  @Output() remove = new EventEmitter();  
  @Output() edit = new EventEmitter();
}
