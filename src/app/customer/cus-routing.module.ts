import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { CustomerComponent } from './customer.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../lib/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children:[
      {
        path: 'add-post',
        component: AddPostComponent,
        canActivate: [AuthGuard],
      },
      // {
      //   path: '',
      //   component: ,
      // },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class CusRoutingModule {}