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
  deleteRestu(item) {
    return this.http.delete(`${this.url}/${item}`);
  }
  getDataById(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateData(id, data) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
