import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-our-partner',
	templateUrl: './our-partner.component.html',
	styleUrls: [ './our-partner.component.scss' ]
})
export class OurPartnerComponent implements OnInit {
	responsiveOptions: any;
	@Input() item: any;
	items: any;

	constructor() {
		this.responsiveOptions = [
			{
				breakpoint: '1920px',
				numVisible: 3,
				numScroll: 4
			},
			{
				breakpoint: '1200px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '968px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '568px',
				numVisible: 1,
				numScroll: 1
			}
		];
	}

	ngOnInit(): void {
		this.items = this.item;
		console.log('circle slider', this.items);
	}
}
