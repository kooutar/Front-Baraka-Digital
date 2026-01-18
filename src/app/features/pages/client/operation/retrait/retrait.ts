import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RetraitService } from '../../../../services/operation/retrait-service';
import { AlertService } from '../../../../services/alert/alert-service';
import { OperationReq } from '../../../../../interfaces/req/operation-req';
import { Alert } from "../../../../../shared/alert/alert";

@Component({
  selector: 'app-retrait',
  imports: [ReactiveFormsModule, Alert],
  templateUrl: './retrait.html',
  styleUrl: './retrait.css',
})
export class Retrait {
  
   private retraitService = inject(RetraitService);
  private fb = inject(FormBuilder);
  private alertService = inject(AlertService);
  private submitted = false;

  isLoading = false;

  formGroup = this.fb.group({
    amount: [0, [Validators.required, Validators.min(10)]]
  });

  onSubmit() {
    this.submitted = true;

    if (this.formGroup.valid) {
      this.isLoading = true;

      this.retraitService.retrait(this.formGroup.value as OperationReq).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.alertService.show('Retrait effectué avec succès', 'success');
          this.formGroup.reset();
          this.submitted = false;
        },
        error: (error) => {
          this.isLoading = false;
          this.alertService.show('Échec du retrait', 'error');
        }
      });

    } else {
      this.alertService.show('Veuillez remplir correctement le formulaire', 'warning');
    }
  }

}
