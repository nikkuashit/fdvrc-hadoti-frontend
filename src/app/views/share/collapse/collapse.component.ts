import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  @Input () item: any;
  productData : any = [];
  productData2 : any = [];
  pageData: any;

  constructor() { }

  ngOnInit(): void {
    this.pageData = this.item;
    if(this.item && this.item.component_data){
      this.item.component_data.forEach((element:any, index:any) => {
        if(element.on_landing){
          this.productData.push(element);
        }else{
          this.productData2.push(element);
        }
      });
    }
    console.log('pageData', this.pageData)
  }

}
