import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = "";
  name = "Prodip";
  show = true;
  color = "green";
  getEvent(evt: any) {
    this.myName = evt;
    console.log(evt);
  }
  disableVale = true;
  clickMe() {
    this.disableVale = false;
  }

  data = [
    {
      name: 'Prodip',
      age: 26
    },
    {
      name: 'Anik',
      age: 30
    },
    {
      name: 'Salekin',
      age: 30
    },
    {
      name: 'Wali',
      age: 35
    },
    {
      name: 'Mamun',
      age: 33
    }
  ];

  getFormValue(v) {
    console.log(v);
  }
  color='green';
  err = false;
  changeColor() {
    this.err = !this.err;
  }
}
