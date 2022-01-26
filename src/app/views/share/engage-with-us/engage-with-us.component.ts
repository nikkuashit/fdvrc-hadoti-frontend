import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-engage-with-us',
	templateUrl: './engage-with-us.component.html',
	styleUrls: [ './engage-with-us.component.scss' ]
})
export class EngageWithUsComponent implements OnInit {
	internhip_para: string = 'Apply for the open internship positions at Hadoti MKPCL or drop your resume with us if you want to volunteer/work with us.';

	engage_para: string = 'Lorem ipsum dolor sitamet, consectetur adipiscing elit.Eget vitaee gestas sed posuerelorem.Lorem ipsum dolor sit amet, consec teturadi piscingelit.Eget vitaeegestas sed posuere lorem.lorem.Lorem ipsum dolor sit amet, consecte turadipis cingelit.Eget vitaeegestas sed posuere lorem.';
	showLess1 = true;
	isCarrer = true;
	showText1() {
		this.showLess1 = !this.showLess1;
		this.isCarrer = !this.isCarrer;
	}
	// patnership
	partner: any = [
		{ image: '/assets/engage-wth-us/NRLM_logo-HR.png' },
		{ image: '/assets/engage-wth-us/Rajeevika.jpeg' },
		{ image: '/assets/engage-wth-us/Saras_FINAL_eng_Compact.png' },
		{ image: '/assets/engage-wth-us/FDVRCLogo.png' },
		{ image: '/assets/engage-wth-us/favicon.ico' }
	];

	// partnership
	partnershipData = [
		{
			card_title: 'Partnership',
			image: '/assets/engage-wth-us/Hadoti-Partnership.png'
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
				numVisible: 3,
				numScroll: 3
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
