import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../interfaces/Card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: ICard | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
