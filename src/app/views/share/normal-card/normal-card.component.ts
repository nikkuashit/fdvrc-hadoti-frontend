import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-normal-card',
	templateUrl: './normal-card.component.html',
	styleUrls: [ './normal-card.component.scss' ]
})
export class NormalCardComponent implements OnInit {
	@Input() item: any;
	pageData: any;
	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('pageData', this.pageData);
	}
}
