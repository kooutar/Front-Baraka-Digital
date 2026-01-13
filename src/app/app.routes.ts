import { Routes } from '@angular/router';

import { Login } from './features/auth/pages/login/login';
import  {Dashboard} from './features/pages/client/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';
import { Transaction } from './features/pages/client/operation/transaction/transaction';
import { Depot } from './features/pages/client/operation/depot/depot';

export const routes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    {
    path:'client/dashboard',
    canActivate:[authGuard],
    component:Dashboard,
    
  },
  {
    path:'client/transactions',
    component:Transaction,
    canActivate:[authGuard],
    children:[
      {
        path:'depot',
        component:Depot,

      }
    ]

  }

    
];
