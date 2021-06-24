import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass'],
})
export class InfoComponent implements OnInit {
  references: { title: string; link: string }[] = [
    {
      title: 'About COVID-19',
      link: 'http://www.emro.who.int/health-topics/corona-virus/about-covid-19.html',
    },
    {
      title: 'Coronavirus disease (COVID-19)',
      link: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19#:~:text=symptoms',
    },
    {
      title:
        'Coronavirus disease (COVID-19) advice for the public: When and how to use masks',
      link: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks',
    },
    {
      title: 'Guidance for Wearing Masks',
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-guidance.html',
    },
    {
      title:
        'Key Messages and Actions for COVID-19 Prevention and Control in Schools',
      link: 'https://www.who.int/docs/default-source/coronaviruse/key-messages-and-actions-for-covid-19-prevention-and-control-in-schools-march-2020.pdf',
    },
    {
      title: 'Prevent COVID-19: How to Protect Yourself from the Coronavirus',
      link: 'https://healthmatters.nyp.org/how-to-protect-yourself-from-coronavirus-covid-19/',
    },
    {
      title: 'Herd immunity and COVID-19 (coronavirus): What you need to know',
      link: 'https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/herd-immunity-and-coronavirus/art-20486808',
    },
    {
      title: 'Historical Context: SARS, MERS, and Ebola',
      link: 'https://www.atrainceu.com/content/8-historical-context-sars-mers-and-ebola',
    },
    {
      title: 'Is sneezing a symptom of COVID-19?',
      link: 'https://covid.joinzoe.com/post/covid-sneezing',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
