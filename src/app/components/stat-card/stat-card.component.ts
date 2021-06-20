import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.sass'],
})
export class StatCardComponent implements OnInit {
  @Input() heading: string;
  @Input() numberOfCases: number;
  @Input() newCases: number;
  @Input() delta: number;
  @Input() color: string;

  numberOfCasesStr: string;
  newCasesStr: string;

  constructor() {}

  numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  ngOnInit(): void {
    this.numberOfCasesStr = this.numberWithCommas(this.numberOfCases);
    this.newCasesStr = this.numberWithCommas(this.newCases);
  }
}
