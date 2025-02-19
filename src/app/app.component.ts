import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoEntryComponent } from './components/todo-entry/todo-entry.component';
import { TodoAddComponent } from "./components/todo-add/todo-add.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    NgFor,
    HeaderComponent,
    FooterComponent,
    TodoEntryComponent,
    TodoAddComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private authService: AuthService){
    const user = localStorage.getItem('user');

    if(user){
      this.authService.user = JSON.parse(user);
    }
  }

}
