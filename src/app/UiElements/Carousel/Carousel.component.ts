import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-carousel',
  templateUrl: './Carousel.component.html',
  styleUrls: ['./Carousel.component.scss']
})
export class CarouselComponent implements OnInit {

	imageSources1 : any[] = [
		{ url: '/assets/img/green.jpg',caption:'The first slide'},
		{ url: '/assets/img/bg.jpg',caption:'The second slide' },
		{ url: '/assets/img/blog-1.jpg',caption:'The third slide'}
	];

	imageSources2 : any[] = [
		{ url: '/assets/img/blog-1.jpg',caption:'The first slide'},
		{ url: '/assets/img/green.jpg',caption:'The second slide'},
		{ url: '/assets/img/bg.jpg',caption:'The third slide' }	
	];

	imageSources3 : any[] = [
		{ url: '/assets/img/bg.jpg'},
		{ url: '/assets/img/blog-1.jpg'},
		{ url: '/assets/img/green.jpg'}		
	];

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}

}
