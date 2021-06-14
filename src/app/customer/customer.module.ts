import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CusRoutingModule } from './cus-routing.module';


@NgModule({
  declarations: [
    CustomerComponent,
    AddPostComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CusRoutingModule
  ]
})
export class CustomerModule { }
