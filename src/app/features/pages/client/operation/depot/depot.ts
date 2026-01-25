import { Component, inject } from '@angular/core';
import { DepotService } from '../../../../services/operation/depot/depot';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperationReq } from '../../../../../interfaces/req/operation-req';
import { NgClass, NgIf } from '@angular/common';
import { AlertService } from '../../../../services/alert/alert-service';
import { Alert } from "../../../../../shared/alert/alert";

@Component({
  selector: 'app-depot',
  imports: [ReactiveFormsModule,  Alert],
  templateUrl: './depot.html',
  styleUrl: './depot.css',
})
export class Depot {

  private depotService=inject(DepotService);
  private fb=inject(FormBuilder)
  private alertService= inject(AlertService)
  private submitted=false
  
   isLoading=false;

  fromGroup= this.fb.group({
    amount:[0,[Validators.required,Validators.min(10)]]
  })
  onSubmit(){
   this.submitted=true
   if(this.fromGroup.valid){
    this.isLoading=true;
    this.depotService.depot(this.fromGroup.value as OperationReq).subscribe({
      next: (response) => {
        this.isLoading=false;
        this.alertService.show("depot avec success", 'success')
        this.fromGroup.reset();
        this.submitted=true
      },

      error : (error)=>{
         this.isLoading = false;
      this.alertService.show("depot echoee", 'error')
      }
    });


   }else {
      this.alertService.show('Veuillez remplir correctement le formulaire', 'warning');
    }
  }

  
}
