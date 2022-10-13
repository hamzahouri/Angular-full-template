import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-blog-layout',
  templateUrl: './BlogLayout.component.html',
  styleUrls: ['./BlogLayout.component.scss']
})
export class BlogLayoutComponent implements OnInit {
	
	@Input() card :any;

	constructor() { }

	ngOnInit() {
	}

}
