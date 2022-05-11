import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-tender',
	templateUrl: './tender.component.html',
	styleUrls: [ './tender.component.scss' ]
})
export class TenderComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('tender', this.pageData);
	}
}
