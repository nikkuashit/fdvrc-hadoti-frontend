import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() item: any;
  pageData: any;
  constructor() { }

  ngOnInit(): void {
    this.pageData = this.item;
    console.log('pageData faq', this.pageData);
  }

}
