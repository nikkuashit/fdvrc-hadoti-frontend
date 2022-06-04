import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-tender',
	templateUrl: './tender.component.html',
	styleUrls: [ './tender.component.scss' ]
})
export class TenderComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	active_tender: any = [];
	archive_tender: any = [];
	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		if (this.item && this.item.component_data) {
			this.item.component_data.forEach((e: any, i: any) => {
				if (e.is_active) {
					this.active_tender.push(e);
				} else this.archive_tender.push(e);
			});
		}
		console.log('tender', this.pageData);
	}
}
