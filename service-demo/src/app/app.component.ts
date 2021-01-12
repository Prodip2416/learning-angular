import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-demo';
  name = '';
  constructor(private users: UsersService) {
    const data = this.users.getData();
    console.log(data);
    this.name = data.name;
  }
}
