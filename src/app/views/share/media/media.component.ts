import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-media',
	templateUrl: './media.component.html',
	styleUrls: [ './media.component.scss' ]
})
export class MediaComponent implements OnInit {
	memberData: any = [
		{ gal_title: 'Title', image: '/assets/media/FieldPicture.jpeg' },

		{ gal_title: 'Title', image: '/assets/media/WhatsAppImage1.jpeg' },
		{ gal_title: 'Title', image: '/assets/media/NewsCoverage.jpeg' },
		{ gal_title: 'Title', image: '/assets/media/WhatsAppImage3.jpeg' }
	];

	constructor() {}

	ngOnInit(): void {}
}
