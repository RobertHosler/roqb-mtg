import { Component, OnInit } from '@angular/core';
import { routes } from '../app-routing.module';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  links: HeaderLink[] = [
    // {
    //   title: 'Title',
    //   location: '/',
    //   ext: false,
    // }
  ];

  constructor() {
    routes.forEach(route => {
      if (route.component === MainLayoutComponent && route.data && route.data.header) {
        this.links.push({
          location: '/' + route.path,
          title: route.data && route.data.name ? route.data.name : 'Title',
          ext: false
        });
      }
    });
  }

  ngOnInit(): void {}
}

class HeaderLink {
  location: string;
  title: string;
  ext: boolean;
}