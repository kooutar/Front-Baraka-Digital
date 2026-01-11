import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthApi } from '../../services/auth-api';
import { LoginRequest } from '../../models/login-request';
import { M } from '@angular/cdk/keycodes';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule , MatFormFieldModule , MatIconModule , MatInputModule , MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
hidePassword = true;
isLoading = false;

  fb = inject(FormBuilder);
  router = inject(Router);
  authApi = inject(AuthApi);

  submitted=false;
  errorMessage = '';
  formGroup=this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  onSubmit(){
    this.submitted=true;
    if(this.formGroup.valid){
      this.authApi.login(this.formGroup.value as LoginRequest).subscribe((response)=>{
        
        if(response.isSuccess){
          this.RedirectToDashboard();
        }
        
      })
    }
  }
  RedirectToDashboard(){
    const role = localStorage.getItem('role');
    if(role=='ROLE_ADMIN'){
      this.router.navigate(['/admin/dashboard']);
    }
    else if(role=='ROLE_USER'){
      this.router.navigate(['/client/dashboard']);
    }
    else if(role=='ROLE_AGENT_BANCAIRE'){
      this.router.navigate(['/agent-bancaire/dashboard']);
    }

  }


}
