import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slider-square',
  templateUrl: './card-slider-square.component.html',
  styleUrls: ['./card-slider-square.component.scss']
})
export class CardSliderSquareComponent implements OnInit {
  responsiveOptions: any;
  @Input() item: any;
  items: any;

  constructor() {
    this.responsiveOptions = [
			{
				breakpoint: '1920px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '1200px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '968px',
				numVisible: 1,
				numScroll: 1
			},
			{
				breakpoint: '600px',
				numVisible: 1,
				numScroll: 1
			}
		];
  }

  ngOnInit(): void {
    this.items = this.item;
    console.log('pageData slider', this.items);
  }

}
