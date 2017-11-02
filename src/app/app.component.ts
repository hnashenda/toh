import { Component, Inject } from '@angular/core';
//import { DOCUMENT } from '@angular/platform-browser';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { PAGES_MENU } from './mock-menu';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Andromeda';
   menuItems = PAGES_MENU;
   private settingsVisible: boolean;
   
   
   // Get the modal
	modal = document.getElementById('myModal');

	// Get the button that opens the modal
	btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	span = document.getElementsByClassName("close")[0];
   
   
  constructor(public location: Location) {
	  this.settingsVisible = false;
  }
  
   isMaps(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
        return false;
      }
      else {
        return true;
      }
    }
  
	
  
	settingsOpen() {
        //document.getElementById("mySettings").style.width = "250px";
		document.getElementById("mySettings").style.marginRight = "50px";
    };
    settingsClose() {
         //document.getElementById("mySettings").style.width = "0px";
		document.getElementById("mySettings").style.marginRight = "100px";

        this.settingsVisible = true;
    };
    settingsToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.settingsVisible === false) {
            this.settingsOpen();
        } else {
            this.settingsClose();
        }
    };
  
	
	
	
	
	
	

	// When the user clicks the button, open the modal 
	btn_onclick() {
		document.getElementById('myModal').style.display = "block";
	};
	
	span_onclick() {
		document.getElementById('myModal').style.display = "none";
	};

	
	  
  
  
  
  
  
}
