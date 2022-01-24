import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-known-abt-us',
	templateUrl: './known-abt-us.component.html',
	styleUrls: [ './known-abt-us.component.scss' ]
})
export class KnownAbtUsComponent implements OnInit {
	aboutPara = [
		{
			name:
				'Members would be categorized in different classes based on the consistency and quantity of produce supplied to the company.'
		},
		{
			name:
				'The company will have representation of different classes of members on the Board of the Producer Company to ensure inclusiveness.'
		},
		{
			name: 'Trading of shares is not permitted but it can be transferred among the members.'
		},
		{
			name:
				'An appropriate mechanism would be put in place for various communications, including their grievance redressal, with the members.'
		},
		{
			name:
				'Returns to the members would be based on patronage to the company in terms of consistency and volume of produce supplied.'
		},
		{
			name:
				'The company would leverage technology in the areas of information collection, data management and payments etc. for transparency and effective management.'
		},
		{
			name:
				'An appropriate mechanism would be put in place for various communications, including their grievance redressal, with the members.'
		},
		{
			name: 'A Chief Executive along with other professionals would manage the operations of the Company.'
		}
	];
	tempaboutPara = [
		{ name: 'Only producers who are doing farming can become members/ shareholders of the Producer Company.' },
		{
			name:
				'Farmers who hold the land or who have taken land on lease from any source can become member of the Farmer Producer Company.'
		},
		{
			name:
				'Members/ shareholders equity to be in proportion to the quantity of supplied commodity by them (Patronage based equity).'
		},
		{
			name:
				'Members would be categorized in different classes based on the consistency and quantity of produce supplied to the company.'
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
