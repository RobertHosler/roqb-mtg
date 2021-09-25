import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css'],
})
export class UpdatesComponent implements OnInit {
  constructor() {}

  updates: {
    date: string;
    title: string;
    lead: string;
    bullets: string[];
  }[] = [
    {
      date: '03.21.2021',
      title: 'Initial',
      lead: 'Created site structure',
      bullets: [
        'home page layout',
        'release notes page',
        'users component'
      ],
    },
  ];

  ngOnInit(): void {}
}
