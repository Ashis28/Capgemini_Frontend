import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login(credentials : any) :Observable<any>{
    if(credentials.username == credentials.password){
      var obj;
      if(credentials.username == 'admin1'){
        obj = {username: 'admin1',role: 'admin'}
      }
      else{
        obj = {username : credentials.username , role : }
      }
    }
  }
}
