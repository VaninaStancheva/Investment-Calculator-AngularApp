import { Component, computed, inject, input } from '@angular/core';
import type { ResultsData } from '../results-data.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private InvestmentService = inject(InvestmentService);
  
  results = computed(() => this.InvestmentService.resultsData());
}
