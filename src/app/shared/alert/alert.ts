import { Component, inject } from '@angular/core';
import { AlertService } from '../../features/services/alert/alert-service';
import{ CommonModule} from "@angular/common"


@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
 alertService=inject(AlertService);

}
