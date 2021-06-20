import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';

export const prodRoute: Routes = [
  {
    path: 'detail/:id',
    component: PostDetailComponent,
  },
  {
    path: 'list/:id',
    component: PostListComponent,
  },
  
];

@NgModule({
  declarations: [
    PostDetailComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoute),
    HttpClientModule,
    NgbModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule
  ]
})
export class PostModule { }
