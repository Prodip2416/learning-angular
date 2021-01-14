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

  deleteItem(id) {
    this.restu.deleteRestu(id).subscribe(() => {
      console.log('successfully deleted.');
      this.restuCollection = this.restuCollection.filter(((item) => item.id !== id));
    });
  }
  updateItem(id){
    console.log(id);
  }
}
