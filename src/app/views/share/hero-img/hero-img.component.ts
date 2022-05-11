import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss']
})
export class HeroImgComponent implements OnInit {
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
    console.log('pageData slider', this.products)
  }

}
