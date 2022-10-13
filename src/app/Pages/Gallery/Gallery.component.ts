import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'anglo-gallery',
	templateUrl: './Gallery.component.html',
	styleUrls: ['./Gallery.component.scss']
})

export class GalleryComponent implements OnInit {
	
	gallery_page :any[]=[	
		{
			img:"/assets/img/gallery-1.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-2.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-3.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-4.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-5.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-6.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-7.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-8.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-9.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-10.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-1.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		},
		{
			img:"/assets/img/gallery-1.jpg",
			inverness:"INVERNESS",
			mckenzie:"McKenzie"
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
