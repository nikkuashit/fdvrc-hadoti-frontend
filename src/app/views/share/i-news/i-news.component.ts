import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-i-news',
	templateUrl: './i-news.component.html',
	styleUrls: [ './i-news.component.scss' ]
})
export class INewsComponent implements OnInit {
	gData = [
		{ title: 'Krishi India', image: '/assets/l-news/first.jpg' },
		{ title: 'A successful Story', image: '/assets/l-news/second.jpg' },
		{ title: 'Good days ahead', image: '/assets/l-news/third.jpg' }
	];
	constructor() {}

	ngOnInit(): void {}
}
