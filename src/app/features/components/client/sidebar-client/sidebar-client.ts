import { Component, inject } from '@angular/core';
import { HasAccount } from '../../../services/Account/has-account';
import { NgIf } from '@angular/common';
import { Depot } from '../../../pages/client/operation/depot/depot';
import { RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-client',
  imports: [NgIf, RouterLinkActive],
  templateUrl: './sidebar-client.html',
  styleUrl: './sidebar-client.css',
})
export class SidebarClient {
    private hasAccount =inject(HasAccount);
    accountExist$= this.hasAccount.hasAccount();
}
