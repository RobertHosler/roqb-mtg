import { Component, HostListener, OnInit } from '@angular/core';
import { routes } from '../app-routing.module';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  green = true;
  links: HeaderLink[] = [
    // {
    //   title: 'Title',
    //   location: '/',
    //   ext: false,
    // }
  ];

  constructor() {
    routes.forEach((route) => {
      if (
        route.component === MainLayoutComponent &&
        route.data &&
        route.data.header
      ) {
        this.links.push({
          location: '/' + route.path,
          title: route.data && route.data.name ? route.data.name : 'Title',
          ext: false,
        });
      }
    });
  }

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    let verticalOffset = window.pageYOffset 
    || document.documentElement.scrollTop 
    || document.body.scrollTop || 0;
    verticalOffset += headerInfo.headerHeight;
    let count = 0;
    let abc = verticalOffset - window.innerHeight;
    while (abc > 0) {
      abc -= (window.innerHeight - headerInfo.headerHeight);
      count++;
    }
    // console.log('scrollingB', verticalOffset, window.innerHeight, abc, count);
    if (count % 2 === 1 && verticalOffset > window.innerHeight) {
      this.green = false;
    } else {
      this.green = true;
    }
  }

}

class HeaderLink {
  location: string;
  title: string;
  ext: boolean;
}

export const headerInfo = {
  headerHeight: 68
}