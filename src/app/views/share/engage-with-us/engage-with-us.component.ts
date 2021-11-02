import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-engage-with-us',
	templateUrl: './engage-with-us.component.html',
	styleUrls: [ './engage-with-us.component.scss' ]
})
export class EngageWithUsComponent implements OnInit {
	partnershipData = [
		{
			card_title: 'Partnership',
			image: '/assets/partnership/Group 256.png',
			card_para:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pretium in sit arcu magna nascetur et vel.'
		},
		{
			card_title: 'Distribution',
			image: '/assets/partnership/local-business-data-distribution 1.png',
			card_para:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pretium in sit arcu magna nascetur et vel.'
		},
		{
			card_title: 'Vendor',
			image: '/assets/partnership/Group 257.png',
			card_para:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pretium in sit arcu magna nascetur et vel.'
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
