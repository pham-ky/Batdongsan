import { Component, OnInit } from '@angular/core';
import { UserService } from '../../lib/user.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { first } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

declare let alertify: any;

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.password === v.confirmPassword
    ? null
    : {
        passwordnotmatch: true,
      };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title='Đăng nhập'
  formLogin: FormGroup| any;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onLogin() {
    var userLogin = {
      TaiKhoan: this.formLogin.get('username').value,
      MatKhau: this.formLogin.get('password').value,
    };
    this.userService
      .login(userLogin)
      .pipe(first())
      .subscribe(
        (user) => {
          if (user == null) {
            alertify.error("Đăng nhập thất bại");
            
            this.clearFormLogin();
          } else {
            alertify.success("Đăng nhập thành công");
            setTimeout(() => {
              this.router.navigateByUrl('/home');
            }, 500);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  clearFormLogin() {
    this.formLogin.reset();
  }

}
