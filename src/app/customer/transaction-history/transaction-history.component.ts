import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { PostService } from 'src/app/lib/post.service';
import { UserService } from 'src/app/lib/user.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  title='Lịch sử giao dịch'
  list: any;
  page: any;
  totalItems: any;
  user: any;
  id_user: any;
  
  user1: any;
  constructor(private _postService: PostService,
    private _user: UserService,
  ) { }

  ngOnInit(): void {

    this.list = [];
    this.page = 1;

    this._user.user$.subscribe((res) => {
      this.user1 = res;
      this.id_user = this.user1.maTk;
      
    })
    this._user
    .getUserId(this.user1.maTk)
    .pipe(first())
    .subscribe((res)=>{
      this.user=res;
      this.user.soDuTk = this.user.soDuTk.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    })

    this._postService.postlist('/GetHistory', { page: this.page, id_user: this.id_user })
      .subscribe((res) => {
        this.list = res.data;
        this.totalItems = res.totalItems;
        debugger
        for(let i = 0; i< this.totalItems; i++){
          this.list[i].thanhTien = this.list[i].thanhTien.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
        
      })
  }
  loadPage(page: any) {
      this._postService.postlist('/GetHistory', { page: this.page, id_user: this.id_user})
      .subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
        for(let i = 0; i< this.totalItems; i++){
          this.list[i].thanhTien = this.list[i].thanhTien.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
      })
  }
}

