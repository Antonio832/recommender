import { Component, Input, OnInit } from '@angular/core';

interface Card{
  title: string,
  text: string,
  img: string
}

@Component({
  selector: 'landing-card',
  templateUrl: './landing-card.component.html',
  styleUrls: ['./landing-card.component.scss']
})
export class LandingCardComponent implements OnInit {

  @Input() card!: Card

  constructor() { }

  ngOnInit(): void {
  }

}
