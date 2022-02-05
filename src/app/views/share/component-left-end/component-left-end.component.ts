import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-left-end',
  templateUrl: './component-left-end.component.html',
  styleUrls: ['./component-left-end.component.scss']
})
export class ComponentLeftEndComponent implements OnInit {
  @Input() item: any;
  pageData: any;
  isReadMore = true;
	showLess = true;

  constructor() { }

  ngOnInit(): void {
    this.pageData = this.item;
    console.log('pageData', this.pageData)
  }

  showText() {
		this.showLess = !this.showLess;
		this.isReadMore = !this.isReadMore;
	}

}
