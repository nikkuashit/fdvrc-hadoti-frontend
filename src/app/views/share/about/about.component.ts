import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {
	// mission
	aboutMission: any = [
		{
			abt_title: 'Mission and Vission',
			abt_image: '/assets/about_us/mission and vission.png',
			abt_paragraph:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, interdum ultrices sit. Turpis iaculis lacus, tortor ut sagittis suscipit auctor ut. Praesent nunc, dui montes, sagittis sit egestas gravida eget. Amet a in in enim duis fames id sagittis mi. Tellus tortor sed turpis convallis nec lobortis id. Elit lectus sodales in vitae. Ac posuere gravida id egestas morbi nam mi nulla. Nunc diam consectetur amet ut dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, interdum ultrices sit. Turpis iaculis lacus, tortor ut sagittis suscipit auctor ut. Praesent nunc, dui montes, sagittis sit egestas gravida eget. Amet a in in enim duis fames id sagittis mi. Tellus tortor sed turpis convallis nec lobortis id. Elit lectus sodales in vitae. Ac posuere gravida id egestas morbi nam mi nulla. Nunc diam consectetur amet ut dapibus.'
		}
	];
	aboutProduct: any = [
		{
			abt_title: 'Product and Services',
			abt_image: 'assets/about_us/prod and services.png',
			abt_paragraph:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, interdum ultrices sit. Turpis iaculis lacus, tortor ut sagittis suscipit auctor ut. Praesent nunc, dui montes, sagittis sit egestas gravida eget. Amet a in in enim duis fames id sagittis mi. Tellus tortor sed turpis convallis nec lobortis id. Elit lectus sodales in vitae. Ac posuere gravida id egestas morbi nam mi nulla. Nunc diam consectetur amet ut dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, interdum ultrices sit. Turpis iaculis lacus, tortor ut sagittis suscipit auctor ut. Praesent nunc, dui montes, sagittis sit egestas gravida eget. Amet a in in enim duis fames id sagittis mi. Tellus tortor sed turpis convallis nec lobortis id. Elit lectus sodales in vitae. Ac posuere gravida id egestas morbi nam mi nulla. Nunc diam consectetur amet ut dapibus.'
		}
	];
	aboutWho: any = [
		{
			abt_title: 'Who We are',
			abt_image: '/assets/about_us/who we are.png',
			abt_paragraph:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, interdum ultrices sit. Turpis iaculis lacus, tortor ut sagittis suscipit auctor ut. Praesent nunc, dui montes, sagittis sit egestas gravida eget. Amet a in in enim duis fames id sagittis mi. Tellus tortor sed turpis convallis nec lobortis id. Elit lectus sodales in vitae. Ac posuere gravida id egestas morbi nam mi nulla. Nunc diam consectetur amet ut dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, interdum ultrices sit. Turpis iaculis lacus, tortor ut sagittis suscipit auctor ut. Praesent nunc, dui montes, sagittis sit egestas gravida eget. Amet a in in enim duis fames id sagittis mi. Tellus tortor sed turpis convallis nec lobortis id. Elit lectus sodales in vitae. Ac posuere gravida id egestas morbi nam mi nulla. Nunc diam consectetur amet ut dapibus.'
		}
	];
	showLess = true;
	isReadMore = true;
	showText() {
		this.showLess = !this.showLess;
		this.isReadMore = !this.isReadMore;
	}
	showLess1 = true;
	isReadMore_1 = true;
	showText_1() {
		this.showLess1 = !this.showLess1;
		this.isReadMore_1 = !this.isReadMore_1;
	}
	showLess2 = true;
	isReadMore_2 = true;
	showText_2() {
		this.showLess2 = !this.showLess2;
		this.isReadMore_2 = !this.isReadMore_2;
	}

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
	// board member
	teamMember: any = [
		{ team_img: '/assets/about_us/team-memb_1.png', team_title: 'Miss Puja', team_subt: 'Head of Department' },
		{ team_img: '/assets/about_us/team-memb_2.png', team_title: 'Mr. Ahuja', team_subt: 'Social Worker' },
		{ team_img: '/assets/about_us/team-memb_3.png', team_title: 'Mr. Rathor', team_subt: 'Director General' },
		{ team_img: '/assets/about_us/team-memb_4.png', team_title: 'Ajay Sinha', team_subt: 'Media Anchor' }
	];
	teamMember1: any = [
		{ team_img1: '/assets/about_us/team-memb_5.png', team_title1: 'Mr.Kapoor', team_subt1: 'Social Worker' },
		{ team_img1: '/assets/about_us/team-memb_6.png', team_title1: 'Ranveer Kumar', team_subt1: 'Police Dept.' },
		{ team_img1: '/assets/about_us/team-memb_7.png', team_title1: 'Kumar Gaurav', team_subt1: 'Poltical Worker' },
		{ team_img1: '/assets/about_us/team-memb_4.png', team_title1: 'MD. Irfan', team_subt1: 'Head of Department' }
	];
	// board of director
	product: any = [
		{ image: '/assets/about_us/memb_1.png', title: 'mr.ahuja', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_2.png', title: 'kumar seti', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_3.png', title: 'rahul saksena', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_4.png', title: 'mr.Mukesh kr', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_5.png', title: 'mr.jon', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_6.png', title: 'Miss rita ', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_7.png', title: 'Ali khan', position: 'lorem ipsum' },
		{ image: '/assets/about_us/memb_7.png', title: 'mr.ahuja', position: 'lorem ipsum' }
	];
	responsiveOptions: any;
	constructor() {
		this.responsiveOptions = [
			{
				breakpoint: '1920px',
				numVisible: 4,
				numScroll: 4
			},
			{
				breakpoint: '1200px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '968px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '568px',
				numVisible: 1,
				numScroll: 1
			}
		];
	}

	ngOnInit(): void {}
}
