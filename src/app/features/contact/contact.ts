import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  handleSubmit(event: Event) {
    event.preventDefault();
    //TODO think of contacting feature flow
    console.log('form submitted');
  }
}
