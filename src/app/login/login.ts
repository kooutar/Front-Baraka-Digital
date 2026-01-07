import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    formObject={
      email: '',
      password: ''
    }
    errorMessage = '';

    constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://localhost:8080/api/auth/login', this.formObject)
      .subscribe({
        next: (response) => {
          console.log('Login success', response);
          localStorage.setItem('token', response.token);
          // rediriger vers la page principale
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Login failed. Vérifiez vos identifiants';
        }
      });
  }
    
}
