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
	// patnership
	partner: any = [
		{ image: '/assets/about_us/memb_1.png', title: 'mr.ahuja', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_2.png', title: 'kumar seti', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_3.png', title: 'rahul saksena', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_4.png', title: 'mr.Mukesh kr', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_5.png', title: 'mr.jon', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_6.png', title: 'Miss rita ', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_7.png', title: 'Ali khan', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_7.png', title: 'mr.ahuja', position: 'lorem ipsum' }
	];

	// partnership
	partnershipData = [
		{
			card_title: 'Partnership',
			image: '/assets/partnership/Group 256.png',
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
	responsiveOptions: any;
	constructor() {
		this.responsiveOptions = [
			{
				breakpoint: '1920px',
				numVisible: 4,
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

	ngOnInit(): void {}
}
