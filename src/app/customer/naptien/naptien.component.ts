import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/lib/user.service';

@Component({
  selector: 'app-naptien',
  templateUrl: './naptien.component.html',
  styleUrls: ['./naptien.component.css']
})
export class NaptienComponent implements OnInit {

  user: any;
  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this._user.user$.subscribe((res)=> {
      this.user = res;
    });
  }

}
