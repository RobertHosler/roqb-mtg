import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, OnInit {

  constructor(private usersService: UsersService) {}

  title = 'angular-nodejs-example';

  userName: string;

  // users: string[] = [];

  users: Observable<string[]>;
  // private _usersSub: Subscription;


  //exits requests if this object is destroyed
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    this.users = this.usersService.users;
    // this.getAllUsers();
    // this._usersSub = this.usersService.users.subscribe(users => this.users = users.);

  }

  onSubmit() {
    // this.appService.addUser(this.userName).pipe(takeUntil(this.destroy$)).subscribe(data => {
    //   console.log('message::::', data);
    //   this.userCount = this.userCount + 1;
    //   console.log(this.userCount);
    //   this.userName = '';
    // });
    this.usersService.addUser(this.userName);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  
}
