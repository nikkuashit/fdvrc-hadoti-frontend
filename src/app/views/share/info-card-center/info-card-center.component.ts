import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card-center',
  templateUrl: './info-card-center.component.html',
  styleUrls: ['./info-card-center.component.scss']
})
export class InfoCardCenterComponent implements OnInit {
  @Input() item: any;
  items: any;
  constructor() { }

  ngOnInit(): void {
    this.items = this.item;
    console.log('pageData info card', this.items)
  }

}
