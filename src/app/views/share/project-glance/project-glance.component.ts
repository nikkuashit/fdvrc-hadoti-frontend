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
				'The producer company will procure commodities from SHG and Non-SHG households in the covered villages. To ensure convergence, RAJEEVIKA shall consider including non-SHG households in its fold wherever feasible and form new SHG in those villages.'
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
				'The Producer Company would procure Soybean and Coriander from its member-owners at the prevailing market prices. Then provide services such as warehousing, trading and subsequent processing in factories. PC would sell its products domestically and internationally and position them as chemical-free or bio-fertilizers treated produce sourced directly from Farmer’s hands.'
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
			glapara4: 'The News and information about upcoming tender would be available here.'
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
