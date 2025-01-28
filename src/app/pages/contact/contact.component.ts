import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public onSubmit(form: NgForm){
    if(form.valid){
      //Send to an api
      console.log(form.value);
      alert('Contact form submitted successfully');
      form.reset();
    }else{
      alert('Please fill out the form correctly');
    }
  }
}
