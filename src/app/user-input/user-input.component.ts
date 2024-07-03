import { Component,  signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<{
  //   initialInvestment: number;
  //   duration: number;
  //   expectedReturn: number;
  //   annualInvestment: number;
  // }>();
  constructor(private investmentService:InvestmentService){}

  enterInitialInvestment = signal('0');
  enterAnnualInvestment = signal('0');
  enterExpectedReturn = signal('5');
  enterDuration = signal('10');
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment:+this.enterInitialInvestment(),
      duration:+this.enterDuration(),
      expectedReturn:+this.enterExpectedReturn(),
      annualInvestment:+this.enterAnnualInvestment()
    });


    this.enterInitialInvestment.set('0');
    this.enterAnnualInvestment.set('0');
    this.enterExpectedReturn.set('5');
    this.enterDuration.set('10');
  }
}
