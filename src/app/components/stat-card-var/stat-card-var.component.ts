import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { numberWithCommas } from 'src/app/utils';

@Component({
  selector: 'app-stat-card-var',
  templateUrl: './stat-card-var.component.html',
  styleUrls: ['./stat-card-var.component.sass'],
})
export class StatCardVarComponent implements OnInit, OnChanges {
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
    this.numberOfCasesStr = numberWithCommas(this.numberOfCases);
    if (this.newCases) this.newCasesStr = numberWithCommas(this.newCases);
  }
}
