import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { Hero } from './hero';
//import { HeroService } from './hero.service';

import { PAGES_MENU } from './mock-menu';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent {
 
   title = 'Trial Menu';
   menuItems = PAGES_MENU;
   //menuItems = Object.keys(PAGES_MENU);
   
}
