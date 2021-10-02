import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  heading: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data.name) {
        this.heading = data.name;
      }
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // this.navFixed =
    //   (window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop ||
    //     0) > this.scrollOffset;
  }
}
