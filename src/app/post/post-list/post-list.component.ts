import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/lib/base-component';
import { PostService } from 'src/app/lib/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent extends BaseComponent implements OnInit {

  list: any;
  page: any;
  totalItems: any;
  item_group_id: any;
  constructor(private activatedRoute: ActivatedRoute,
    private _postService: PostService,
    private injector: Injector) {
    super(injector); }

  ngOnInit(): void {
    this.list = [];
    this.page = 1;

    this._route.params.subscribe(params => {
      this.item_group_id = params['id'];
      this._postService.postlist('/GetPosts', { page: this.page,  item_group_id: this.item_group_id })
        .subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;
          
        }, err => { });
    });
  }
  loadPage(page: any) {

    this._route.params.subscribe(params => {
      let id = params['id'];
      this._postService.postlist('/GetPosts', { page: this.page, item_group_id: this.item_group_id})
      .subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
      }, err => { });
    });
  }

}
