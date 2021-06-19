import { Component, OnInit } from '@angular/core';
import { PostService } from '../../lib/post.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postNew: any;
  constructor(private _postService : PostService) { }

  ngOnInit(): void {
    this._postService
    .getNew()
    .pipe(first())
    .subscribe((res)=>{
      this.postNew=res;
    });

  }

}
