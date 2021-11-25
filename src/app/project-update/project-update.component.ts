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
		if (this.farmerMemberCount == 1000) {
			clearInterval(this.farmerMemberCountstop);
		}
	}, 50);

	productCount: number = 0;
	productCountstop: any = setInterval(() => {
		this.productCount++;
		if (this.productCount == 30) {
			clearInterval(this.productCountstop);
		}
	}, 100);
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
				labels: [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
				datasets: [
					{
						label: '# of Votes',

						data: [ 12, 19, 3, 5, 2, 3 ],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
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
				},
				plugins: {
					legend: {
						labels: {
							boxWidth: 0
						}
					}
				}
			}
		});
	}
	loadChart(): void {
		var myChart = new Chart('pieChart', {
			type: 'doughnut',
			data: {
				labels: [ 'Red', 'Blue', 'Yellow' ],
				datasets: [
					{
						label: 'My First Dataset',
						data: [ 300, 50, 100 ],
						backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)' ],
						hoverOffset: 4
					}
				]
			}
		});
	}
}
