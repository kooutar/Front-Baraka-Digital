import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { OperationResponse } from '../../../../interfaces/response/operation-response';
import { OperationReq } from '../../../../interfaces/req/operation-req';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepotService {
  urlApi=environment.apiUrl+'/client/operations/deposit';
  httpClient=inject(HttpClient);
  depot(data:OperationReq) {
    return this.httpClient.post(this.urlApi,data);
    }
  }


