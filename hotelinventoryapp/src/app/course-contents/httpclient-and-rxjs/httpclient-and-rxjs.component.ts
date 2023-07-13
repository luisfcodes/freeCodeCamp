import { Component, OnInit } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
import { Room } from './interfaces/rooms';

@Component({
  selector: 'app-httpclient-and-rxjs',
  templateUrl: './httpclient-and-rxjs.component.html',
  styleUrls: ['./httpclient-and-rxjs.component.scss']
})
export class HttpclientAndRxjsComponent implements OnInit{

  roomList: Room[] = []

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
    this.getRooms();

    this.stream.subscribe({
      next: (data) => console.log(data),
      complete: () => console.log('done')
    })

    this.stream.subscribe((data) => console.log(data))
  }

  getRooms() {
    this.roomsService.getRooms().subscribe((data: Room[]) => {
      this.roomList = data;
      console.log(data);
    })
  }

  addRoom() {
    const room: Room = {
      // roomNumber: '101', // Api will generate this
      roomType: 'Premium',
      amenities: 'TV, AC, WiFi',
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1689126494042-39f69fa4c8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 4
    }

    this.roomsService.addRoom(room).subscribe((data: Room[]) => {
      console.log(data);
      this.getRooms();
    })
  }

  editRoom(id: string) {
    const room: Room = {
      roomNumber: id,
      roomType: 'Premium',
      amenities: 'TV, AC, WiFi',
      price: 2000,
      photos: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 4.5
    }

    this.roomsService.updateRoom(id, room).subscribe((data: Room[]) => {
      console.log(data);
      this.getRooms();
    })
  }

  deleteRoom(id: string) {
    this.roomsService.deleteRoom(id).subscribe((data: Room[]) => {
      console.log(data);
      this.getRooms();
    })
  }
}
