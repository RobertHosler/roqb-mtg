import { Component, OnInit } from '@angular/core';
import { Image } from '../components/img-list/img-list.component';
import { headerInfo } from '../data/header';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements OnInit {
  showProjects = false;

  proLinks = [
    {
      router: true,
      label: 'View Résumé',
      destPath: 'resume',
    },
    {
      router: false,
      newWindow: true,
      label: 'Connect on Linkedin',
      destPath: 'https://www.linkedin.com/in/robert-hosler-885074106/',
    },
  ];

  personalLinks = [
    {
      router: true,
      label: 'See my Projects',
      destPath: '/dev/personal',
    },
    {
      router: false,
      newWindow: true,
      label: 'Follow me on Github',
      destPath: 'https://www.github.com/roberthosler/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    let top = el.offsetTop;
    setTimeout(() => {
      window.scrollTo(0, top - headerInfo.headerHeight);
    });
  }
}
