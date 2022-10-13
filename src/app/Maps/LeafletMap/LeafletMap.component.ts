import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker } from 'leaflet';

@Component({
  selector: 'anglo-leaflet-map',
  templateUrl: './LeafletMap.component.html',
  styleUrls: ['./LeafletMap.component.scss']
})
export class LeafletMapComponent implements OnInit {

	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
				{ 
					maxZoom: 18, 
					attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				}
			)
		],
		zoom: 13,
		center: latLng(47.41322, -1.219482),
	};

	layers = [
	   marker([ 47.41322, -1.219482 ])
	];

	constructor() { 
	}

	ngOnInit() {
	}
}
