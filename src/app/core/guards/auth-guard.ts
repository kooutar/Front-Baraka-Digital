import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
      
  const router = inject(Router);

  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
if(!token){
  router.navigate(['/login']);
  return false;
}else{
if(state.url.startsWith('/admin') && role !=='ROLE_ADMIN'){
  router.navigate(['/login']);
  return false;
}
if(state.url.startsWith('/agent-bancaire') && role !=='ROLE_AGENT_BANCAIRE'){
  router.navigate(['/login']);
  return false;
}
if(state.url.startsWith('/client') && role !=='ROLE_CLIENT'){
  router.navigate(['/login']);
  return false;
}

  return true;
}

};
