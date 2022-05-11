import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-right-to-left',
	templateUrl: './right-to-left.component.html',
	styleUrls: [ './right-to-left.component.scss' ]
})
export class RightToLeftComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item.component_data;
		console.log('right card end', this.pageData);
	}
}
