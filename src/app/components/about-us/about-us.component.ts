import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/modules/interfaces/Card.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutUsText: ICard = {
    title: 'About us',
    content: 'We are a group of crypto traders with an operation and a risk management system,',
    content1: 'which allow us to guarantee you a fixed 5% monthly.',
    button: 'Contactar con nosotros'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
