import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpService: HttpClient) { }

  bookRoom(booking: any){
    return this.httpService.post('https://jsonplaceholder.typicode.com/posts', booking)
  }
}
