import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: any = [
    {
      title: 'Home',
      child: []
    },
    {
      title: 'About Us',
      child: [
        {
          title: 'Member'
        },
        {
          title: 'Another action'
        },
        {
          title: 'Something else here'
        }

      ]
    },
    {
      title: 'Product Update',
      child: [
        {
          title: 'Product'
        },
        {
          title: 'Another action'
        },
        {
          title: 'Something else here'
        }
      ]
    },
    {
      title: 'Media',
      child: [
        {
          title: 'Contact us'
        },
        {
          title: 'Engage With Us'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  navigatePage(test=null){

  }
}
