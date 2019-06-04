import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/classes/nav-item.class';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() item: NavItem;

  isExpanded: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  expandOrSelectItem() {
    if(this.item.subItems) this.expandItem();
    else this.selectItem();
  }

  selectItem() {
    console.log("Select Item");
  }

  expandItem() {
    this.isExpanded = !this.isExpanded;
  }
}
