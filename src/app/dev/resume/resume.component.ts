import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  colored = true;
  showSkillBars = true;
  hoverImg = false;
  showHistory = false;

  lvcIntern = {
    employer: 'Lebanon Valley College',
    roles: [
      {
        name: 'Summer Intern',
        start: '2011 & 2012',
        bullets: [
          'Learned the Android platform while building prototype applications on a development team',
          'Presented a successful proposal to LVC Committee to extend internship a second Summer',
          'Created an LVC application providing a virtual tour and event information for the campus',
          // 'Created 5 Android prototype apps'
        ],
      },
    ],
  };

  experience: Experience[] = [
    {
      employer: 'Highmark Inc.',
      roles: [
        {
          name: 'Application Developer',
          start: '2015',
          end: 'Present',
          bullets: [
            'Responsible for designing and coding front-end and back-end updates to responsive member-facing JSF and Angular web applications.',
            'Completed website modernization project using Angular SPA, Adobe Experience Manager (AEM), Bootstrap, and SASS.',
            'Created CMS backed web components using AEM and TeamSite, enabling flexible and user-friendly authoring experiences.',
            'Built SpringBoot MicroServices using Swagger and Lombok, creating new entry points for accessing data through asynchronous retrievals',
            // 'Implemented new image submission form integrating multiple existing processes so that providers could add claim images when required without refiling.',
            'Designed and developed new Android app in Android Pie (9.0) with support back to KitKat (4.4), biometric authentication, multiple themes, REST service integration, local data and profile caching.',
            // 'Updated member facing applications with Twitter Bootstrap to create responsive user experiences.',
            'Improved documentation and unit testing practices with code coverage levels over 85% in all applications using JUnit, Mockito, and Jasmine.',
            // 'Built CMS driven applications using TeamSite and Adobe Experience Manager',
            // 'Developed ',
            // 'Participated in internal leadership training program, working alongside a team to create engaging presentations',
            'Led and mentored other developers on best practices, technologies, and design principles.  Selected for internal leadership program.',
            'Organized events, team outings, and games to increase community engagement, proving to be a positive contributor.',
            // 'SSO'
            // Databases
            // Angular
          ],
        },
        {
          name: 'Associate Application Developer',
          start: '2013',
          end: '2015',
          bullets: [
            // 'Developed updates to registration logic allowing members with the same date of birth to register',
            'Responsible for updating 5+ enterprise Java applications using JSF, CDI, AJAX, and Bootstrap.',
            'Created form enabling users to submit claims from existing data.',
            'Implemented IBM Digital Analytics page and event tracking into applications across 7+ domains for increased consumer awareness.',
            'Increased JUnit code coverage of critical application areas using EasyMock.',
            'Updated approval process workflow for TeamSite content management solution used by the entire team for production updates.',
            'Developed new landing page for a government insurance contract, using Struts and JSP for new open enrollment season.',
          ],
        },
      ],
    },
    // this.lvcIntern
  ];

  skills: Skill[] = [
    {
      level: 20,
      name: 'Java',
    },
    {
      level: 19,
      name: 'JSF',
    },
    {
      level: 17,
      name: 'JavaScript',
    },
    {
      level: 14,
      name: 'TypeScript',
    },
    {
      level: 15,
      name: 'Angular',
    },
    {
      level: 12,
      name: 'Android',
    },
    {
      level: 13,
      name: 'AEM | CMS',
    },
    {
      level: 8,
      name: 'SpringBoot',
    },
    {
      level: 11,
      name: 'Analytics',
    },
    {
      level: 16,
      name: 'Leadership',
    },
    {
      level: 19,
      name: 'Adaptability',
    },
    // {
    //   level: 17,
    //   name: 'Proactivity',
    // },
    {
      level: 18,
      name: 'Modesty',
    },
  ];

  education: Education[] = [
    {
      school: 'Lebanon Valley College',
      start: "2009",
      end: "2013",
      bullets: [
        'Followed dual passion for technology and art, graduating with Bachelor\'s in Computer Science and Studio Art.',
        'Created Android application during Summer Internships in 2011 & 2012 - virtual tour and event info for campus.',
        'Worked as Head Lab Assistant from 2010 to 2013, leading a team of 10+ fellow students.',
        "Awarded Vickroy Scholarship and Dean's List recognition.",
        // "Represented LVC in programming competitions"
        // "Founder of Magic the Gathering Club, Member of Art and Math Clubs"
      ],
    },
    // {
    //   school: 'Central Dauphin High School',
    //   year: 2009,
    //   bullets: [],
    // },
  ];

  certifications: Certification[] = [
    {
      name: 'Angular Training Course',
      year: '2020',
    },
    {
      name: 'AEM Training Course',
      year: '2019',
    },
    {
      name: 'Scrum.org Developer Certification',
      year: '2019',
    },
    {
      name: 'Android Training Course',
      year: '2016',
    },
    {
      name: 'Microsoft Excel Certification',
      year: '2009',
    },
  ];

  employmentHistory: Employment[] = [
    {
      employer: 'Lebanon Valley College IT',
      role: 'Head Computer Lab Assistant',
      start: '2010',
      end: '2013',
    },
    {
      employer: 'Lebanon Valley College IT',
      role: 'Associate',
      start: 'Summer 2010 & 2011',
    },
    {
      employer: 'Lebanon Valley College',
      role: 'Head Computer Lab Assistant',
      start: '2010',
      end: '2013',
    },
    {
      employer: 'GameStop',
      role: 'Game Advisor',
      start: '2008',
      end: '2010',
    },
    {
      employer: 'Weis Markets',
      role: 'Cashier',
      start: '2007',
      end: '2008',
    },
    {
      employer: 'Party City',
      role: 'Seasonal',
      start: '2006',
    },
  ];

  hobbies = [
    // 'Magic the Gathering',
    'Drawing & Painting',
    'Personality Theory',
    'Reality TV',
    'Table-top & Video Games',
  ];

  constructor() {}

  ngOnInit(): void {}

  print() {
    window.print();
  }

  skillDescription(level: number) {
    if (level >= 15) {
      return 'Expert';
    } else if (level >= 10) {
      return 'Proficient';
    } else if (level >= 5) {
      return 'Competent';
    } else {
      return 'Novice';
    }
  }
}

class Skill {
  level: number;
  name: string;
}

class Education {
  school: string;
  start: string;
  end?: string;
  bullets: string[];
}

class Employment {
  employer: string;
  role: string;
  start: string;
  end?: string; // End not included, assumes start contains all info
}

class Certification {
  name: string;
  year: string;
}

class Experience {
  employer: string;
  roles: Role[];
}

class Role {
  name: string;
  start: string;
  end?: string; // End not included, assumes start contains all info
  bullets: string[];
}
