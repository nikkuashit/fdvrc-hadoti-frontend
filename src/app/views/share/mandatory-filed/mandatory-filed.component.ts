import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mandatory-filed',
  templateUrl: './mandatory-filed.component.html',
  styleUrls: ['./mandatory-filed.component.scss']
})
export class MandatoryFiledComponent implements OnInit {
  @Input() item: any;
	pageData: any;
  constructor() { }

  ngOnInit(): void {
		this.pageData = this.item;
	
	}

}



