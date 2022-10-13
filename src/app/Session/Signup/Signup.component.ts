import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../Services/Auth.service';

@Component({
  selector: 'anglo-signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.scss']
})

export class SignupComponent implements OnInit {

	signupForm				: FormGroup;
	newTarget	   		: string = "new";
	userNameLength 		: any    =  0;
	lastNameLength			: any    =  0;
	emailPattern 			: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	
	ReviewsSlides = [
      { 
      	images: '/assets/img/user-3.jpg',
      	name:"Mia Mabanta",
      	heading:"UI Developer",
      	content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      { 	images: '/assets/img/user-28.jpg',
	      name:"Astell Mercell",
	      heading:"Director of Brand Development at Quartz",
	      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      { 
      	images: '/assets/img/user-4.jpg',
      	name:"Emmy Loren",
      	heading:"UX Developer",
      	content:"Sed consequat lobortis risus, vitae congue nulla tempor id. Curabitur eu augue id nibh tristique tristique. Phasellus vel est nisi"
      },
   ];

   social_icon : any [] = [
		{
			icon:"fa fa-facebook",
			link:"https://www.facebook.com/",
			color:"text-color",
			color_class:"facebook"
		},	
		{
			icon:"fa fa-google",
			link:"https://www.google.com/",
			color:"text-color",
			color_class:"google"
		},
		{
			icon:"fa fa-twitter",
			link:"https://twitter.com/",
			color:"text-color",
			color_class:"twitter"

		},
		{
			icon:"fa fa-github-alt",
			link:"https://github.com/",
			color:"text-color",
			color_class:"github"
		},
	]
	
	constructor(private formBuilder:FormBuilder,
				private router:Router,
				public authService: AuthService,
				public translate : TranslateService) { }

	ngOnInit() {
		this.signupForm = this.formBuilder.group({
			firstName  : ["",[Validators.required,Validators.maxLength(10)]],
			lastName   : ["",[Validators.required,Validators.maxLength(10)]],
			email      : ["",[Validators.required,Validators.pattern(this.emailPattern)]],
			password   : ["",[Validators.required,Validators.minLength(6)]] 
		})
	}
	
	/**
     *  log in page will be open. 
     */

	logIn(){
		this.router.navigate(['/session/login']);
	}

	/**
	  * onFirstName function is used to get the first name length and last name length.
	  */

	onFirstName(event){
		this.userNameLength = event.target.value.length;
	}

	/**
	  * onLastName function is used to get the last name length.
	  */
	onLastName(event){
		this.lastNameLength = event.target.value.length;
	}

	/**
	  * onSignup function is used to sign up on the anglo admin template. 
	  */
	onSignup(value){
		if(this.signupForm.valid){
			this.authService.signupUserProfile(value);
		}
		else{
			for( let i in this.signupForm.controls){
				this.signupForm.controls[i].markAsTouched();
			}
		}
	}
}

