import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMediaData: any;
  companyData: any;
  menuList: any;

  constructor(public coreService: CoreService) { }

  ngOnInit(): void {
    this.getSocialMedia();
    this.getCompanyProfile();
    this.getMenuListForFooter();
  }

  getSocialMedia(): void {
    this.coreService.getSocialMedia().subscribe(
      res => {
        let data: any = res;
        this.socialMediaData = data[0];
        console.log(res);
        console.log('socialMediaData',this.socialMediaData);
      },
      error => {
        console.log(error);
      }
    );
  }

  getMenuListForFooter(): void {
    this.coreService.getMenuListForFooter(true).subscribe(
      res => {
        let data: any = res;
        this.menuList = data;
        console.log('menuList footer',this.menuList);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCompanyProfile(){
    this.coreService.getCompanyProfile().subscribe(
      res => {
        let data: any = res;
        this.companyData = data[0];
        console.log(res);
        console.log('company',this.companyData);
      },
      error => {
        console.log(error);
      }
    );
  }

}
