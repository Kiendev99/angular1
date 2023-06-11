import { Component } from '@angular/core';
import {UserService} from '../../../services/user.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  users: any[] 
  constructor(private userr: UserService,private route: Router) {}
  ngOnInit() {
    this.userr.users().subscribe((data:any) => {
       this.users = data.user;
      console.log(this.users);
    });
  }

  userDelete(id: string) {
    this.userr.usersDelete(id).subscribe(() => {
      console.log("1")
    this.route.navigate([""])      
    })}
}
