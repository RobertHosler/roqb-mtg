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


  //exits requests if this object is destroyed
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    // this.getAllUsers();
    // this._usersSub = this.usersService.users.subscribe(users => this.users = users.);

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  
}
