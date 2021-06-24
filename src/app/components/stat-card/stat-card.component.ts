import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { numberWithCommas } from 'src/app/utils';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.sass'],
})
export class StatCardComponent implements OnInit, OnChanges {
  @Input() heading: string;
  @Input() numberOfCases: number;
  @Input() newCases: number;
  @Input() delta: number;
  @Input() color: string;

  numberOfCasesStr: string;
  newCasesStr: string;

  constructor() {}

  ngOnInit(): void {
    this.numberOfCasesStr = numberWithCommas(this.numberOfCases);
  }

  ngOnChanges(): void {
    if (this.newCases) this.newCasesStr = numberWithCommas(this.newCases);
  }
}
