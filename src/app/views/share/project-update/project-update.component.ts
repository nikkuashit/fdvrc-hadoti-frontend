import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
	selector: 'app-project-update',
	templateUrl: './project-update.component.html',
	styleUrls: [ './project-update.component.scss' ]
})
export class ProjectUpdateComponent implements OnInit {
	farmerMemberCount: number = 0;
	farmerMemberCountstop: any = setInterval(() => {
		this.farmerMemberCount++;
		if (this.farmerMemberCount == 5485) {
			clearInterval(this.farmerMemberCountstop);
		}
	}, 30);

	dc3Count: number = 0;
	dc3Countstop: any = setInterval(() => {
		this.dc3Count++;
		if (this.dc3Count == 20) {
			clearInterval(this.dc3Countstop);
		}
	}, 250);
	productCount: number = 0;
	productCountstop: any = setInterval(() => {
		this.productCount++;
		if (this.productCount == 2) {
			clearInterval(this.productCountstop);
		}
	}, 250);
	villageCount: number = 0;
	villageCountstop: any = setInterval(() => {
		this.villageCount++;
		if (this.villageCount == 135) {
			clearInterval(this.villageCountstop);
		}
	}, 70);

	procurement_para: string = 'A Procurement center manned by a Sanchalak will be established at the village level, facility with access to basic infrastructure (roads, electricity, and cellular network) optimally covering 3-5villages. The collection center will be having space adequate to make operation smoothly. Based on the mobilization plan and PC business phasing plan, villages will be selected. Based on the cropping pattern, no of farmers, SRLM penetration clusters will be formed. An ERP enabled Procurement system through Digital Commodity Collection Centre (D3C) would conduct the operations.';

	member_para: string = 'After selection of villages with the help of District unit of SRLM, members will be mobilized. The typical member profile will be focussed on small and marginal women farmers, but to keep businessinterest in mind, membership may be offered to mid- size and large farmers also. For mobilization of farmers, initial awareness program and training regarding Farmer Producer Company and regarding procurement will be conducted and membership will be offered to those, who are interested to be members. Mobilization cum training material will be prepared by FDRVC and training program will be conducted with the help of District Mission Management Unit of SRLM. Membership will be opened for 6 months in the initial phase, but from second year onwards, it will be opened for certain time-period every year.';

	chart: any;
	constructor() {}

	ngOnInit(): void {
		this.chart = document.getElementById('pieChart');
		this.chart = document.getElementById('myChart');
		Chart.register(...registerables);
		this.loadChart();
		this.loadChart_1();
	}
	loadChart_1(): void {
		var myChart = new Chart('myChart', {
			type: 'bar',
			data: {
				labels: [ 'Coriander', 'Soybean' ],
				datasets: [
					{
						label: 'Rajasthan',

						data: [ 2.06, 10.6 ],
						backgroundColor: [ 'rgba(106,153,208)', 'rgba(106,153,208)' ],
						borderColor: [ 'rgba(106,153,208,1)', 'rgba(106,153,208,1)' ],
						borderWidth: 2
					},
					{
						label: 'Total of Kota & Baran',

						data: [ 0.69, 3.88 ],
						backgroundColor: [ 'rgba(222,138,86)', 'rgba(222,138,86)' ],
						borderColor: [ 'rgba(222,138,86)', 'rgba(222,138,86)' ],
						borderWidth: 2
					}
				]
			},
			options: {
				scales: {
					x: {
						grid: {
							display: false
						}
					},
					y: {
						grid: {
							display: false
						}
					}
				}
				// plugins: {
				// 	legend: {
				// 		labels: {
				// 			boxWidth: 0
				// 		}
				// 	}
				// }
			}
		});
	}
	loadChart(): void {
		var myChart = new Chart('pieChart', {
			type: 'doughnut',
			data: {
				labels: [ 'red', 'Blue', 'Yellow' ],
				datasets: [
					{
						label: 'My First Dataset',
						data: [ 300, 50, 100 ],
						backgroundColor: [ 'rgb(239, 78, 88)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)' ],
						hoverOffset: 4
					}
				]
			}
		});
	}
}
