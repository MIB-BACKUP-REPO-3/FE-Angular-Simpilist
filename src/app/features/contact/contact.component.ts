import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  handleSubmit(event: Event) {
    event.preventDefault();
    //TODO think of contacting feature flow
    console.log('form submitted');
  }
}
