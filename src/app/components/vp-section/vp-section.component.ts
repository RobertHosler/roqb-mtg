import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/data/link';

@Component({
  selector: 'app-vp-section',
  templateUrl: './vp-section.component.html',
  styleUrls: ['./vp-section.component.scss']
})
export class VpSectionComponent implements OnInit {

  @Input()
  even = true;
  
  @Input()
  maxWidth = false;

  @Input()
  heading: string;

  @Input()
  links: Link[];

  @Input()
  topImgPath: string;

  @Input()
  bottomImgPath: string;

  constructor() { }

  ngOnInit(): void {
  }

}
