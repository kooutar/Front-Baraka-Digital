import { Injectable } from '@angular/core';
import { BehaviorSubject, timeout } from 'rxjs';
import { Alert, TypeAlert } from '../../../interfaces/alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
   alert:Alert={
    show:false,
    message:'',
    type:'success'
   }
  alertSubject = new BehaviorSubject<Alert>(this.alert);
  alert$=this.alertSubject.asObservable();

  show(message:string , type : TypeAlert){
    this.alertSubject.next({
      show:true,
      message:message,
      type:type
    })

    setTimeout(()=>{
      this.hide()
    },4000)
  }

  hide(){
    this.alertSubject.next({
       show:false,
      message:'',
      type:'success',
    }
     
    )
  }
}
