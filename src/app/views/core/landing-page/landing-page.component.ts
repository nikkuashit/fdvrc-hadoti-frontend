import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  coreDetailData: any = [];
  constructor(private coreService : CoreService) { }

  ngOnInit(): void {
    this.getCorePage();
  }

  public getCorePage(){
    this.coreService.getCorePage().subscribe(
      res => {
        let data: any = res;
        if(data && data.length > 0){
          data.forEach((element:any,i:any) => {
            let tempData: any = element.core_page;
            let newarr = tempData.sort((a:any, b:any) => a.position - b.position);
            data[i].core_page_data = newarr;
          });
        }
        this.coreDetailData = data;
        console.log('coreDetailData',this.coreDetailData);
      },
      error => {
        console.log(error);
      }
    );
  }
}
