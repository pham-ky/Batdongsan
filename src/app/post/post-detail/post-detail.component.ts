import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';
import { PostService } from 'src/app/lib/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent extends BaseComponent implements OnInit {

  post: any;
  constructor(private activatedRoute: ActivatedRoute,
    private _postService : PostService,
    injector: Injector) { 
      super(injector);
    }
    ngAfterViewInit() { 
      this.loadScripts();
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
      console.log(this.post);
      
    });  
  }

}
