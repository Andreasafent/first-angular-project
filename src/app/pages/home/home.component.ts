import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private authService: AuthService){

  }

  public toggleUsername(){
    if(this.authService.user.name === "Andreas"){
      this.authService.user.name = "Evikos";
    }else{
      this.authService.user.name = "Andreas";
    }
  }
}
