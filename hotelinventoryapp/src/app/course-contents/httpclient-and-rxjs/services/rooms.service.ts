import { Injectable } from '@angular/core';
import { RoomList } from '../interfaces/rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private httpClient: HttpClient) { }

  getRooms() {
    return this.httpClient.get<RoomList[]>('/api/rooms');
  }
}
