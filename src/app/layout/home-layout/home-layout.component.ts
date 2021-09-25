import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const bodyEl = document.getElementsByTagName('body')[0];
    this.renderer.addClass(bodyEl, 'bg-gray');
  }

  ngOnDestroy(): void {
    const bodyEl = document.getElementsByTagName('body')[0];
    this.renderer.removeClass(bodyEl, 'bg-gray');
  }

}
