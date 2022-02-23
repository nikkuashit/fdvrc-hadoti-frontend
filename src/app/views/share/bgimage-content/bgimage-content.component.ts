import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-bgimage-content',
	templateUrl: './bgimage-content.component.html',
	styleUrls: [ './bgimage-content.component.scss' ]
})
export class BgimageContentComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('bgcontent', this.pageData);
	}
}
