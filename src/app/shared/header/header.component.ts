import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../lib/user.service';
import { LoaiHTService } from '../../lib/loai-ht.service';
import { first } from 'rxjs/operators';
declare let alertify: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;
  id:any;
  ban: any;
  thue: any;
  mua: any;
  canthue: any;
  constructor( private _user: UserService,
    private _LoaiHT: LoaiHTService,
    private router: Router,
    ) { }
  ngOnInit(): void {
    
    this._user.user$.subscribe((res)=> {
      this.user = res;
      this.id = this.user.maTk;
    });

    this._LoaiHT
    .GetLoai(1)
    .pipe(first())
    .subscribe((res)=>{
      this.ban=res;
    });
    
    this._LoaiHT
    .GetLoai(2)
    .pipe(first())
    .subscribe((res)=>{
      this.thue=res;
    });

    this._LoaiHT
    .GetLoai(3)
    .pipe(first())
    .subscribe((res)=>{
      this.mua=res;
    });

    this._LoaiHT
    .GetLoai(4)
    .pipe(first())
    .subscribe((res)=>{
      this.canthue=res;
    });
    
  }

  logout(){
    this._user.logout();
    alertify.success("Đăng xuất thành công");
    setTimeout(() => {
      this.router.navigateByUrl('/customer/login');
    }, 1000);
  }
}
