import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  @Input() hero: any;
  @Output() myFunction: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.hero);

  }
  sendData() {
    let data = {
      name: 'Prodip Sarker',
      age: 26
    };
    this.myFunction.emit(data);
  }

}
