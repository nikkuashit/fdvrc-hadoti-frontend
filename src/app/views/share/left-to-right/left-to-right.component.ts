import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-left-to-right',
	templateUrl: './left-to-right.component.html',
	styleUrls: [ './left-to-right.component.scss' ]
})
export class LeftToRightComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item.component_data;
		console.log('right card end', this.pageData);
	}
}
