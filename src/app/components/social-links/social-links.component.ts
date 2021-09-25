import { Component, Input, OnInit } from '@angular/core';
import { social, SocialLink } from 'src/app/data/social-links';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  @Input()
  hoverEnabled = false;

  socialLinks: SocialLink[];

  showSocialLinks = true;

  constructor() { }

  ngOnInit(): void {
    this.socialLinks = social.links;
    this.socialLinks.forEach(link => {
    });
  }

  hoverSocialLinks() {
    if (this.hoverEnabled) {
      this.showSocialLinks = true;
    }
  }

  endHoverSocialLinks() {
    if (this.hoverEnabled) {
      this.showSocialLinks = false;
    }
  }

}
