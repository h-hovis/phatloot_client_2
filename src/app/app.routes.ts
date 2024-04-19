import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { noAuthGuard } from './no-auth.guard';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    canActivate: [noAuthGuard],
  },

  { path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    canActivate: [noAuthGuard],
  },

  { path: 'product-list',
    loadComponent: () => import('./product-list/product-list.component').then((m) => m.ProductListComponent),
    canActivate: [authGuard],
  },

  { path: 'product',
    loadComponent: () => import('./product/product.component').then((m) => m.ProductComponent),
    canActivate: [authGuard],

  },

  { path: 'signup',
    loadComponent: () => import('./signup/signup.component').then((m) => m.SignupComponent),
    canActivate: [noAuthGuard],
  },

  { path: 'addProduct',
    loadComponent: () => import('./product/product.component').then((m) => m.ProductComponent),
    canActivate: [authGuard],
  },

];
