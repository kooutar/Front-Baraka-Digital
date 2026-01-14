import { Routes } from '@angular/router';

import { Login } from './features/auth/pages/login/login';
import  {Dashboard} from './features/pages/client/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';
import { Depot } from './features/pages/client/operation/depot/depot';
import { ClientLayoutComponent } from './features/pages/client/client-layout-component/client-layout-component';

export const routes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    {
          path:'client',
          component:ClientLayoutComponent,
          canActivate:[authGuard],
          children:
          [
              {
                path:'dashboard',
                component:Dashboard,
              },
              {
                  path: 'depot',  
                  component: Depot
              }
          
        ]
    }
] 
