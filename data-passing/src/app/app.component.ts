import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-passing';
  name = [
    {
      name: 'Prodip',
      age: 26
    },
    {
      name: 'Anik',
      age: 26
    },
    {
      name: 'Salekin',
      age: 26
    },
    {
      name: 'Wali',
      age: 26
    },
    {
      name: 'Shahana',
      age: 26
    }
  ];
  myName = '';
  myFunction(data: any) {
    console.log(data);
    this.myName = data.name;
  }
}
