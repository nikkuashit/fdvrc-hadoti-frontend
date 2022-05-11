import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-two-section',
	templateUrl: './two-section.component.html',
	styleUrls: [ './two-section.component.scss' ]
})
export class TwoSectionComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('left-right-card', this.pageData);
	}
}
