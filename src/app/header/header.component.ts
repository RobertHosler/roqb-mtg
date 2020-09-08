import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  links: { location: string; title: string; ext: boolean }[] = [
    { location: 'updates', title: 'Release Info', ext: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
