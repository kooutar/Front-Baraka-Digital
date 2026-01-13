import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasAccount {
  
  private accountExists: boolean = false;
  private  http = inject(HttpClient);

  hasAccount():Boolean  {

    const response= this.http.get<boolean>('api/client/has-account');
    if(response){
        this.accountExists=true;
    }
    return this.accountExists;
  }
  







  

}
