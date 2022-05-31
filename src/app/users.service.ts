import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UsersSevice{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor(private logger:CountService){}
  onSetInactive(id:number){
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.logger.userSwitched()
    
}
    onSetActive(id:number){
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.logger.userSwitched()
}
}