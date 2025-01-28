import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { NumberAbbreviatePipe } from '../../pipes/number-abbreviate.pipe';

@Component({
  selector: 'app-todo-entry',
  imports: [UpperCasePipe, HighlightDirective, DatePipe, NumberAbbreviatePipe],
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.scss'
})
export class TodoEntryComponent {
  @Input() todo!:{id:number, name:string};
  @Output() remove = new EventEmitter();  
  @Output() edit = new EventEmitter();

  public today = new Date();

}
