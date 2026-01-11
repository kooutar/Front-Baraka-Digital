import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginRequest } from '../models/login-request';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginResponse } from '../models/response/login-response';
import { Token } from '../../../core/services/token';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  apiUrl:String=environment.apiUrl + '/auth';
  http = inject(HttpClient);
  tokenService = inject(Token);
  
  login(data:LoginRequest):Observable<LoginResponse>{
       return this.http.post<LoginResponse>(`${this.apiUrl}/login`,data).pipe(
          map((response)=>{
              localStorage.setItem('token',response.token);
              localStorage.setItem('role',this.tokenService.getUserRole() || '');
            return response;
          })
        );

  }
}