import { Component, Injector, OnInit } from '@angular/core';
import { PostService } from '../../lib/post.service';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent extends BaseComponent implements OnInit {

  postNew: any;
  constructor(private _postService : PostService,
    injector: Injector) { 
      super(injector);
    }
    ngAfterViewInit() { 
      this.loadScripts();
    }

  ngOnInit(): void {
    this._postService
    .getNew()
    .pipe(first())
    .subscribe((res)=>{
      this.postNew=res;
    });

  }

}
