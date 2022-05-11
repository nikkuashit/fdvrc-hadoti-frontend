import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-download-card',
	templateUrl: './download-card.component.html',
	styleUrls: [ './download-card.component.scss' ]
})
export class DownloadCardComponent implements OnInit {
	@Input() item: any;
	pageData: any;
	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('download', this.pageData);
	}
}
