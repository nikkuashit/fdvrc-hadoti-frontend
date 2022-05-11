import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-slider',
  templateUrl: './full-slider.component.html',
  styleUrls: ['./full-slider.component.scss']
})
export class FullSliderComponent implements OnInit {

  @Input() item: any;
  products: any;
  responsiveOptions: any = [];

  constructor() {
    this.responsiveOptions = [
			{
				breakpoint: '1920px',
				numVisible: 1,
				numScroll: 1
			},
			{
				breakpoint: '1200px',
				numVisible: 1,
				numScroll: 1
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
    this.products = this.item.component_data;
    console.log('pageData slider', this.products);
  }

}
