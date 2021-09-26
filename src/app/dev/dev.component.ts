import { Component, OnInit } from '@angular/core';
import { Image } from '../components/img-list/img-list.component';
import { headerInfo } from '../data/header';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements OnInit {
  d42Images: Image[] = [
    {
      path: '/assets/images/developer/d42-main.PNG',
      alt: 'd42 main',
    },
    {
      path: '/assets/images/developer/d42-winston.PNG',
      alt: 'd42 winston',
    },
    {
      path: '/assets/images/developer/d42-deck.PNG',
      alt: 'd42 deck',
    },
    {
      path: '/assets/images/developer/d42-grid.PNG',
      alt: 'd42 grid',
    },
    {
      path: '/assets/images/developer/d42-pick.PNG',
      alt: 'd42 pick',
    },
    {
      path: '/assets/images/developer/d42-burn.PNG',
      alt: 'd42 burn',
    },
  ];

  opsImages: Image[] = [
    {
      path: '/assets/images/developer/ops-dashboard.PNG',
      alt: 'ops dashboard',
    },
    {
      path: '/assets/images/developer/ops-visual.PNG',
      alt: 'ops visual',
    },
  ];

  showProjects = false;

  constructor() {}

  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    let top = el.offsetTop;
    setTimeout(() => {
      window.scrollTo(0, top - headerInfo.headerHeight);
    });
    // el.scrollIntoView();
  }
}
