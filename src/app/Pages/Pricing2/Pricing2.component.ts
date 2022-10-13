import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'anglo-pricing2',
	templateUrl: './Pricing2.component.html',
	styleUrls: ['./Pricing2.component.scss']
})

export class Pricing2Component implements OnInit {

	pricing2 :any[]=[
		{
			heading:{
				title:"Basic",
				subTitle:"For most of the users"
			},
			price:"$40",
			sub:"/Mo",
			plan:[
				"10GB of Bandwidth",
				"200MB Max File Size",
				"2GHZ CPU",
				"256MB Memory",
				"1 GB Storage"
			],
			color:"primary",
			bg_color:"primary-bg"
		},
		{
			heading:{
				title:"Standard",
				subTitle:"For most of the users"
			},
			price:"$50",
			sub:"/Mo",
			plan:[
				"10GB of Bandwidth",
				"200MB Max File Size",
				"2GHZ CPU",
				"256MB Memory",
				"1 GB Storage"
			],
			color:"accent",
			bg_color:"accent-bg"
		},
		{
			heading:{
				title:"Mega",
				subTitle:"For developer"
			},
			price:"$70",
			sub:"/Mo",
			plan:[
				"10GB of Bandwidth",
				"200MB Max File Size",
				"2GHZ CPU",
				"256MB Memory",
				"1 GB Storage"
			],
			color:"primary",
			bg_color:"success-bg"
		},
		{
			heading:{
				title:"Master",
				subTitle:"For large enterprises"
			},
			price:"$100",
			sub:"/Mo",
			plan:[
				"10GB of Bandwidth",
				"200MB Max File Size",
				"2GHZ CPU",
				"256MB Memory",
				"1 GB Storage"
			],
			color:"warn",
			bg_color:"warn-bg"
		},
	]
	
	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}
}
