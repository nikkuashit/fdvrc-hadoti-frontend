import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	ToggleNavBar() {
		let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
		if (element.getAttribute('aria-expanded') == 'true') {
			element.click();
		}
	}

	constructor() {}

	ngOnInit(): void {}

	navigatePage(test = null) {}
}
