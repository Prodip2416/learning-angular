import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestuService {
  url = 'http://localhost:3000/restaurants';
  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }

  saveRestu(data) {
    return this.http.post(this.url, data);
  }
}
