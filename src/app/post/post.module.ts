import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const prodRoute: Routes = [
  {
    path: 'detail/:id',
    component: PostDetailComponent,
  },
  
];

@NgModule({
  declarations: [
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoute),
    HttpClientModule
  ]
})
export class PostModule { }
