import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-fileupload',
	templateUrl: './fileupload.component.html',
	styleUrls: [ './fileupload.component.scss' ]
})
export class FileuploadComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('fileupload', this.pageData);
	}
}
