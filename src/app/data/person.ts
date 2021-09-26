const section1 = {
  file: 'person.txt',
  images: [
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
  ],
};

const person = {
  sections: [section1],
};

const s1 = {
  heading: 'Person',
  text: [
    'Why hello there, and thank you for stopping by my website.',
    `My name is Robert Hosler and I'm a web developer, gamer, and sometimes artist. I created this website to share apps with my friends, show off some of my old artwork, and generally just craft my own little place here on the web. `,
    'I recently married my wife Jenny in August 2020 and we live in Pittsburgh, Pennsylvania with our two cats, Ebby and Joseph.',
  ],
};

const s2 = {
  heading: 'Background',
  text: [
    "I'm originally from the suburbs of Harrisburg and attended Central Dauphin High School (2009) where I was a member of the school choir. My next 4 years were spent at Lebanon Valley College (class of 2013), where I double majored in Computer Science and Studio Art, a combination which encouraged me to strech my creativity and challenge me in a variety of ways.",
    "Since college I've been working for Highmark Inc, in the dental division supporting United Concordia Dental Insurance. Much of my work has been on My Dental Benefits, a web application which allows members to view there claims and benefits information.",
    'In 2017 I moved to Pittsburgh after my lovely girlfriend (now wife) Jenny moved there for grad school where she is working on her doctorate in Chemistry.',
  ],
};

const s3 = {
  heading: 'Interests',
  text: [
    'I am passionate about solving interesting problems with creative solutions. This is something I love about gaming, programming, and design. I believe that when we are given the bounds to work in and problems to solve, that is when the fun can begin. My experience in development has been mostly enterprise Java web apps using the JSF framework and Twitter Bootstrap, but here on this site I am exploring other varieties of ways to interact with the web. The web apps I develop here are all open source and can be viewed on my github.',
  ],
  buttons: [
    {
      route: true,
      dest: '/art',
      label: 'View my Art'
    }
  ]
};

const s4 = {
  heading: 'Rob with a q',
  text: [
    'You may have noticed by now that you are on "Roqb.me" and not "RobertHosler.me". You may be wondering why the Q is in my name, or maybe how to pronounce it. Rock-Bee? Rah-Q-Bee? Row-Cube?',
    'The pronunciation is easy... I don\'t pronounce the Q at all. It is just Rob. Or at least that is what I say. Others do choose to pronounce it in all kinds of ways.',
    'As for the WHY, well that is a bit of a longer story...',
    'In the 8th grade, we had to make nametags to place at our seats. Writing Rob on my nametag seemed so... boring. Only 3 letters? Others got 5, maybe 8 or 9! Just 3 letters seemed so plain on the large nametag we had received. It felt too short and uninteresting to have just a 3 letter name.',
    'I didn\'t want to go back to Robby as I went by when I was little. I was in the 8th grade after all. I was practically a man! The days of Robby were behind me, it was time to grow up and become something new! Puberty is a weird time. I could consider Robert of course, but then that isn\'t a nickname! Robert is my formal name and it is just that... very \'formal\' sounding.',
    `So naturally, I tried adding a q to my name as a random letter that wouldn't make much sense to pronounce. I was after pure aesthetics here and didn't want people thinking it should be pronounced (this did not turn out to be particularly effective - oops). After all, Q rarely occurs in english without a u, so what does a Q in Roqb even mean? I had full intention of trying other letters or locations in my name to see if those fit better. I know I considered X as another letter. But in the end, Q after the o was the first one I tried, and it stuck. I liked it. I even noticed that the Q when written with a straight down pipe instead of a hook it actually resembled a rotated b. That seemed quite fitting. It is almost like I just have two bs in my name, like Robb, but... twisted.`,
    `Over the years people have tried to pronounce the q and questioned its usage. One of my English teachers in High School questioned whether I had typoed my own name on my summer assignment. I always thought I'd leave it behind at some point, and in some ways I have. I rarely spell my name like this at work or when I want to avoid confusion and questions about it, but I actively have to think to not spell my name this way in these situations, it has become second nature after spelling it this ways for so many years (over a decade). Most of us don't really get to choose a name for ourselves and I'm not sure I'd recommend simply adding a q to your name, but it has become a part of who I am and what makes me, me.`
  ]
};

export const personSections = [
  s1, s2, s3, s4
];
