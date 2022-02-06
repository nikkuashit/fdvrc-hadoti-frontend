import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-center-end',
  templateUrl: './component-center-end.component.html',
  styleUrls: ['./component-center-end.component.scss']
})
export class ComponentCenterEndComponent implements OnInit {
  @Input() item: any;
  pageData: any;
  isReadMore = true;
	showLess = true;

  constructor() {

  }

  ngOnInit(): void {
    this.pageData = this.item.component_data;
    console.log('pageData', this.pageData)
  }

  showText() {
		this.showLess = !this.showLess;
		this.isReadMore = !this.isReadMore;
	}

}
