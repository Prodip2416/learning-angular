import { Component, OnInit } from '@angular/core';
import { RestuService } from '../restu.service';

@Component({
  selector: 'app-list-restu',
  templateUrl: './list-restu.component.html',
  styleUrls: ['./list-restu.component.css']
})
export class ListRestuComponent implements OnInit {

  constructor(private restu: RestuService) { }
  restuCollection = [];
  ngOnInit(): void {
    this.restu.getList().subscribe((result) => {
      console.log(result);
      this.restuCollection = result;
    });
  }

}
