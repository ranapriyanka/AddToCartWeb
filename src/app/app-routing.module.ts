import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./component/products/products.module').then(module => module.ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./component/cart/cart.module').then(module => module.CartModule)
  }
  // {
  //   path: 'header',
  //   loadChildren: () => import('./component/header/header.module').then(module => module.HeaderModule) 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
