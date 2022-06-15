import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  @Input() email: string | undefined
  cta: string = 'Write you better email'

  constructor() { }

  ngOnInit(): void {
  }

}
