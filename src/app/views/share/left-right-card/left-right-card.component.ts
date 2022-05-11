import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-left-right-card',
	templateUrl: './left-right-card.component.html',
	styleUrls: [ './left-right-card.component.scss' ]
})
export class LeftRightCardComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('left-right-card', this.pageData);
	}
}
