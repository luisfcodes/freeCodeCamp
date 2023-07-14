import { Component } from '@angular/core';
import { RoomsService } from '../httpclient-and-rxjs/services/rooms.service';
import { Room } from '../httpclient-and-rxjs/interfaces/rooms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-routing-basics',
  templateUrl: './routing-basics.component.html',
  styleUrls: ['./routing-basics.component.scss']
})
export class RoutingBasicsComponent {

  roomList: Observable<Room[]> = this.roomService.getRooms();

  constructor(private roomService: RoomsService) { }
}
