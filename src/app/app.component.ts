import { UsersService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor(private userService: UsersService){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.userActivated.subscribe(
      (id: number) => {
        if(id == 1){
          this.user1Activated =true;
        }else if(id == 2){
          this.user2Activated =true;
        }
      }
    )
  }

}
