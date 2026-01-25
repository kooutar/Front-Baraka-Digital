import { inject, Inject, Injectable } from '@angular/core';
import { Token } from '../token';
import { User } from '../../../features/auth/models/response/user';
import { HasAccount } from '../../../features/services/Account/has-account';



@Injectable({
  providedIn: 'root',
})
export class UserService {
 private token=inject(Token);
 
   
  getUserConected(): User | null {
    const payload = this.token.decodeToken();
    if (!payload) {
      return null;
    }
     
    return {
      email: payload.sub,
      role: payload.role,
     // Placeholder value
    };
   


  }
  
}