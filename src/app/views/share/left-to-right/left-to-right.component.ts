import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-to-right',
  templateUrl: './left-to-right.component.html',
  styleUrls: ['./left-to-right.component.scss']
})
export class LeftToRightComponent implements OnInit {

  @Input() item: any;
  pageData: any;
  isReadMore = true;
	showLess = true;

	showLess1 = true;
  isReadMore_1 = true;
	showText_1() {
		this.showLess1 = !this.showLess1;
		this.isReadMore_1 = !this.isReadMore_1;
	}
  constructor() { }

  ngOnInit(): void {
    this.pageData = this.item.component_data;
    console.log('right card end', this.pageData)
  }

  showText() {
		this.showLess = !this.showLess;
		this.isReadMore = !this.isReadMore;
	}
}
