import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/classes/nav-item.class';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navItems: NavItem[] = [
    new NavItem("Date and Times"),
    new NavItem("FAQ"),
    new NavItem("Volunteer"),
    new NavItem("Rule Sets", [
      new NavItem("PC", [
        new NavItem("League of Legends"),
        new NavItem("Overwatch"),
        new NavItem("DOTA 2")
      ]),
      new NavItem("Console"),
      new NavItem("Table Top")
    ]),
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
