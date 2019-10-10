import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.scss']
})
export class UserstatusComponent implements OnInit {
  userActicvated1 :boolean = false;
  userActicvated2 : boolean = false;

  constructor(public userService : UsersServiceService) { }

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id : number)=>{
        if(id === 1){
          this.userActivated1 = true;
        }
        else{
          this.userActicvated2 = true;
        }
      }
    )
  }


}
