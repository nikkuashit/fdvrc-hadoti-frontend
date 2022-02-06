import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  companyData: any;
	ToggleNavBar() {
		let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
		if (element.getAttribute('aria-expanded') == 'true') {
			element.click();
		}
	}

  menuList : any = [];

	constructor(public coreService: CoreService, public router: Router) {
    this.getMenuList();
    this.getCompanyProfile();
  }

	ngOnInit(): void {

  }

  getCompanyProfile(){
    this.coreService.getCompanyProfile().subscribe(
      res => {
        let data: any = res;
        this.companyData = data[0];
        console.log(res);
        console.log('company test ',this.companyData);
      },
      error => {
        console.log(error);
      }
    );
  }

  getMenuList(){
    this.coreService.getMenuList().subscribe(
      res => {
        this.menuList = res;
        console.log('menuListtest ',this.menuList);
      },
      error => {
        console.log(error);
      }
    );
  }


  navigatePage(data: any, data2:any){
    console.log(data);
    if(data2){
      this.router.navigate(['/'+data.pk]);
    }else{
      this.router.navigate(['/'+data.pk]);
    }

  }
}
