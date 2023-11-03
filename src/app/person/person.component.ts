import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { social } from '../data/social-links';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {

  textArray: string[];
  personalSocialLinks = social.personal;

  sectionOneLinks = [
    {
      router: true,
      label: 'Link One',
      destPath: '/person'
    },
    {
      router: true,
      label: 'Link Two',
      destPath: '/person'
    }
  ];

  qLinks = [
    {
      router: true,
      label: 'Read the Q story',
      destPath: '/person/why-q',
      fragment: 'three-letters'
    }
  ];

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
