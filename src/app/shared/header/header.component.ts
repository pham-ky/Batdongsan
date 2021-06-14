import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../lib/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;
  id:any;
  constructor( private _user: UserService,
    private router: Router,
    ) { }
  ngOnInit(): void {
    
    this._user.user$.subscribe((res)=> {
      this.user = res;
      this.id = this.user.maTk;
    })
    // console.log(this.id);
    
  }

  logout(){
    this._user.logout();
    alert("Đăng xuất thành công");
    setTimeout(() => {
      this.router.navigateByUrl('/customer/login');
    }, 1000);
  }
}
