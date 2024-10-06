import { Component, Input, input } from '@angular/core';
import type { ResultsData } from '../results-data.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
//results = input<year: number,
// interest: number,
// valueEndOfYear: number,
// annualInvestment: number,
// totalInterest: number,
// totalAmountInvested: number,
// }[]>()
@Input() results?: ResultsData[];
}
