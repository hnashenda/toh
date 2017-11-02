import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';

import { MaterialModule } from '@angular/material';
//import 'hammerjs';

//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
	MaterialModule//,
	//MdSidenavModule,
	//MdButtonModule,
	//MdCardModule,
	//MdMenuModule,
	//MdToolbarModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
	SearchComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
	SearchComponent
  ]
})
export class ComponentsModule { }
