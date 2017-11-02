import {Component, ViewEncapsulation} from '@angular/core';

/**
 * @title Sidenav with a FAB
 */
@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent {
	
	black() {
      document.getElementById('theme').setAttribute('href', 'assets/css/styles-black.css');
    };
	grey() {
      document.getElementById('theme').setAttribute('href', 'assets/css/styles-grey.css');
    };
	white() {
      document.getElementById('theme').setAttribute('href', 'assets/css/styles-white.css');
    };
	
	
	
	
	
	
	
	
}