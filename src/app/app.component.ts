import { Component} from '@angular/core';
import { resumeData } from 'src/data/resumedata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular resume assignment';
  resumeData = resumeData;
}



