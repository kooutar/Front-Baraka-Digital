import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-retrait',
  imports: [NgClass, NgIf , ReactiveFormsModule],
  templateUrl: './retrait.html',
  styleUrl: './retrait.css',
})
export class Retrait {
  private fb=inject(FormBuilder)
  
  alert:{
    show: boolean;
    message:String;
    type :'success' | 'error' | 'warning';
   }={
     show: false,
     message:'',
     type:'success'
   }

   fromGroup=this.fb.group({
    amount:[0,[Validators.required,Validators.min(10)]],
   })

   onSubmit(){

   }
   showAlert(){
    
   }
   hidenAlert(){

   }

}
