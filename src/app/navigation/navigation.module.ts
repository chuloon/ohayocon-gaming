import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  declarations: [SidebarComponent, NavItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class NavigationModule { }
