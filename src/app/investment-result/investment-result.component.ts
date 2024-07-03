import { CurrencyPipe } from '@angular/common';
import { Component,    computed,    input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
    // @Input() results?:{
    //     year: number,
    //     interest: number,
    //     valueEndOfYear: number,
    //     annualInvestment: number,
    //     totalInterest: number,
    //     totalAmountInvested: number,
    // }[];
       constructor(private investmentService:InvestmentService){}

       results=computed(()=>{
          return this.investmentService.resultData();
       })     
}
