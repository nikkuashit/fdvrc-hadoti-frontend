import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-component-center-end',
	templateUrl: './component-center-end.component.html',
	styleUrls: [ './component-center-end.component.scss' ]
})
export class ComponentCenterEndComponent implements OnInit {
	@Input() item: any;
	pageData: any;
	isReadMore = true;
	showLess = true;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item.component_data;
		console.log('pageData', this.pageData);
		this.pageData.forEach((element: any, index: any) => {
			this.pageData[index].is_showmore = true;
		});
		console.log(this.pageData);
	}

	showText(i: any) {
		// this.showLess = !this.showLess;
		// this.isReadMore = !this.isReadMore;
		this.pageData[i].is_showmore = !this.pageData[i].is_showmore;
	}
}
