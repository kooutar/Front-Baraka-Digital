import { Component, inject } from '@angular/core';
import { HasAccount } from '../../../services/Account/has-account';
import { NgIf } from '@angular/common';
import { Depot } from '../../../pages/client/operation/depot/depot';

@Component({
  selector: 'app-sidebar-client',
  imports: [NgIf],
  templateUrl: './sidebar-client.html',
  styleUrl: './sidebar-client.css',
})
export class SidebarClient {
    private hasAccount =inject(HasAccount);
    accountExist$= this.hasAccount.hasAccount();
}
