import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  textArray: string[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('content/person.txt', { responseType: 'text' })
      .subscribe((data) => {
        console.log(data);
        const splitData = data.split(/\r\n/);
        // const splitData = data.split('---');//section split
        this.textArray = [];
        splitData.forEach(row => {
          if (row) {
            //CREATE SECTIONS - split off some other thing
            //TODO - if starts with IMG
            this.textArray.push(row);
          }
        })
      });
  }

}
