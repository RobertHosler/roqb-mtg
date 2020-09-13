import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  // currentDocument = this.socket.fromEvent<Document>('document');
  // documents = this.socket.fromEvent<string[]>('documents');

  users = this.socket.fromEvent<string[]>('users');

  // opsTypesSubject: Subject<OpsType[]> = new Subject<OpsType[]>();

  constructor(private socket: Socket) {}

  getUsers() {
    console.log("getUsers")
    this.socket.emit('getUsers');
  }

  addUser(username: string) {
    console.log("addUser")
    this.socket.emit('addUser', { username: username });
  }

}