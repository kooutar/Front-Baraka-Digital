import { Component } from '@angular/core';
import { SidebarClient } from '../../../components/client/sidebar-client/sidebar-client';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarClient],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
