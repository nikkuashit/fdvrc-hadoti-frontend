import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-our-product',
	templateUrl: './our-product.component.html',
	styleUrls: [ './our-product.component.scss' ]
})
export class OurProductComponent implements OnInit {
	products: any = [
		{
			description: 'Product Description',
			id: '1000',
			image: '/assets/our product/HadotiZip1.png',
			name: 'Bamboo Watch'
		},
		{
			description: 'Product Description',
			id: '1000',
			image: '/assets/our product/HadotiZip2.png',
			name: 'Bamboo Watch'
		},
		{
			description: 'Product Description',
			id: '1000',
			image: '/assets/our product/HadotiZip3.png',
			name: 'Bamboo Watch'
		},

		{
			description: 'Product Description',
			id: '1000',
			image: '/assets/our product/HadotiZip4.png',
			name: 'Bamboo Watch'
		},
		{
			description: 'Product Description',
			id: '1000',
			image: '/assets/our product/HadotiZip5.png',
			name: 'Bamboo Watch'
		},
		{
			description: 'Product Description',
			id: '1000',
			image: '/assets/our product/HadotiZip6.png',
			name: 'Bamboo Watch'
		}
	];
	responsiveOptions: any;

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
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '600px',
				numVisible: 1,
				numScroll: 1
			}
		];
	}

	ngOnInit(): void {}
}
