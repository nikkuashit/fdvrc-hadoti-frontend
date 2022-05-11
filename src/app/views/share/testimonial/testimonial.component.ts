import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-testimonial',
	templateUrl: './testimonial.component.html',
	styleUrls: [ './testimonial.component.scss' ]
})
export class TestimonialComponent implements OnInit {
	@Input() item: any;
	pageData: any;

	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('tender', this.pageData);
	}
}
