import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-member',
	templateUrl: './member.component.html',
	styleUrls: [ './member.component.scss' ]
})
export class MemberComponent implements OnInit {
	groupList = [ { list_title: 'Find important downloadable resources related to Hadoti MKPCL here.' } ];
	constructor() {}

	ngOnInit(): void {}
}
