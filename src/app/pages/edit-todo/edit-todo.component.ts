import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-edit-todo',
  imports: [NgIf],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss'
})
export class EditTodoComponent implements OnInit {

  todo!: {id:number, title:string; completed?:boolean};

  constructor(private route: ActivatedRoute, private todoService: TodoService){

  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);

    this.todoService.getTodo(id).subscribe(todo => {
      this.todo = todo;
    });
  }
}
