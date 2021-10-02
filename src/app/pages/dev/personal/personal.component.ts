import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/components/img-list/img-list.component';
import { Link } from 'src/app/data/link';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {
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

  d42Links: Link[];

  spLinks: Link[];

  constructor() {}

  ngOnInit(): void {
    this.d42Links = [];
    this.d42Links.push({
      destPath: 'http://d42.roqb.me/',
      label: 'Launch drafting4two',
      newWindow: true,
    });
    this.d42Links.push({
      destPath: 'https://github.com/RobertHosler/drafting4two',
      label: 'View on Github',
      newWindow: true,
    });
    this.spLinks = [];
    this.spLinks.push({
      destPath: 'http://app.subjectivepersonality.com/analyzer',
      label: 'Launch Type Analyzer',
      newWindow: true,
    });
    this.spLinks.push({
      destPath: 'https://github.com/RobertHosler/ops-type-points/',
      label: 'View on Github',
      newWindow: true,
    });
    this.spLinks.push({
      destPath:
        'https://subjectivepersonality.wordpress.com/2020/08/19/what-is-ops/',
      label: 'Learn about OPS',
      newWindow: true,
    });
  }
}
