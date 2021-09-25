import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  userName: string;

  users: Observable<string[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

  onSubmit() {
    this.usersService.addUser(this.userName);
  }

}
