import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CusRoutingModule } from './cus-routing.module';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { NaptienComponent } from './naptien/naptien.component';

@NgModule({
  declarations: [
    CustomerComponent,
    AddPostComponent,
    LoginComponent,
    NaptienComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CusRoutingModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    HttpClientModule,
    CalendarModule,
    ButtonModule
  ]
})
export class CustomerModule { }
