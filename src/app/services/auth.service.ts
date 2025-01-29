import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:{id:number; name:string; email:string} | null = null;

  constructor(private http: HttpClient) {
    
  }

  public login(email:string, password:string){
    return this.http.get<{id: number; name: string; email: string}>("https://jsonplaceholder.typicode.com/users/1");
  };

  public logout(){
    this.user = null;
    localStorage.removeItem("user");
  }
}
