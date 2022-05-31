import { Component } from '@angular/core';
import { UsersSevice } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = this.usersService.activeUsers;
  inactiveUsers = this.usersService.inactiveUsers;
  constructor(private usersService:UsersSevice){}
  onSetToInactive(id: number) {
    this.usersService.onSetInactive(id)
  }

  onSetToActive(id: number) {
    this.usersService.onSetActive(id)
  }
}
