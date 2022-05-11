import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  constructor( public router: Router, public _activeRoute: ActivatedRoute, public coreService: CoreService) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe( params => {
          console.log('params',params);
          if (params) {
            this.params = params.id;

            this.coreService.getCorePageDetail(this.params).subscribe(
              res => {
                // this.showloader = false;
                let data: any = res;
                this.contentData = data.core_page;
                console.log(this.contentData);
              },
              error => {
                // this.showloader = false;
                console.log(error);
              }
            );
          }
    });

  }


}
