import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-us',
	templateUrl: './contact-us.component.html',
	styleUrls: [ './contact-us.component.scss' ]
})
export class ContactUsComponent implements OnInit {
	@Input() item: any;
	pageData: any;
	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('contact', this.pageData);
	}
}
