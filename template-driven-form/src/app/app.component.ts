import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  userData = {
    name: 'Prodip Sarker',
    email: 'prodip@gmail.com',
    password: 'pro'
  }
  onSubmit(data) {
    console.table(data);
  }
}
