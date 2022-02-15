import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from 'rxjs/operators';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-core-detail',
  templateUrl: './core-detail.component.html',
  styleUrls: ['./core-detail.component.scss']
})
export class CoreDetailComponent implements OnInit {
  params: any;
  contentData: any;
  constructor( public router: Router, public route: ActivatedRoute, public coreService: CoreService) {
  }


  ngOnInit(): void {
    this.params = this.route.snapshot.paramMap.get('id');
    console.log(this.params);
    // this.showloader = true;
    this.coreService.getCorePageDetail(this.params).subscribe(
      res => {
        // this.showloader = false;
        this.contentData = res;
        console.log(this.contentData);
      },
      error => {
        // this.showloader = false;
        console.log(error);
      }
    );

  }

// add to function two numbers


}
