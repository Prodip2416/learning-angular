import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestuService } from '../restu.service';

@Component({
  selector: 'app-add-restu',
  templateUrl: './add-restu.component.html',
  styleUrls: ['./add-restu.component.css']
})
export class AddRestuComponent implements OnInit {

  constructor(private restu: RestuService) { }
  alert = false;
  restuData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  ngOnInit(): void {
  }
  onSubmit() {
    this.restu.saveRestu(this.restuData.value).subscribe((result) => {
      console.log('Result is here:' + result);
      this.alert = true;
      this.restuData.reset({});
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
