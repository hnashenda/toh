import { NgModule }             from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { MenuComponent }      from './menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ChipsComponent } from './chips/chips.component';
//import { DialogComponent } from './dialog/dialog.component';
import { CardDemo} from './card/card-demo.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerDemo} from './datepicker/datepicker.component';
//import { CalenderComponent} from './calender/calender.component';
import { DialogDemo} from './dialog/dialog-demo.component';
import { GridListDemo } from './grid-list/grid-list.component'; 
import { FormsComponent } from './forms/forms.component';
import { TypographyComponent } from './typography/typography.component';
import { RadioComponent } from './radio/radio.component';
import { RippleComponent } from './ripple/ripple.component';
import { SliderComponent } from './slider/slider.component';
import { MySettingsComponent } from './mysettings/mysettings.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipDemo } from './tooltip/tooltip.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { MapsfrontComponent } from './maps-front/maps-front.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'charts',  component: ChartsComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes',     component: HeroesComponent },
  { path: 'buttons',     component: ButtonsComponent },  
  { path: 'progress_bar',     component: ProgressBarComponent },
  { path: 'progress_spinner',     component: ProgressSpinnerComponent },
  { path: 'calender',     component: DatepickerDemo },
  { path: 'card',     component: CardDemo }, 
  { path: 'chips',     component: ChipsComponent }, 
  { path: 'checkbox',     component: CheckboxComponent }, 
  { path: 'grid',     component: GridListDemo }, 
 // { path: 'dialog',     component: DialogComponent },
//import {DialogDemo} from '../dialog/dialog-demo'; DatepickerDemo
{ path: 'dialog',     component: DialogDemo }, 
  { path: 'heroes',     component: MenuComponent },  
  { path: 'user-profile',   component: UserProfileComponent },
  { path: 'table-list',     component: TableListComponent },
  { path: 'basictables',     component: TableListComponent },
  { path: 'smarttables',     component: TableListComponent },
  { path: 'datatables',     component: TableListComponent },
  { path: 'hottables',     component: TypographyComponent },
  { path: 'inputs',     component: FormsComponent },
 // { path: 'layouts',     component: FormsComponent },
  { path: 'typography',     component: TypographyComponent },
  
  { path: 'tabs',     component: TabsComponent },
  { path: 'tooltip',     component: TooltipDemo },
  { path: 'radio',     component: RadioComponent },
  { path: 'ripple',     component: RippleComponent },
  { path: 'slider',     component: SliderComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent },
  { path: 'notifications',  component: NotificationsComponent },
 // { path: 'upgrade',        component: UpgradeComponent },
   { path: 'charts',        component: ChartsComponent }
];

@NgModule({
  imports: [CommonModule,BrowserModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
