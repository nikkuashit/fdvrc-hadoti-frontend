import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-media',
	templateUrl: './media.component.html',
	styleUrls: [ './media.component.scss' ]
})
export class MediaComponent implements OnInit {
	@Input() item: any;
	pageData: any;
	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item.component_data;
		console.log('gallery', this.pageData);
	}
}
