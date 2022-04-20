import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-engage-with-us',
	templateUrl: './engage-with-us.component.html',
	styleUrls: [ './engage-with-us.component.scss' ]
})
export class EngageWithUsComponent implements OnInit {
	internhip_para: string = 'Apply for the open internship positions at Hadoti MKPCL or drop your resume with us if you want to volunteer/work with us.';

	// patnership
	partner: any = [
		{ image: '/assets/engage-wth-us/NRLM_logo-HR.jpg' },
		{ image: '/assets/engage-wth-us/Rajeevika.jpg' },
		{ image: '/assets/engage-wth-us/Saras_FINAL_eng_Compact.jpg' },
		{ image: '/assets/engage-wth-us/FDVRCLogo.jpg' }
	];

	// partnership
	partnershipData = [
		{
			card_title: 'Partnership',
			image: '/assets/engage-wth-us/Hadoti-Partnership.jpg'
		}
	];
	// tender
	tenderList: any = 'Tender details would be updated here.';

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
