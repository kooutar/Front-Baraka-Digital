import { Component, inject, Inject } from '@angular/core';
import { VerementService } from '../../../../services/operation/verement/verement-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperationReq } from '../../../../../interfaces/req/operation-req';
import { AlertService } from '../../../../services/alert/alert-service';
import { OperationResponse } from '../../../../../interfaces/response/operation-response';
import { Alert } from "../../../../../shared/alert/alert";

@Component({
  selector: 'app-virement',
  imports: [Alert,ReactiveFormsModule  ],
  templateUrl: './virement.html',
  styleUrl: './virement.css',
})
export class Virement {
  private verementService=inject(VerementService);
  private fb=inject(FormBuilder);
  private alert=inject(AlertService);
  private submitted=false;
   isLoding=false;
  formGroup=this.fb.group({
    amount:[0,[Validators.required,Validators.min(10)]],
    destination:['',[Validators.required]]
  })

  onSubmit(){
    this.submitted=true;
    if(this.formGroup.valid){
      this.isLoding=true;
      
      this.verementService.verement(this.formGroup.value as OperationReq).subscribe({
        next: (response:OperationResponse)=>{
          this.isLoding=false;
          this.formGroup.reset();
          this.alert.show("verement fais avec succes ", 'success');
        },

        error: (error:any)=>{
           this.isLoding=false;
          this.alert.show("le compte destinataire n'existe pas  ", 'error');
        }
      })


    }
  }

}
