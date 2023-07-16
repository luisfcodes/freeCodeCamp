import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any' // Setting ProvidedIn to any means that the service will create a new instance of the service for every module that working with lazy loading.
})
export class MainService {

  constructor() {
    console.log('I am in MainService constructor');
  }
}
