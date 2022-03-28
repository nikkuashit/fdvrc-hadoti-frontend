import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-latest-news',
	templateUrl: './latest-news.component.html',
	styleUrls: [ './latest-news.component.scss' ]
})
export class LatestNewsComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('latest news', this.pageData);
	}
}
