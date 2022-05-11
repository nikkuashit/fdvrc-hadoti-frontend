import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-progress-number',
	templateUrl: './progress-number.component.html',
	styleUrls: [ './progress-number.component.scss' ]
})
export class ProgressNumberComponent implements OnInit {
	@Input() item: any;
	pageData: any;
  farmerMemberCount: number = 0;
	farmerMemberCountstop: any;

	dc3Count: number = 0;
	dc3Countstop: any;

	productCount: number = 0;
	productCountstop: any ;

	villageCount: number = 0;
	villageCountstop: any;



	constructor() {}

	ngOnInit(): void {
		this.pageData = this.item;
		console.log('pageData progress', this.pageData);

    // this.pageData.component_data.forEach((element:any, index:any) => {
    //   this.pageData.component_data[index].subtitle = setInterval(() => {
    //     this.pageData.component_data[index].temp_no = 0;
    //     this.pageData.component_data[index].temp_no++;
    //     if (this.pageData.component_data[index].temp_no == element.subtitle ) {
    //       clearInterval(this.pageData.component_data[index].temp_no);
    //     }
    //   }, 500);
    // });

	// this.farmerMemberCountstop = setInterval(() => {
	// 	this.farmerMemberCount++;
	// 	if (this.farmerMemberCount == 5485) {
	// 		clearInterval(this.farmerMemberCountstop);
	// 	}
	// }, 30);


	// this.dc3Countstop = setInterval(() => {
	// 	this.dc3Count++;
	// 	if (this.dc3Count == 20) {
	// 		clearInterval(this.dc3Countstop);
	// 	}
	// }, 250);


	// this.productCountstop = setInterval(() => {
	// 	this.productCount++;
	// 	if (this.productCount == 2) {
	// 		clearInterval(this.productCountstop);
	// 	}
	// }, 250);

	// this.villageCountstop = setInterval(() => {
	// 	this.villageCount++;
	// 	if (this.villageCount == 135) {
	// 		clearInterval(this.villageCountstop);
	// 	}
	// }, 70);

	}
}
