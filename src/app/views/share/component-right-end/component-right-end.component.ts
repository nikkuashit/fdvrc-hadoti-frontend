import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-right-end',
  templateUrl: './component-right-end.component.html',
  styleUrls: ['./component-right-end.component.scss']
})
export class ComponentRightEndComponent implements OnInit {
  @Input() item: any;
  pageData: any;
  isReadMore = true;
	showLess = true;

  constructor() { }

  ngOnInit(): void {
    this.pageData = this.item;
    console.log('pageData', this.pageData)
  }

}
