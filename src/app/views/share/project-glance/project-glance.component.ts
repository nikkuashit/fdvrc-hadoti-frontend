import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-project-glance',
	templateUrl: './project-glance.component.html',
	styleUrls: [ './project-glance.component.scss' ]
})
export class ProjectGlanceComponent implements OnInit {
	glanceData = [
		{
			glaimg: '/assets/glance/member.png',
			glatiltle: 'MEMBERS',
			glapara:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.',
			glanread: 'Read More'
		},
		{
			glaimg: '/assets/glance/produce.png',
			glatiltle: 'PRODUCE',
			glapara:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.'
		},
		{
			glaimg: '/assets/glance/innovation.png',
			glatiltle: 'INNOVATION',
			glapara:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.'
		},
		{
			glaimg: '/assets/glance/tender.png',
			glatiltle: 'TENDER DETAILS',
			glapara:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.Fringilla nullam vel proin laoreet sem. Ornare commodo nisl arcu et nulla.Fringilla nullam vel proin laoreet sem. Ornare commodo nisl.',
			glaread: ''
		}
	];
	isReadMore = true;
	showLess = true;

	showText() {
		this.showLess = !this.showLess;
		this.isReadMore = !this.isReadMore;
	}
	constructor() {}

	ngOnInit(): void {}
}
