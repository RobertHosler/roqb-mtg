import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css'],
})
export class GamerComponent implements OnInit {
  chess = {
    name: 'Chess',
    note: `After being reintroduced to chess with the Queen's Gambit on Netflix and
    having some other friends spark an interest as well, I began to study and play
    chess more in the past few months. Currently I'm only around 1100 in Blitz on
    Lichess.org, so I have much room to improve. I've been spending my time
    largely studying puzzles to try to learn tactics as well as some simple
    openings theory. Currently I've been focusing on learning the London as white
    and am looking at the e6 b6 opening as black.`,
  };

  skyrim = {
    name: 'Skyrim',
    note: `I've played many hours of Skyrim, and yet there is so much of it that I 
    have not explored.  One of my favorite things to do in Skyrim is create a new 
    character and gain those first few levels as you shape them into a fighter 
    who can hold their own.  At first the world of Skyrim is so dangerous for 
    your character, but you quickly get past this stage and the world becomes 
    less dangerous.  I think losing part of that thrill has pulled me into 
    starting a new character over and over.  As well as the curiousity of 
    trying a new playstyle.  But recently I've been trying to stick with a 
    single character and take them far into the main storyline.`,
  };

  stardewValley = {
    name: 'Stardew Valley',
    note: `Stardew Valley had an update recently which added a new Island to explore, 
    new items to unlock, and quests to complete so I've been revisting and exploring
    that again on both Switch and PC.  On PC I have been playing Co-Op with my wife.`,
  };

  currentGames: Game[] = [this.chess, this.skyrim, this.stardewValley];

  constructor() {}

  ngOnInit(): void {}
}

class Game {
  name: string;
  note: string;
}
