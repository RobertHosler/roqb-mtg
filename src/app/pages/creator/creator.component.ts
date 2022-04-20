import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
})
export class CreatorComponent implements OnInit {
  personalityLinks = [
    {
      router: false,
      newWindow: true,
      label: 'Subjective Personality Blog',
      destPath: 'http://subjectivepersonality.wordpress.com/',
    },
    {
      router: false,
      newWindow: true,
      label: 'YouTube Channel',
      destPath: 'https://www.youtube.com/c/RoqbinReality/',
    },
    {
      router: false,
      newWindow: true,
      label: 'Subjective Personality App',
      destPath: 'http://app.subjectivepersonality.com/',
    },
  ];

  artLinks = [
    {
      router: true,
      label: 'Learn More',
      destPath: '/creator/artist',
    },
    {
      newWindow: true,
      label: 'See Album',
      destPath: 'https://imgur.com/a/MsKtf8D',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
