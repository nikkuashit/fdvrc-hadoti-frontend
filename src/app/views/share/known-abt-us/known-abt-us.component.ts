import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-known-abt-us',
	templateUrl: './known-abt-us.component.html',
	styleUrls: [ './known-abt-us.component.scss' ]
})
export class KnownAbtUsComponent implements OnInit {
	isReadMore = true;

	showText() {
		this.isReadMore = !this.isReadMore;
	}
	constructor() {}

	ngOnInit(): void {}
}
