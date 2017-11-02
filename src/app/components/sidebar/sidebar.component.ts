import { Component, OnInit } from '@angular/core';
import {MdSidenavModule} from '@angular/material';
import {MdListModule} from '@angular/material';

import { PAGES_MENU } from '../../mock-menu';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
	{ path: 'components', title: 'Components',  icon: 'components', class: '' },
	{ path: 'forms', title: 'Forms',  icon: 'forms', class: '' },
	{ path: 'charts', title: 'Charts',  icon: 'charts', class: '' },
	{ path: 'calender', title: 'Calender',  icon: 'calender', class: '' },
	{ path: 'pages', title: 'Pages',  icon: 'pages', class: '' },
    { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  submenuItems: any[];
  public sidebarVisible: boolean;
  
  //menuItems = PAGES_MENU;

  constructor() { }

  ngOnInit() {
    //this.menuItems = ROUTES.filter(menuItem => menuItem);
	this.menuItems = PAGES_MENU.filter(menuItem => menuItem);
	this.submenuItems = PAGES_MENU.filter(menuItem => menuItem);
	 //this.menuItems = ROUTES;
	 this.menuItems = PAGES_MENU;
	 this.submenuItems = PAGES_MENU;
	 
	 if(this.notMobileMenu()){
			 // this.sidebarVisible = false;
			
			  //console.log("the seed "+this.sidebarVisible  );
			  //document.getElementById("mySidenav").style.width = "0";
			 //document.getElementById("mySidenav").style.left= "-250px";
		
			 //document.getElementById("main").style.marginLeft = "0px";
			// document.getElementById("main").style.left= "0px";
			  
		  }
	 
	 
	 
  }
  isMobileMenu() {

      if ($(window).width() > 991) {
	  //if (window.screen.width > 991) {	  
		  //alert("i am big");
          return false;
      }
      return true;
  };
  
  
  notMobileMenu() {

     // if ($(window).width() > 991) {
	  if (window.screen.width > 991) {	  
		  //alert("i am big");
          return false;
      }
      return true;
  };
  
  
  
  mobileCloseSide() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
		
		this.sidebarVisible = false;
		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('nav-open');
       // if (this.sidebarVisible === false) {
           // this.mobileOpen();
		//	console.log("opening........................................");
       // } else {
          //  this.mobileClose();
			console.log("sidebar closing..........................................");
       // }
    };
  
  
  
  
}
