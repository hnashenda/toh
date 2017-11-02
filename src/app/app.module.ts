import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule, MdDatepickerModule, MdNativeDateModule,MdCheckboxModule } from '@angular/material';

import { AsyncChartComponent, DynamicChartComponent, LiveChartComponent } from './components';



import {
  ChartistModule
} from 'ng-chartist';

//import {
//MyAppComponent
//} from './my-app';



import {ContentElementDialog, IFrameDialog, JazzDialog} from './dialog/dialog-demo.component';

import { BootstrapGridModule } from 'ng2-bootstrap-grid';

import { AppComponent }         from './app.component';
//import { UserComponent }         from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { MenuComponent }      from './menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ChipsComponent } from './chips/chips.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
//import { DialogComponent } from './dialog/dialog.component';GridListDemo
import { CardDemo} from './card/card-demo.component';
import { DatepickerDemo} from './datepicker/datepicker.component';
//import { CalenderComponent} from './calender/calender.component';
import { DialogDemo} from './dialog/dialog-demo.component';
import { GridListDemo } from './grid-list/grid-list.component';
import { FormsComponent } from './forms/forms.component';

import { RadioComponent } from './radio/radio.component';
import { RippleComponent } from './ripple/ripple.component';
import { SliderComponent } from './slider/slider.component';


import { SettingsComponent } from './settings/settings.component';

import { TabsComponent } from './tabs/tabs.component';
import { TooltipDemo } from './tooltip/tooltip.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { MapsfrontComponent } from './maps-front/maps-front.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { ComponentsModule } from './components/components.module';

import { MySettingsComponent } from './mysettings/mysettings.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	ComponentsModule,
	ChartistModule,
    AppRoutingModule,
	MaterialModule,
	MdListModule,
	MdDatepickerModule,
	MdNativeDateModule,
	HttpModule,	
	MdSidenavModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
	MdCardModule,
    MdToolbarModule,
    MdIconModule,
	MdCheckboxModule,
	BootstrapGridModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
	ChartsComponent,
    HeroDetailComponent,
    HeroesComponent,
	MenuComponent,
	UserProfileComponent,
	ProgressBarComponent,
	ProgressSpinnerComponent,
	ChipsComponent,
	CardDemo,
	CheckboxComponent,
	LiveChartComponent, 
	AsyncChartComponent, 
	DynamicChartComponent,
	//DialogComponent,
	//CalenderComponent,
	DatepickerDemo,
	DialogDemo,
	TableListComponent,
	ButtonsComponent,
	GridListDemo,
	FormsComponent,
	JazzDialog,
	ContentElementDialog,
	IFrameDialog,
	MySettingsComponent,	
	TabsComponent,
	TooltipDemo,
	RadioComponent,
	SliderComponent,
	RippleComponent,
	
	SettingsComponent,
	TypographyComponent,
	IconsComponent,
	MapsComponent,
	MapsfrontComponent,
	NotificationsComponent,
	UpgradeComponent,
	//UserComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ],
   entryComponents: [   
    JazzDialog,
    ContentElementDialog,
    IFrameDialog,    
  ],
})
export class AppModule { }
