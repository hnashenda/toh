import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location,  private element: ElementRef) {
      this.location = location;
          this.sidebarVisible = true;
		  if(!this.notMobileMenu()){
			//  this.sidebarVisible = false;
			  console.log("the seed navbar "+this.sidebarVisible  );
			  //document.getElementById("mySidenav").style.width = "0";
			 // document.getElementById("mySidenav").style.left= "-250px";
		
			 //document.getElementById("main").style.marginLeft = "0px";
			// document.getElementById("main").style.left= "0px";
			  
		  }
    }

    ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
	  
	
		if (window.screen.width < 480) {	  
			 console.log(" small nav closed");
			 this.sidenavClose()
			  // document.getElementById("overlay").style.display="block";
		 }			  
	  
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

	
	
	
	
	
	
	
	
	
	
	
	
	
    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 2 );
      }
      titlee = titlee.split('/').pop();

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    };
	
	sidenavOpen() {
        document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
		//document.getElementById("main").style.left = "250px";
        this.sidebarVisible = true;
		
		 if (window.screen.width < 480) {	  
			  console.log(" small nav opened");
			  //return true;
			   document.getElementById("overlay").style.display="none";
		  }
		
		
    };
    sidenavClose() {
         document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginLeft= "0";
		//document.getElementById("main").style.left = "0px";
        this.sidebarVisible = false;
		
		 if (window.screen.width < 480) {	  
			  console.log(" small nav closed");
			 
			   document.getElementById("overlay").style.display="block";
		  }
		
		
        //body.classList.remove('nav-open');
    };
	sidenavToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidenavOpen();
			
        } else {
            this.sidenavClose();
			
        }
    };
	
	
	mobileOpen() {
		const body = document.getElementsByTagName('body')[0];
		 body.classList.add('nav-open');
        //document.getElementById("mySidenav").style.width = "250px";
		//document.getElementById("mySidenav").style.left= "0px";
		//document.getElementById("main").style.marginLeft = "250px";
		//document.getElementById("main").style.left= "250px";
		//document.getElementById("main").style.webkitTransform= "translate3d(260px, 0, 0)";
		//document.getElementById("main").style.marginLeft = "250px";
		
        this.sidebarVisible = true;
		
		 //body.classList.add('nav-open');
		
		
    };
    mobileClose() {
        //document.getElementById("mySidenav").style.width = "0";
		//document.getElementById("mySidenav").style.left= "-250px";
		
		//document.getElementById("main").style.marginLeft = "0px";
		//document.getElementById("main").style.left= "0px";
		//document.getElementById("main").style.webkitTransform= "translate3d(0px, 0, 0)";
        this.sidebarVisible = false;
        //body.classList.remove('nav-open');
		//this.sidebarVisible = true;
    };
	mobileToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.mobileOpen();
			console.log("nav opening........................................");
        } else {
            this.mobileClose();
			console.log("nav closing..........................................");
        }
    };
	
	 notMobileMenu() {

     // if ($(window).width() > 991) {
	  if (window.screen.width > 991) {	  
		  //alert("i am big");
          return true;
      }
      return false;
  };
	
	
	
}



