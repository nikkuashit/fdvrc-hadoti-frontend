import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-project-glance',
	templateUrl: './project-glance.component.html',
	styleUrls: [ './project-glance.component.scss' ]
})
export class ProjectGlanceComponent implements OnInit {
	glanceData = [
		{
			id: 1,
			title: 'Member',
			discription:
				'This is a longer card with supporting text below as a natural lead-into additionalcontent. This content is a little bit longer.',
			image: '/assets/glance/member.png'
		},
		{
			id: 1,
			title: 'Produce',
			discription:
				'This is a longer card with supporting text below as a natural lead-into additionalcontent. This content is a little bit longer.',
			image: '/assets/glance/produce.png'
		},
		{
			id: 1,
			title: 'Innovation',
			discription:
				'This is a longer card with supporting text below as a natural lead-into additionalcontent. This content is a little bit longer.',
			image: '/assets/glance/innovation.png'
		},
		{
			id: 1,
			title: 'Tender Details',
			discription:
				'This is a longer card with supporting text below as a natural lead-into additionalcontent. This content is a little bit longer.',
			image: '/assets/glance/tender.png'
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
