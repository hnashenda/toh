import { Component, OnInit } from '@angular/core';

declare const google: any;
interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-mapsfront',
  templateUrl: './maps-front.component.html',
  styleUrls: ['./maps-front.component.css']
})
export class MapsfrontComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
      const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
      const mapOptions = {
          zoom: 2,
          center: myLatlng,
          scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: /*[
              {'featureType': 'water', 'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]},
              {'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{'hue': '#000'},
              {'saturation': -100}, {'lightness': 99}]},
              {'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#000'},
              {'lightness': 54}]},
              {'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{'color': '#000'}]},
              {'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ccdca1'}]},
              {'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#000'}]},
              {'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#000'}]},
              {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]},
              {'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{'visibility': 'on'},
              {'color': '#b8cb93'}]},
              {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]},
              {'featureType': 'poi.sports_complex', 'stylers': [{'visibility': 'on'}]},
              {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]},
              {'featureType': 'poi.business', 'stylers': [{'visibility': 'simplified'}]}
          ]*/
		  [
					  {
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#212121"
						  }
						]
					  },
					  {
						"elementType": "labels.icon",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#757575"
						  }
						]
					  },
					  {
						"elementType": "labels.text.stroke",
						"stylers": [
						  {
							"color": "#212121"
						  }
						]
					  },
					  {
						"featureType": "administrative",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#757575"
						  },
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "administrative.country",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#9e9e9e"
						  }
						]
					  },
					  {
						"featureType": "administrative.land_parcel",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "administrative.locality",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#bdbdbd"
						  }
						]
					  },
					  {
						"featureType": "administrative.neighborhood",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "poi",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "poi",
						"elementType": "labels.text",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "poi",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#757575"
						  }
						]
					  },
					  {
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#181818"
						  }
						]
					  },
					  {
						"featureType": "poi.park",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#616161"
						  }
						]
					  },
					  {
						"featureType": "poi.park",
						"elementType": "labels.text.stroke",
						"stylers": [
						  {
							"color": "#1b1b1b"
						  }
						]
					  },
					  {
						"featureType": "road",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "road",
						"elementType": "geometry.fill",
						"stylers": [
						  {
							"color": "#2c2c2c"
						  }
						]
					  },
					  {
						"featureType": "road",
						"elementType": "labels",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "road",
						"elementType": "labels.icon",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "road",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#8a8a8a"
						  }
						]
					  },
					  {
						"featureType": "road.arterial",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#373737"
						  }
						]
					  },
					  {
						"featureType": "road.highway",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#3c3c3c"
						  }
						]
					  },
					  {
						"featureType": "road.highway.controlled_access",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#4e4e4e"
						  }
						]
					  },
					  {
						"featureType": "road.local",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#616161"
						  }
						]
					  },
					  {
						"featureType": "transit",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "transit",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#757575"
						  }
						]
					  },
					  {
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#000000"
						  }
						]
					  },
					  {
						"featureType": "water",
						"elementType": "labels.text",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "water",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#3d3d3d"
						  }
						]
					  }
					]
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
      };
      const mapfront = new google.maps.Map(document.getElementById('mapfront'), mapOptions);
      const Marker = new google.maps.Marker({
          position: myLatlng,
          title: 'Hello World!'
      });
  // To add the marker to the map, call setMap();
  Marker.setMap(mapfront);
  }

}
