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
  color = "red";
  getEvent(evt: any) {
    this.myName = evt;
    console.log(evt);
  }
  disableVale = true;
  clickMe() {
    this.disableVale = false;
  }
}
