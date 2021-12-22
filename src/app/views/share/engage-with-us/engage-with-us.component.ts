import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-engage-with-us',
	templateUrl: './engage-with-us.component.html',
	styleUrls: [ './engage-with-us.component.scss' ]
})
export class EngageWithUsComponent implements OnInit {
	internhip_para: string = 'Lorem ipsum dolor sitamet, consectetur adipiscing elit.Eget vitaee gestas sed posuerelorem.Lorem ipsum dolor sit amet, consec teturadi piscingelit.Eget vitaeegestas sed posuere lorem.lorem.Lorem ipsum dolor sit amet, consecte turadipis cingelit.Eget vitaeegestas sed posuere lorem.';
	showLess = true;
	isBox = true;
	showText() {
		this.showLess = !this.showLess;
		this.isBox = !this.isBox;
	}

	engage_para: string = 'Lorem ipsum dolor sitamet, consectetur adipiscing elit.Eget vitaee gestas sed posuerelorem.Lorem ipsum dolor sit amet, consec teturadi piscingelit.Eget vitaeegestas sed posuere lorem.lorem.Lorem ipsum dolor sit amet, consecte turadipis cingelit.Eget vitaeegestas sed posuere lorem.';
	showLess1 = true;
	isCarrer = true;
	showText1() {
		this.showLess1 = !this.showLess1;
		this.isCarrer = !this.isCarrer;
	}

	// partnership
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
	// tender
	tenderData: any = [
		{
			tender_List:
				'Lorem ipsum dolor sit amet, consectetura dipiscing elit. Massa egestaslaoreet massa duisaliquam.'
		}
	];
	constructor() {}

	ngOnInit(): void {}
}
