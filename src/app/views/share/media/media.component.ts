import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-media',
	templateUrl: './media.component.html',
	styleUrls: [ './media.component.scss' ]
})
export class MediaComponent implements OnInit {
	memberData :any = [
		{ gal_title: 'Title', image: '/assets/gallery/farmer-unions_1606391149.jpeg' },
		{
			gal_title: 'Title',
			image: '/assets/gallery/gk4de6ag_farmers-protest-afp-pic_650x400_14_December_20.webp'
		},
		{ gal_title: 'Title', image: '/assets/gallery/images.jpg' },
		{ gal_title: 'Title', image: '/assets/gallery/in-womeninthefarm.jpg' }
	];
	memberData_2 = [
		{ gal_title: 'Title', image: '/assets/gallery/India-uplifting-the-farmer.jpg' },
		{
			gal_title: 'Title',
			image:
				'/assets/gallery/J89WBe0IT3w_r7zZES-e-er7rwyolmZ8ant3-eJxqDtCIZrpBkgZBQ-M5sFeX9CKJzKdItGxSOyH0Ud-T3N5UTb6BLc3OKXVHeE56BM8Uv4Kdy4zdVjZJLyI7KuCvnlFLw.jpg'
		},
		{ gal_title: 'Title', image: '/assets/gallery/maxresdefault.jpg' },
		{ gal_title: 'Title', image: '/assets/gallery/PM-kisan-Nidhi-Yojana.webp' }
	];
	constructor() {}

	ngOnInit(): void {}
}
