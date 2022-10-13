import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-user-profile',
	templateUrl: './UserProfile.component.html',
	styleUrls: ['./UserProfile.component.scss']
})
export class UserProfileComponent implements OnInit {
	
	userEducation : any [] = [
		{ 
			designer:"Product Designer",
			airHelper:"AirHelper - London, United Kingdom",
			year:"2016-2017"
		},
		{
			designer:"App Designer",
			airHelper:"AirHelper - London, United Kingdom",
			year:"2017-2018"
		},
		{
			designer:"Service Designer",
			airHelper:"AirHelper - London, United Kingdom",
			year:"2015-2016"
		}
	]

	userSkills : any [] = [
		{
			language:"HTML",
			progress:'20'
		},
		{
			language:"Css3",
			progress:'90'
		},
		{
			language:"Photoshop",
			progress:'30'
		},
		{
			language:"Javascript",
			progress:'75'
		}
	]

	activity : any =  {
		dataOne : {
			profile_pic:"/assets/img/user-3.jpg",
			user_name:"Louise Kate",
			name:"@louisekate",
			content:"The new common language will be more simple and regular than the existing European languages. be as simple as Occidental; in fact, it will be Occidental."
		}, 
		dataTwo: {
			profile_pic:"/assets/img/user-4.jpg",
			user_name:"Annie Lee",
			name:"@Annielee",
			message:"Posted new photo",
			posted_image:"/assets/img/profile-post.jpg"
		},
		dataThree:	{
			profile_pic:"/assets/img/user-5.jpg",
			user_name:"Mark Anthony",
			name:"@MarkAnthony",
			content:"The new common language will be more simple and regular than the existing European languages."
		},
		dataFour: {
			profile_pic:"/assets/img/user-10.jpg",
			user_name:"Annie Lee",
			name:"@louisekate",
			message:"Posted 4 photos",
			posted_image:{
				img1:"/assets/img/gallery1.jpg",
				img2:"/assets/img/gallery2.jpg",
				img3:"/assets/img/gallery3.jpg",
				img4:"/assets/img/gallery4.jpg"
			}
		},
		dataFive:	{
			profile_pic:"/assets/img/user-12.jpg",
			user_name:"Mark Anthony",
			name:"@MarkAnthony",
			message:"Posted a new blog in website",
			posted_image:"/assets/img/post-2.jpg",
			headline:"How to setup your estore in 10 min.",
			content:"Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper"
		},

	}
	
	social_icon:any[]=[
		{
			icon:"fa fa-facebook",
			link:"https://www.facebook.com/",
			color:"warn-color"
		},
		{
			icon:"fa fa-twitter",
			link:"https://twitter.com/",
			color:"warn-color"
		},
		{
			icon:"fa fa-google",
			link:"https://www.google.com/",
			color:"warn-color"
		},
		{
			icon:"fa fa-linkedin",
			link:"https://www.linkedin.com/",
			color:"warn-color"
		},
	]

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}
}
