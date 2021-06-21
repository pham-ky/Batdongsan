import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/lib/post.service';
import { UserService } from 'src/app/lib/user.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  list: any;
  page: any;
  totalItems: any;
  user: any;
  id_user: any;
  constructor(private _postService: PostService,
    private _user: UserService,
  ) { }

  ngOnInit(): void {

    this.list = [];
    this.page = 1;

    this._user.user$.subscribe((res) => {
      this.user = res;
      this.id_user = this.user.maTk;
    })

    this._postService.postlist('/GetListPosts', { page: this.page, id_user: this.id_user })
      .subscribe((res) => {
        this.list = res.data;
        this.totalItems = res.totalItems;
        
      })
  }
  loadPage(page: any) {
      this._postService.postlist('/GetListPosts', { page: this.page, id_user: this.id_user})
      .subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
      })
  }
}

