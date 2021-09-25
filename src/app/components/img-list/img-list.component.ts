import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})
export class ImgListComponent implements OnInit {

  @Input() list: Image[]

  timer;
  currentIndex = 0;
  currentImage: Image;

  constructor() { }

  ngOnInit(): void {
    console.log(this.list);
    this.currentImage = this.list[this.currentIndex];
    this.timer = setInterval(() => {this.nextImage()}, 5000);
  }

  ngonDestroy(): void {
    clearInterval(this.timer);
  }
  
  nextImage() {
    clearInterval(this.timer);
    let index = this.currentIndex + 1;
    if (index > this.list.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = index;
    }
    this.currentImage = this.list[this.currentIndex];
    this.timer = setInterval(() => {this.nextImage()}, 5000);
  }

  nextIndex() {
    
  }

}


export class Image {
  path: string;
  alt: string;
}