import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginRequest } from '../models/login-request';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginResponse } from '../models/response/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  apiUrl:String=environment.apiUrl + '/auth';
  http = inject(HttpClient);
  
  login(data:LoginRequest):Observable<LoginResponse>{
       return this.http.post<LoginResponse>(`${this.apiUrl}/login`,data).pipe(
          map((response)=>{
            if(response.isSuccess){
              console.log('Storing token and role in localStorage' + response.token + ' ' + response.user.role );
              localStorage.setItem('token',response.token);
              localStorage.setItem('role',response.user.role)
            }
            return response;
          })
        );

  }
}