import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getTodos(){
    const userId = this.authService.user?.id;

    if(!userId){ return; }

    return this.http.get<{title:string; id:number; completed?:boolean}[]>("https://jsonplaceholder.typicode.com/todos?userId="+userId);
  }

  public getTodo(todoId:number){
    return this.http.get<{title:string; id:number; completed?:boolean}>("https://jsonplaceholder.typicode.com/todos/"+todoId);

  }
}
