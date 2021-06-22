import { Component, OnInit } from '@angular/core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  faSnowflake: IconDefinition = faSnowflake;

  constructor() {}

  ngOnInit(): void {}
}
