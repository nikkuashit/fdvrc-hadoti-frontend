import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: [ './product.component.scss' ]
})
export class ProductComponent implements OnInit {
	productItem = [
		{
			img: '/assets/product/CorianderPowder.jpg',
			title1: 'Coriander Powder ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/Corianderwhole.jpg',
			title1: 'Coriander Whole ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/GarlicBulbs.jpg',
			title1: 'Garlic Bulbs ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/HadotiChanaDal.jpg',
			title1: ' ChanaDal',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];
	productItem1 = [
		{
			img: '/assets/product/HadotiZipBa2.jpg',
			title1: 'AaharDal',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/HadotiZipBag3.jpg',
			title1: 'Coriander Powder',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/HadotiZipBag6.jpg',
			title1: 'Coriander Whole ',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			img: '/assets/product/MustardSeeds.jpg',
			title1: 'MustardSeeds',
			title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];

	showLess = true;
	isReadMore = true;
	showText() {
		this.showLess = !this.showLess;
		this.isReadMore = !this.isReadMore;
	}
	constructor() {}

	ngOnInit(): void {}
}
