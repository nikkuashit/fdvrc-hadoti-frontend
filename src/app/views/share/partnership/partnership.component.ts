import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-partnership',
	templateUrl: './partnership.component.html',
	styleUrls: [ './partnership.component.scss' ]
})
export class PartnershipComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('partnership', this.pageData);
	}
}
