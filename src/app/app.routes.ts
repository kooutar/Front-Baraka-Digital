import { Routes } from '@angular/router';

import { Login } from './features/auth/pages/login/login';
import  {Dashboard} from './features/pages/client/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    {

    path:'client/dashboard',
    canActivate:[authGuard],
    component:Dashboard

  }

    
];
