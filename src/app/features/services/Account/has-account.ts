import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasAccount {
  
  private accountExists: boolean = false;
  http = inject(HttpClient)

  hasAccount():void  {

    const response= this.http.get<boolean>('api/client/has-account');
    if(response){
        this.accountExists=true;
    }

  }
  







  

}
