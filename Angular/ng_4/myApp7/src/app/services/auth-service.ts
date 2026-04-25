import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Admin() : boolean{
    const user = JSON.parse(localStorage.getItem('token') || '()');
  return user.role = "admin"
  }
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }
  
}
