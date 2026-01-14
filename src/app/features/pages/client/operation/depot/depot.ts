import { Component, inject } from '@angular/core';
import { DepotService } from '../../../../services/operation/depot/depot';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperationReq } from '../../../../../interfaces/req/operation-req';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-depot',
  imports: [ReactiveFormsModule,NgClass,NgIf],
  templateUrl: './depot.html',
  styleUrl: './depot.css',
})
export class Depot {

  private depotService=inject(DepotService);
  private fb=inject(FormBuilder)
  private submitted=false
   alert:{
    show: boolean;
    message:String;
    type :'success' | 'error' | 'warning';
   }={
     show: false,
     message:'',
     type:'success'
   }
   isLoading=false;

  fromGroup= this.fb.group({
    amount:[0,[Validators.required,Validators.min(10)]]
  })
  onSubmit(){
   this.submitted=true
   if(this.fromGroup.valid){
    this.isLoading=true;
    this.hidenAlert();
    this.depotService.depot(this.fromGroup.value as OperationReq).subscribe({
      next: (response) => {
        this.isLoading=false;
        this.showAlert("depot avec success", 'success')
        this.fromGroup.reset();
        this.submitted=true
      },

      error : (error)=>{
         this.isLoading = false;
      this.showAlert("depot echoee", 'error')
      }
    });


   }else {
      this.showAlert('Veuillez remplir correctement le formulaire', 'warning');
    }
  }

  showAlert(message: string , type: 'success' | 'error' | 'warning'){
    
    this.alert.show=true
    this.alert.message=message
    this.alert.type=type

    setTimeout(()=>{
      this.hidenAlert();
    },4000)
  }
  hidenAlert(){
    this.alert.show=false;
  }
}
