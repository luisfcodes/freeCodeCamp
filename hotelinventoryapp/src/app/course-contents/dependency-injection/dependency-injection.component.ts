import { Component, OnInit, SkipSelf} from '@angular/core';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {

  constructor(@SkipSelf() private roomsService: RoomsService ) { } // Services injected into the constructor do not create a new instance of the service for each component
  // @SkipSelf() decorator ensures not verify the parent component for the service
  // @Optional() decorator ensures that the service is not mandatory for the component

  ngOnInit(): void {
    console.log(this.roomsService.getRooms());
  }
}
