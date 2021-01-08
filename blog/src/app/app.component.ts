import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = 'Prodip';
  getFullName() {
    return this.name + ' ' + 'Sarker';
  }
  arr = ['Anik', 'Salekin', 'Prodip'];
  obj = {
    name: 'Prodip',
    age: 26,
    email: 'prodip@gmail.com'
  };

  siteURL = window.location.href;
}
