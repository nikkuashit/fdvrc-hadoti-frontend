import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {
	isMission = true;

	showText() {
		this.isMission = !this.isMission;
	}
	isProduct = true;

	showText1() {
		this.isProduct = !this.isProduct;
	}
	isWho = true;

	showText2() {
		this.isWho = !this.isWho;
	}
	memberData_1 = [
		{ mem_title: 'Mr. Murati', deg_title: 'Seniour Manger', image: '/assets/about_us/memb_1.png' },
		{ mem_title: 'mr. Sakshena', deg_title: 'Socila Worker', image: '/assets/about_us/memb_2.png' },
		{ mem_title: 'Ahmed khan', deg_title: 'Xyz Derector', image: '/assets/about_us/memb_3.png' },
		{ mem_title: 'Mr Patel', deg_title: 'Socila Worker', image: '/assets/about_us/memb_4.png' }
	];
	memberData_2 = [
		{ mem_title: 'Vijay kr', deg_title: 'Ligal Advisore', image: '/assets/about_us/memb_5.png' },
		{ mem_title: 'Miss Kriti', deg_title: 'Media', image: '/assets/about_us/memb_6.png' },
		{ mem_title: 'Sidhyu  Singh', deg_title: '  News Channel', image: '/assets/about_us/memb_7.png' },
		{ mem_title: 'Kapli', deg_title: 'Socila Worker', image: '/assets/about_us/memb_8.png' }
	];
	// value and objective
	valueData: any = [
		{
			val_imag: '/assets/about_us/global_solid.png',
			val_subtitle: 'STRATEGIC PLAN',
			val_para:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sit dictum a aliquet diam. Sit maecenas pellentesque nec vulputate semper consectetur nibh metus, egestas.'
		},
		{
			val_imag: '/assets/about_us/simple-line-icons_notebook.png',
			val_subtitle: 'Initiative',
			val_para:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sit dictum a aliquet diam. Sit maecenas pellentesque nec vulputate semper consectetur nibh metus, egestas.'
		},
		{
			val_imag: '/assets/about_us/codicon_graph.png',
			val_subtitle: 'ACCOUNTABILITY',
			val_para:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sit dictum a aliquet diam. Sit maecenas pellentesque nec vulputate semper consectetur nibh metus, egestas.'
		},
		{
			val_imag: '/assets/about_us/cil_graph.png',
			val_subtitle: 'Evaluate & Iterate',
			val_para:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sit dictum a aliquet diam. Sit maecenas pellentesque nec vulputate semper consectetur nibh metus, egestas.'
		}
	];
	constructor() {}

	ngOnInit(): void {}
}
