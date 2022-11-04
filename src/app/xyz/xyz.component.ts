import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor(private servis: GetdataService) { }

  posts: any[] = [];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.servis.getPosts().subscribe(
      {
      next: (value) => (this.posts = value),
      error: (err) => console.error(err),
      complete: () => { console.log('complete');
      },
    }
   );
  }

}
