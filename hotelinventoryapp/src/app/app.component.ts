import { Component } from '@angular/core';
import { MainService } from './course-contents/advanced-routing/services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   constructor(private mainService: MainService) {}

}
