import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'anglo-users-list',
	templateUrl: './UsersList.component.html',
	styleUrls: ['./UsersList.component.scss']
})
export class UsersListComponent implements OnInit {

	userList : any [] = [
		{
			img:"/assets/img/user-3.jpg",
			name:"Gregory A.",
			designation:"Web Designer & Developer",
			connections:["/assets/img/user-4.jpg","/assets/img/user-5.jpg","/assets/img/user-6.jpg","/assets/img/user-7.jpg"],
			status:1
		},
		{
			img:"/assets/img/user-4.jpg",
			name:"Louise Jenkins",
			designation:"Web Designer & Developer",
			connections:["/assets/img/user-4.jpg","/assets/img/user-5.jpg","/assets/img/user-6.jpg","/assets/img/user-7.jpg"],
			status:0
		},
		{
			img:"/assets/img/user-5.jpg",
			name:"Francis Marsh",
			designation:"Web Designer & Developer",
			connections:["/assets/img/user-4.jpg","/assets/img/user-5.jpg","/assets/img/user-6.jpg","/assets/img/user-7.jpg"],
			status:1
		},
		{
			img:"/assets/img/user-6.jpg",
			name:"Jack Larson",
			designation:"Web Designer & Developer",
			connections:["/assets/img/user-4.jpg","/assets/img/user-5.jpg","/assets/img/user-6.jpg","/assets/img/user-7.jpg"],
			status:0
		},
		{
			img:"/assets/img/user-9.jpg",
			name:"Sam Ryan",
			designation:"Web Designer & Developer",
			connections:["/assets/img/user-4.jpg","/assets/img/user-5.jpg","/assets/img/user-6.jpg","/assets/img/user-7.jpg"],
			status:0
		},
		{
			img:"/assets/img/user-12.jpg",
			name:"Josie Tate",
			designation:"Web Designer & Developer",
			connections:["/assets/img/user-4.jpg","/assets/img/user-5.jpg","/assets/img/user-6.jpg","/assets/img/user-7.jpg"],
			status:1
		}
	]
	
	social_icon:any[]=[
		{
			icon:"fa fa-facebook",
			link:"https://www.facebook.com/",
			color:"primary-color"
		},
		{
			icon:"fa fa-twitter",
			link:"https://twitter.com/",
			color:"primary-color"
		},
		{
			icon:"fa fa-google",
			link:"https://www.google.com/",
			color:"primary-color"
		},
		{
			icon:"fa fa-linkedin",
			link:"https://www.linkedin.com/",
			color:"primary-color"
		},
	]

	constructor(public translate : TranslateService) { }

	ngOnInit() { }
}