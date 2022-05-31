import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersSevice } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[] = this.usersSer.activeUsers;
  constructor(private usersSer:UsersSevice){}
  onSetToInactive(id: number) {
  this.usersSer.onSetInactive(id)
  }
}
