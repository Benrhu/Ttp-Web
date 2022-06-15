import { Component, Input, OnInit } from '@angular/core';

// Se introduce un monto (100, 300, 900) y calcula el profit (¿Desde un 5% a un 10% ó 10% fijo?)

@Component({
  selector: 'app-profit-calculator',
  templateUrl: './profit-calculator.component.html',
  styleUrls: ['./profit-calculator.component.scss']
})

export class ProfitCalculatorComponent implements OnInit {

  @Input() inversion: number = 0
  profit: number = 0
  show: boolean = false
  
  constructor() {

  }

  ngOnInit(): void {
    this.profit = this.inversion*0.1
  }

  inversionChange(): void {
    this.profit = this.inversion*0.1
  }

  // En caso de que sea un 10% fijo:
  showProfit(){
    this.show= !this.show
  }

}
