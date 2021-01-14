import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restu',
  templateUrl: './add-restu.component.html',
  styleUrls: ['./add-restu.component.css']
})
export class AddRestuComponent implements OnInit {

  constructor() { }

  restuData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.restuData.value);
  }
}
