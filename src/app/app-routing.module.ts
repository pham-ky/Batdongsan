import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
  },

  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  // },
  {
    path: '**',
    component: FileNotFoundComponent,
  },  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}