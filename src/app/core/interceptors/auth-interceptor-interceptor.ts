import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';


export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
 const  router= inject(Router);
  const token =localStorage.getItem('token');
  if(token){
    const cloneReq= req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    });
     return next(cloneReq).pipe(
    catchError((error: HttpErrorResponse)=>{
     if(error.status == 401){
      console.log(" 401 - utilisateur non connecte")
       router.navigate(['/login'])
     }else if(error.status==403){
      console.log(" 403 - forbidden")
      router.navigate(['/forbidden'])
     }
     return throwError(()=>error);
    })
  )
  }
  return next(req)
  
};
