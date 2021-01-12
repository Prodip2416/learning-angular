import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData() {
    return {
      name: 'Prodip',
      age: 26
    };
  }
}
