import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-project-glance',
	templateUrl: './project-glance.component.html',
	styleUrls: [ './project-glance.component.scss' ]
})
export class ProjectGlanceComponent implements OnInit {
	glanceData1 = [
		{
			glaimg1: '/assets/glance/member.png',
			glatiltle1: 'MEMBERS',
			glapara1:
				'Producer company will procure commodities from both SHG and Non-SHG households inthe covered villages. In order to ensure convergence, RAJEEVIKA shall consider includingnon-SHG households in its fold wherever feasible and also make efforts for SHG formationin the Non-SHG villages.'
		}
	];
	isReadMore = true;
	showLess = true;

	showText() {
		this.showLess = !this.showLess;
		this.isReadMore = !this.isReadMore;
	}

	glanceData2 = [
		{
			glaimg2: '/assets/glance/produce.png',
			glatiltle2: 'PRODUCE',
			glapara2:
				'The Producer Company would be in the business of procuring Soybean and Coriander from its member-owners at the prevailing market prices. Its warehousing and trading and subsequent processing in factories. It would be sold under different finished goods domestically and internationally.The final product would be positioned as direct from Farmer’s own hand with bio-fertilizers and chemical free production.'
		}
	];
	isReadMore1 = true;
	showLess1 = true;

	showText1() {
		this.showLess1 = !this.showLess1;
		this.isReadMore1 = !this.isReadMore1;
	}

	glanceData3 = [
		{
			glaimg3: '/assets/glance/innovation.png',
			glatiltle3: 'INNOVATION',
			glapara3:
				'The company would follow the design features of the Farmer Producer Company recommended by the FDRVC. These design features ensure transparency and fairness in the operations, objectivity and inclusiveness in Governance besides induction of professional management.'
		}
	];
	isReadMore2 = true;
	showLess2 = true;

	showText2() {
		this.showLess2 = !this.showLess2;
		this.isReadMore2 = !this.isReadMore2;
	}

	glanceData4 = [
		{
			glaimg4: '/assets/glance/tender.png',
			glatiltle4: 'TENDER DETAILS',
			glapara4: 'The News and information about upcoming tender would be avialable here.'
		}
	];
	isReadMore3 = true;
	showLess3 = true;

	showText3() {
		this.showLess3 = !this.showLess3;
		this.isReadMore3 = !this.isReadMore3;
	}
	constructor() {}

	ngOnInit(): void {}
}
