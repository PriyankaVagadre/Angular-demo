import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navabar',
  templateUrl: './side-navabar.component.html',
  styleUrls: ['./side-navabar.component.scss']
})
export class SideNavabarComponent implements OnInit {

  public list =[
    {
      name: 'Dashboard',
      icon: 'home',
      url :''
    },
    {
      name: 'Profile',
      icon: 'home',
      url :''
    },
    {
      name: 'Plan of Study',
      icon: 'home',
      url :''
    },
    {
      name: 'Setting',
      icon: 'S',
      url :''
    },
    {
      name: 'Help?',
      icon: 'S',
      url :''
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
