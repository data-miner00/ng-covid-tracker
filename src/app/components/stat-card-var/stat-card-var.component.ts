import { Component, OnInit, Input } from '@angular/core';
import { numberWithCommas } from 'src/app/utils';

@Component({
  selector: 'app-stat-card-var',
  templateUrl: './stat-card-var.component.html',
  styleUrls: ['./stat-card-var.component.sass'],
})
export class StatCardVarComponent implements OnInit {
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
    this.newCasesStr = numberWithCommas(this.newCases);
  }
}
