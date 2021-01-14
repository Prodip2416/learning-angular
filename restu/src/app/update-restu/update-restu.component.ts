import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestuService } from '../restu.service';

@Component({
  selector: 'app-update-restu',
  templateUrl: './update-restu.component.html',
  styleUrls: ['./update-restu.component.css']
})
export class UpdateRestuComponent implements OnInit {
  alert = false;
  constructor(private router: ActivatedRoute, private restu: RestuService) { }
  editData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id);
    this.restu.getDataById(this.router.snapshot.params.id).subscribe((result) => {
      this.editData = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      });
    });
  }
  onUpdate() {
    this.restu.updateData(this.router.snapshot.params.id, this.editData.value).subscribe((result) => {
      console.log(result);
    });
    this.alert = true;
  }
  closeAlert() {
    this.alert = false;
  }
}
