import { Component, Inject } from '@angular/core';
import { SidebarClient } from '../../../components/client/sidebar-client/sidebar-client';
import { User } from '../../../auth/models/response/user';
import { UserService } from '../../../../core/services/user/user-service';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarClient],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  user: User | null;

  constructor(@Inject(UserService) private userService: any) {
    this.user = this.userService.getUserConected();
  }
}