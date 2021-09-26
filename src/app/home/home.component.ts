import { Component, OnInit } from '@angular/core';
import { social } from '../data/social-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  updateCard: HomeCard = {
    href: '/updates',
    title: "What's New?",
    description:
      'Check out our most recent update notes for info on what is new in the app!',
    class: 'update',
  };

  devCard: HomeCard = {
    href: '/dev',
    title: 'Developer',
    description: 'With 8+ years of experience in web development',
    class: 'dev-card',
  };

  gamerCard: HomeCard = {
    href: '/gamer',
    title: 'Gamer',
    description: 'From table top to desktop to bus stop',
    class: 'gamer-card',
  };

  artCard: HomeCard = {
    href: '/art',
    title: 'Artist',
    description: 'A bonafide doodler and painter', //Adept, Proficient, Certified
    class: 'art-card',
  };

  writeCard: HomeCard = {
    href: '/write',
    title: 'Writer',
    description: 'Blogging and tweeting about personality theory and more',
    class: 'write-card',
  };

  humanCard: HomeCard = {
    href: '/person',
    title: 'Person',
    description: 'Not a robot, but a person just like you', //Surprisingly
    // description: 'Learn more about me',
    class: 'human-card',
  };

  cards: HomeCard[] = [
    // this.updateCard,
    this.devCard,
    this.writeCard,
    this.artCard,
    // this.gamerCard,
    this.humanCard,
  ];

  socialLinks = social.links;
  // [
  //   {
  //     alt: 'YouTube',
  //     destPath: 'https://www.youtube.com/c/roqbinreality',
  //     imgPath: '/assets/images/youtubeLogoRed.png'
  //   },
  //   // {
  //   //   alt: 'LinkedIn',
  //   //   destPath: 'https://www.linkedin.com/in/robert-hosler-885074106/',
  //   //   imgPath: '/assets/images/linkedinLogo.png'
  //   // },
  //   {
  //     alt: 'Facebook',
  //     destPath: 'https://www.facebook.com/roqbthepirate/',
  //     imgPath: '/assets/images/facebookLogo.png'
  //   },
  //   {
  //     alt: 'Twitter',
  //     destPath: 'https://twitter.com/SubjectivePBlog/',
  //     imgPath: '/assets/images/twitterLogoBlue.svg'
  //   },
  //   {
  //     alt: 'Instagram',
  //     destPath: 'https://www.instagram.com/roqb.me/',
  //     imgPath: '/assets/images/instagramLogo.png'
  //   },
  //   {
  //     alt: 'TikTok',
  //     destPath: 'https://vm.tiktok.com/ZMdqy25sL/',
  //     imgPath: '/assets/images/tiktokLogo.svg'
  //   },
  //   {
  //     alt: 'GitHub',
  //     destPath: 'https://github.com/RobertHosler',
  //     imgPath: '/assets/images/githubLightLogo.png'
  //   },
  //   {
  //     alt: 'Discord',
  //     destPath: 'https://www.discordapp.com/users/495057201006772244',
  //     imgPath: '/assets/images/discordLogo.svg'
  //   }
  // ];

  showSocialLinks = false;

  constructor() {}

  ngOnInit(): void {}
}

class HomeCard {
  href: string;
  title: string;
  description: string;
  class: string;
}
