import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { PostComponent } from './post/post.component';
import { NewComponent } from './new/new.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

export const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    SlideComponent,
    PostComponent,
    NewComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    HttpClientModule,
  ]
})
export class HomeModule { }
