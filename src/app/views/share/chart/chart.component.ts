import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: [ './chart.component.scss' ]
})
export class ChartComponent implements OnInit {
	@Input() item: any;
	pageData: any;
	chart: any;
	chart2: any;
	constructor() {}

	ngOnInit(): void {
    this.pageData = this.item;
		console.log('pageData chart', this.pageData);

		this.chart = document.getElementById('pieChart');
		this.chart2 = document.getElementById('myChart');
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
