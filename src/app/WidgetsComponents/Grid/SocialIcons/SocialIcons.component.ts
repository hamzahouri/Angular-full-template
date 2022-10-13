import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'anglo-social-icons',
  templateUrl: './SocialIcons.component.html',
  styleUrls: ['./SocialIcons.component.scss']
})
export class SocialIconsComponent implements OnInit {
	
	@Input() socialIcon	 : any;
	@Input() targetNew      : string;

	constructor(private router : Router) { }

	ngOnInit() {
	}
}
