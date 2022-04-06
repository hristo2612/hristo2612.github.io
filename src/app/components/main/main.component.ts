import { Component, OnInit } from '@angular/core';

export interface Section {
  title: string;
  entries: Entry[];
}

export interface Entry {
  leftTitle: string;
  leftLink?: string;
  leftContent: string;
  rightTitle: string;
  rightContent?: string;
  rightContentList?: string[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sections: Section[] = [
    {
      title: 'Work Experience',
      entries: [
        {
          leftTitle: 'The Stars Group',
          leftContent: 'Sept. 2018 - Present',
          rightTitle: 'Senior Front-End Developer',
          rightContent: `Implement and maintain a variety of back office web applications for The Stars Group.
          Work with a variety of technologies including Angular, TypeScript, SCSS, Angular Material, Cypress, Karma, NGRX, RxJS, etc.`,
          rightContentList: [
            'Architecting new back office tools and web applications using Angular.',
            'Optimizing and refactoring legacy code.',
            'Introducing new technologies for building, testing and maintaining the applications, including Cypress, NGRX, ESLint, Karma, etc.',
            'Building and deploying 3+ applications at once using the Jenkins CI/CD pipeline.',
            'Automation of tedious and time consuming tasks using Node.JS scripts & Custom Angular Schematics.'
          ]
        },
        {
          leftTitle: 'Effortel',
          leftContent: 'May. 2018 - July. 2018',
          rightTitle: 'Front-End Developer',
          rightContent: 'Worked on a MVNE project enabling mobile virtual network operators to offer services to their own customers.',
          rightContentList: [
            'Implement project specific features using Sencha ExtJS and SCSS',
            'Learn how MVNEs ( Mobile Virtual Network Enablers ) & MVNOs ( Mobile Virtual Network Operators ) work together to offer services to their customers.'
          ],
        },
        {
          leftTitle: 'Software Group',
          leftContent: 'Jan. 2017 - Apr. 2018',
          rightTitle: 'Full-Stack Developer',
          rightContent: 'Help deliver a modern SaaS FinTech Platform designed for the Cloud and focused on providing financial technology for MFIs, small banks and other organizations.',
          rightContentList: [
            'Use popular technologies like AngularJS, Node.js, Bootstrap 4, CouchDB and MongoDB.',
            'Understand the concept of microservices and how they work together to provide a scalable, reliable and secure solution.',
            'Work with a team of developers to build a solution that is easy to use, secure and reliable.',
            'Get familiar with popular tools like VSTS, WebStorm IDE, Git, etc.'
          ],
        }
      ]
    },
    {
      title: 'Projects',
      entries: [
        {
          leftTitle: 'My Resume',
          leftLink: 'https://github.com/hristo2612/hristo2612.github.io',
          leftContent: 'Apr. 2022',
          rightTitle: 'Angular & SCSS',
          rightContent: 'It is a static resume website. The one you are reading right now.',
        },
        {
          leftTitle: 'Trillo',
          leftLink: 'https://github.com/hristo2612/trillo',
          leftContent: 'Mar. 2022',
          rightTitle: 'Angular & SCSS',
          rightContent: 'A static hotel booking website, implementing responsive design with flexbox.',
        },
        {
          leftTitle: 'Nature Tours',
          leftLink: 'https://github.com/hristo2612/nature-tours-website',
          leftContent: 'Feb. 2022',
          rightTitle: 'Angular & SCSS',
          rightContent: 'Website implementing core features of SCSS ( mixins, variables, prefixes, etc. ) and visual design concepts using Angular 12+'
        },
        {
          leftTitle: 'Web Sockets',
          leftLink: 'https://github.com/hristo2612/web-sockets-playground',
          leftContent: 'Oct. 2021',
          rightTitle: 'Angular, Node.js & MongoDB',
          rightContent: 'Anonymous chat app using Web Sockets and MongoDB.',
        },
        {
          leftTitle: 'Needs Tracker',
          leftLink: 'https://github.com/hristo2612/Needs-Tracker',
          leftContent: 'Sept. 2021',
          rightTitle: 'Ionic & Angular',
          rightContent: 'An app that let\'s you track your needs for the day and keeps track of your history throughout time.',
        },
        {
          leftTitle: 'Cmd Search',
          leftLink: 'https://github.com/hristo2612/Cmd-Search',
          leftContent: 'Jan. 2019',
          rightTitle: 'Electron & Angular',
          rightContent: 'Add frequently used commands to your list and re-use them in the future, passing custom parameters.'
        },
        {
          leftTitle: 'Automating Unit Tests',
          leftLink: 'https://github.com/hristo2612/automating-basic-ng-tests',
          leftContent: 'Nov. 2018',
          rightTitle: 'Node.js',
          rightContent: 'Opinionated and customizable boilerplate for automating unit tests in Angular 2+'
        },
        {
          leftTitle: 'Facebook Event Stats',
          leftLink: 'https://github.com/hristo2612/fb-event-stats',
          leftContent: 'Mar. 2018',
          rightTitle: 'Node.js',
          rightContent: 'A script that crawls through a given facebook event and finds what percentage of guys & girls are attending ( Not working anymore ).',
        },
        {
          leftTitle: 'LogX',
          leftLink: 'https://github.com/hristo2612/LogX',
          leftContent: 'Oct. 2016',
          rightTitle: 'JavaScript',
          rightContent: 'Space shooter game made in pure JavaScript',
        }
      ]
    },
    {
      title: 'Education',
      entries: [
        {
          leftTitle: 'Software University (SoftUni)',
          leftLink: 'https://softuni.bg/',
          leftContent: 'Feb. 2016 - Nov. 2016',
          rightTitle: 'Javascript Applications',
          rightContent: 'Received a recommendation for my first job due to my exceptionally good grades.'
        },
        {
          leftTitle: 'First English Language School (FELS)',
          leftLink: 'https://www.fels-sofia.org/',
          leftContent: '2011 - 2015',
          rightTitle: '',
          rightContent: ''
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
