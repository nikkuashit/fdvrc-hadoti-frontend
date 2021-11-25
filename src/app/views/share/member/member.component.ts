import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-member',
	templateUrl: './member.component.html',
	styleUrls: [ './member.component.scss' ]
})
export class MemberComponent implements OnInit {
	groupList = [ { list_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' } ];
	constructor() {}

	ngOnInit(): void {}
}
