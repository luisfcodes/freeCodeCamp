import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../../httpclient-and-rxjs/interfaces/rooms';
import { RoomsService } from '../../httpclient-and-rxjs/services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{

  room!: Room

  constructor(private router: ActivatedRoute, private roomService: RoomsService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.roomService.getRoomById(params['id']).subscribe(room => this.room = room)
    })
  }
}
