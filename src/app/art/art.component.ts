import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
})
export class ArtComponent implements OnInit {
  soiLinks = [
    {
      newWindow: false,
      destPath: 'https://www.youtube.com/watch?v=EWJpFQZN6l8',
      label: 'View on YouTube',
    },
  ];

  mtgLinks = [
    {
      newWindow: true,
      destPath: 'https://imgur.com/a/fdj4O',
      label: 'View Album',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
