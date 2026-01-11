import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
interface JwtPayload {
  sub: string;
  role: string;
  iat: number;
  exp: number;
}
@Injectable({
  providedIn: 'root',
})


export class Token {
   getToken(): string | null {
    return localStorage.getItem('token');
   }

  decodeToken(): JwtPayload | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    return jwtDecode<JwtPayload>(token);
  }

  getUserRole(): string | null{
    const decoded = this.decodeToken();
    return decoded ? decoded.role : null;
  }

  getUserEmail(): string | null{
    return this.decodeToken()?.sub || null;
  }

  isTokenExpired(): boolean {
    return this.decodeToken()?.exp!*1000<Date.now()
  }

}
