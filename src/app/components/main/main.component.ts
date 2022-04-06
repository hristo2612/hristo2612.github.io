import { Component, OnInit } from '@angular/core';

export interface Section {
  title: string;
  entries: Entry[];
}

export interface Entry {
  leftTitle: string;
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
          rightContent: 'Developing and maintaining the front-end of the company\'s website.',
          rightContentList: [
            'WOrked on integrating NASA equipment',
            'Worked on integrating NASA equipment',
            'Did some work on integrating NASA equipment'
          ],
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
