import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/modules/interfaces/Card.interface';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  

  hero: ICard = {
    title: 'Put your money to create money',
    content: 'Secure a fixed 5% each month',
    content1: 'Which allow us to guarantee you a fixed 5% monthly.',
    button: 'Calculate my profit'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
