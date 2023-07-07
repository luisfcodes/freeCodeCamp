import { Component, Self } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
  providers: [RoomsService] // Services included in providers array create a new instance of the service for each component
})
export class ComponentOneComponent {

  constructor(@Self() private roomsService: RoomsService ) { } // @Self() decorator ensures that the service is not injected from the parent component
  // @Host() decorator ensures that the components loaded inside into the component will start using the instance of the service from the parent component
}
