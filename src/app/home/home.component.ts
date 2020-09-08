import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  cards: { href: string; title: string; description: string }[] = [
    {
      href: '/updates',
      title: "What's New?",
      description:
        'Check out our most recent update notes for info on what is new in the app!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
