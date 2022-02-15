import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss']
})
export class TeamMemberCardComponent implements OnInit {
  @Input() item: any;
  pageData: any;

  constructor() { }

  ngOnInit(): void {
    this.pageData = this.item.component_data;
    console.log('team_member', this.pageData)
  }

}
