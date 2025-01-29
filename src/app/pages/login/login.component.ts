import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public loading = false;

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
    if (!!this.authService.user){
      this.router.navigate(['/']);
    }
  }

  public onSubmit(form: NgForm){
    if(form.valid){
        this.loading = true;

        //Send to an api
        console.log(form.value);
        this.authService.login(form.value.email, form.value.password)
          .subscribe(
            (value)=>{
              this.authService.user = value;
              localStorage.setItem('user', JSON.stringify(this.authService.user));
              this.loading = false;
              this.router.navigate(['/']);
            });
      }else{
        alert('Please fill out the form correctly');
      }
    }
}
