import { Component } from '@angular/core';
import { SidebarClient } from '../../../components/client/sidebar-client/sidebar-client';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-client-layout-component',
  imports: [SidebarClient, RouterOutlet],
  templateUrl: './client-layout-component.html',
  styleUrl: './client-layout-component.css',
})
export class ClientLayoutComponent {

}
