import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-enquiry',
  templateUrl: './product-enquiry.component.html',
  styleUrls: ['./product-enquiry.component.scss']
})
export class ProductEnquiryComponent implements OnInit {
  @Input () item: any;
  pageData: any;
  constructor() { }

  ngOnInit(): void {
    this.pageData = this.item;
  }

}
