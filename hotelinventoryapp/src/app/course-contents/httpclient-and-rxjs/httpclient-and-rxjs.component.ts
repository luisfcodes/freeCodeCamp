import { Component, OnInit } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
import { RoomList } from './interfaces/rooms';

@Component({
  selector: 'app-httpclient-and-rxjs',
  templateUrl: './httpclient-and-rxjs.component.html',
  styleUrls: ['./httpclient-and-rxjs.component.scss']
})
export class HttpclientAndRxjsComponent implements OnInit{

  roomList: RoomList[] = []

  stream = new Observable<number>(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    })
  })

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsService.getRooms().subscribe((data: RoomList[]) => {
      this.roomList = data;
    })

    this.stream.subscribe({
      next: (data) => console.log(data),
      complete: () => console.log('done')
    })

    this.stream.subscribe((data) => console.log(data))
  }
}
