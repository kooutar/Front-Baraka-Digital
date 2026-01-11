import { Inject, Injectable } from '@angular/core';
import { Token } from '../token';
import { User } from '../../../features/auth/models/response/user';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(@Inject(Token) private token: Token) {}

  getUserConected(): User | null {
    const payload = this.token.decodeToken();
    if (!payload) {
      return null;
    }
    return {
      email: payload.sub,
      role: payload.role,
    };
   


  }
  
}