import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact', 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent { 
  @Input() basicInfo: any;

  Send() {
    alert('Your message has been sent! We will get back to you soon.');
  }
}


