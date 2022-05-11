import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-card-hover',
  templateUrl: './square-card-hover.component.html',
  styleUrls: ['./square-card-hover.component.scss']
})
export class SquareCardHoverComponent implements OnInit {
  @Input() item: any;
  pageData: any;

  constructor() { }

  ngOnInit(): void {
    this.pageData = this.item;
    console.log('right card end', this.pageData)
  }

}
