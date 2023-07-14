import { Component } from '@angular/core';
import { Room } from '../httpclient-and-rxjs/interfaces/rooms';
import { RoomsService } from '../httpclient-and-rxjs/services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent {

  room: Room = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    price: 0,
    rating: 1,
    photos: '',
  }

  constructor(private roomService: RoomsService) { }

  addRoom(roomForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe((room: Room[]) => {
      console.log(room)
    })

    roomForm.resetForm();
  }
}
