import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../lib/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  user1: any;
  user: any;
  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this._user.user$.subscribe((res)=> {
      this.user1 = res;
      // this.user.soDuTk = this.user.soDuTk.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
      
    });
    this._user
    .getUserId(this.user1.maTk)
    .pipe(first())
    .subscribe((res)=>{
      this.user=res;
      this.user.soDuTk = this.user.soDuTk.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    })
  }

}
