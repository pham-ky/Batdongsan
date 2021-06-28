import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';
import { PostService } from 'src/app/lib/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent extends BaseComponent implements OnInit {

  title="Chi tiết bài đăng"
  post: any;
  list: any;
  constructor(private activatedRoute: ActivatedRoute,
    private _postService : PostService,
    injector: Injector) { 
      super(injector);
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(
      // first(),
      map((params) => params.get('id')),
      switchMap((id) => this._postService.getDetail(id))
    )
    .subscribe((res) => {
      this.post = res;
      
    });  
    
    this._postService
    .getTuongTu()
    .pipe(first())
    .subscribe((res)=>{
      this.list = res;
      
    })
  }

  ngAfterViewInit() { 
    this.loadScripts();
  }
}
