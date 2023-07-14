import { Injectable } from '@angular/core';
import { Room } from '../interfaces/rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private httpClient: HttpClient) { }

  getRooms() {
    return this.httpClient.get<Room[]>('/api/rooms');
  }

  getRoomById(id: string) {
    return this.httpClient.get<Room>(`/api/rooms/${id}`);
  }

  addRoom(room: Room) {
    return this.httpClient.post<Room[]>('/api/rooms', room);
  }

  updateRoom(id: string, room: Room) {
    return this.httpClient.put<Room[]>(`/api/rooms/${id}`, room);
  }

  deleteRoom(id: string) {
    return this.httpClient.delete<Room[]>(`/api/rooms/${id}`);
  }
}
