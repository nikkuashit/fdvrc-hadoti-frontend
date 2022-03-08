import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {
	// mission
	aboutMission: any = [
		{
			abt_title: 'Mission and Vision',
			abt_image: '/assets/about_us/HadotiM&V.jpg',
			abt_paragraph:
				'The Producer Company will empower its shareholder’s and help them increase their standard of living on financial, economic and social aspects.The Mission of the Producer Company is to provide benefit such as pooled price for their produce, transparent pricing, adoption of best practices such as price discovery, effecient operations, market linkages. Producer company will also aim to provide a great value proposition for its customer in form of high-quality standard, continuous bulk supply and better price affordability for end consumers.'
		}
	];
	aboutProduct: any = [
		{
			abt_title: 'Product and Services',
			abt_image: '/assets/about_us/Product&Services-Picture.jpg',
			abt_paragraph:
				'The proposed value chain intervention is a step towards it and will ensure higher price realization for the beneficiaries through the following:',
			productPara:
				'-Form and leverage Producer Company for volume aggregation, primary and secondary processing, value addition, collective marketing, brand building and ensuring better price bargains.',
			productPara1:
				'-Creation of shorter, reliable and transparent supply chains with fewer market intermediaries and higher mutual trust, and',
			productPara2: '-Access to a trustworthy, sustainable and authentic source of market information.',
			productPara3:
				'The Producer Company would be in the business of procuring Soybean and Coriander from its member-owners at the prevailing market prices. Its warehousing and trading and subsequent processing in factories. It would be sold under different finished goods domestically and internationally.The final product would be positioned as direct from Farmer’s own hand with bio-fertilizers and chemical free production.'
		}
	];
	aboutWho: any = [
		{
			abt_title: 'Who We are',
			abt_image: '/assets/about_us/Who-We_Are-Picture.jpg',
			abt_paragraph:
				'We are a farmer producer company owned by small and marginal women farmers, who has come together as a collective and together with efficient professional management, scale and technolgy aims to empower women farmers of the country.'
		}
	];

	// value and objective
	valueData: any = [
		{
			val_imag: '/assets/about_us/Plan.svg',
			val_subtitle: 'STRATEGIC PLAN',
			val_para:
				'Producer enterprise value proposition over other company or market has an advantage as its able reduce transactional cost of the commodity and bulk transaction will enable better price realisation for the company.'
		}
	];

	isReadMore = true;
	showLess = true;

	showText() {
		this.showLess = !this.showLess;
		this.isReadMore = !this.isReadMore;
	}
	valueData1: any = [
		{
			val_imag: '/assets/about_us/Init.svg',
			val_subtitle: 'Initiative',
			val_para:
				'The professional management support would bring in initatives such as best practices SOPs, Technology driven Systems, Price discovery mechnaisms using national and international metrics and opertaions effeicieny systems.'
		}
	];
	isReadMore1 = true;
	showLess1 = true;

	showText1() {
		this.showLess1 = !this.showLess1;
		this.isReadMore1 = !this.isReadMore1;
	}

	valueData2: any = [
		{
			val_imag: '/assets/about_us/Account.svg',
			val_subtitle: 'ACCOUNTABILITY',
			val_para:
				'An appropriate mechanism has been put in place to map accountibilty and technology would be leveraged in the areas of information collection, data management and payments etc. for transparency and effective management.'
		}
	];
	isReadMore2 = true;
	showLess2 = true;

	showText2() {
		this.showLess2 = !this.showLess2;
		this.isReadMore2 = !this.isReadMore2;
	}
	valueData3: any = [
		{
			val_imag: '/assets/about_us/Itrate.svg',
			val_subtitle: 'Evaluate & Iterate',
			val_para:
				'A strong Governance mechanism has been adopted to ensure transparency, information disclosure,grievance redressal and monitoring with utmost importance to ensure good governance and course correction.'
		}
	];
	isReadMore3 = true;
	showLess3 = true;

	showText3() {
		this.showLess3 = !this.showLess3;
		this.isReadMore3 = !this.isReadMore3;
	}

	// board member
	teamMember: any = [
		{ team_img: '/assets/about_us/favicon.svg', team_title: 'Divya Yadav', team_subt: 'CEO' },
		{
			team_img: '/assets/about_us/favicon.svg',
			team_title: 'Saurabh Singh Shekhawat',
			team_subt: 'Procurement Manager'
		},
		{ team_img: '/assets/about_us/favicon.svg', team_title: 'Lavis Khandelwal', team_subt: 'Finance Manager' },
		{ team_img: '/assets/about_us/favicon.svg', team_title: 'Praveen Sharma', team_subt: 'Finance Executive' }
	];
	teamMember1: any = [
		{
			team_img1: '/assets/about_us/favicon.svg',
			team_title1: 'Piyush Garg',
			team_subt1: 'Procurement Area Officer'
		},
		{
			team_img1: '/assets/about_us/favicon.svg',
			team_title1: 'Bhawani Rathore',
			team_subt1: 'Procurement Area Officer'
		},
		{
			team_img1: '/assets/about_us/favicon.svg',
			team_title1: 'Pramod nagar',
			team_subt1: 'Procurement Area Officer'
		},
		{
			team_img1: '/assets/about_us/favicon.svg',
			team_title1: 'Rajesh Sharma',
			team_subt1: 'Procurement Area Officer'
		}
	];
	teamMember2: any = [
		{
			team_img1: '/assets/about_us/favicon.svg',
			team_title1: 'Ramesh Gujjar',
			team_subt1: 'Procurement Area Officer'
		},
		{
			team_img1: '/assets/about_us/favicon.svg',
			team_title1: 'Amit Langadi',
			team_subt1: 'Procurement Area Officer'
		},
		{
			team_img1: '/assets/about_us/favicon.svg',
			team_title1: 'Ajay Rathore',
			team_subt1: 'Procurement Area Officer'
		},
		{
			team_img1: '/assets/about_us/favicon.svg',
			team_title1: 'Arshad Mohamamd Chisti',
			team_subt1: 'Procurement Area Officer'
		}
	];
	// board of director
	product: any = [
		{ image: '/assets/about_us/ReenaMalav.jpg', title: 'Reena Malav', position: 'Director' },
		{ image: '/assets/about_us/favicon.svg', title: 'Leela Bai', position: 'Director' },
		{ image: '/assets/about_us/RenuMeena.jpg', title: 'Renu Bai', position: 'Director' },
		{ image: '/assets/about_us/RajeshBai.jpg', title: 'Rajesh Bai', position: 'Director' },
		{ image: '/assets/about_us/favicon.svg', title: 'Nirmala', position: 'Director' },
		{ image: '/assets/about_us/KrishanaKumaMali.jpg', title: 'Krishna kumari Mali ', position: 'Director' },
		{ image: '/assets/about_us/MeenaKumari.jpg', title: 'Meena Bai', position: 'Director' },
		{ image: '/assets/about_us/Avinash.jpg', title: 'Avinash Kumar Choudhary', position: 'Expert Director' },
		{ image: '/assets/about_us/favicon.svg', title: 'Divya Yadav', position: 'CEO' }
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
