import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersSevice } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = this.usersSer.inactiveUsers;
  constructor(private usersSer:UsersSevice){}
  onSetToActive(id: number) {
    this.usersSer.onSetActive(id)
  }
}
