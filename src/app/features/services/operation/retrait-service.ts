import { inject, Injectable } from '@angular/core';
import { OperationReq } from '../../../interfaces/req/operation-req';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RetraitService {
  urlApi=environment.apiUrl+'/client/operations/withdraw';
  httpClient=inject(HttpClient);
  retrait(data:OperationReq) {
    return this.httpClient.post(this.urlApi,data);
    }
}
