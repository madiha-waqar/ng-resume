import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})

export class ReferenceComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.log('ReferenceComponent initialized');
  }
}
