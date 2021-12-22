import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-known-abt-us',
	templateUrl: './known-abt-us.component.html',
	styleUrls: [ './known-abt-us.component.scss' ]
})
export class KnownAbtUsComponent implements OnInit {
	about_para: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur accusamus provident veniam aliquid blanditiis quos modi excepturi consequuntur, laboriosam incidunt, voluptatibus dolorem soluta. Voluptatem recusandae modi doloribus? Esse, minus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur accusamus provident veniam aliquid blanditiis quos modi excepturi consequuntur, laboriosam incidunt, voluptatibus dolorem soluta. Voluptatem recusandae modi doloribus? Esse, minus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur accusamus provident veniam aliquid blanditiis quos modi excepturi consequuntur, laboriosam incidunt, voluptatibus dolorem soluta. Voluptatem recusandae modi doloribus? Esse, minus!';
	showLess = true;
	isReadMore = true;
	showText() {
		this.showLess = !this.showLess;
		this.isReadMore = !this.isReadMore;
	}
	constructor() {}

	ngOnInit(): void {}
}
