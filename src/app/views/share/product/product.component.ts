import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: [ './product.component.scss' ]
})
export class ProductComponent implements OnInit {
	productItem = [
		{
			img: '/assets/product/product_1.png',
			title1: 'Lorem Ipsum ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/product_2.png',
			title1: 'Lorem Ipsum ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/product_1.png',
			title1: 'Lorem Ipsum ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/product_4.png',
			title1: 'Lorem Ipsum ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];
	productItem1 = [
		{
			img: '/assets/product/product_2.png',
			title1: 'Lorem Ipsum ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/product_6.png',
			title1: 'Lorem Ipsum ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/product_7.png',
			title1: 'Lorem Ipsum ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/product_8.png',
			title1: 'Lorem Ipsum ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
