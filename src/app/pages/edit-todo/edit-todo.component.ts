import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  imports: [NgIf],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss'
})
export class EditTodoComponent implements OnInit {

  todo!: {id:number, name:string};

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    const todos = localStorage.getItem('todos');
    if(todos){
      const todoArray = JSON.parse(todos) as{id:number; name:string}[];
      this.todo = todoArray.find(todo => todo.id ===id)!;
    }
  }
}
