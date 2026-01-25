import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { OperationReq } from '../../../../interfaces/req/operation-req';
import { Observable } from 'rxjs';
import { OperationResponse } from '../../../../interfaces/response/operation-response';

@Injectable({
  providedIn: 'root',
})
export class VerementService {
  private urlApi= environment.apiUrl+'/client/operations/transfer';
  private httpClient=inject(HttpClient);


  verement(data:OperationReq): Observable<OperationResponse>{
    return this.httpClient.post<OperationResponse>(this.urlApi,data);
  }
   
  
  



}
