import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector		: 'anglo-forgot-password',
	templateUrl	: './ForgotPassword.component.html',
	styleUrls	: ['./ForgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

	forgotPassword	: FormGroup;
	emailPattern   : string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

	ReviewsSlides : any [] = [
		{ 
			images: '/assets/img/user-3.jpg',
			name:"Mia Mabanta",
			heading:"UI Developer",
			content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
		},
		{ 	
			images: '/assets/img/user-28.jpg',
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
   
	constructor(private router : Router, 
					private formBuilder : FormBuilder,
					private authService : AuthService,
					public translate : TranslateService) { }

	ngOnInit() {
		this.forgotPassword = this.formBuilder.group({
			email:["",[Validators.required,Validators.pattern(this.emailPattern)]],
		})
	}

	/*
	 * resetPasswordFormOpen function is used to reset your password.
	 */
	resetPasswordFormOpen(value){
		if(this.forgotPassword.valid){
			this.authService.resetPassword(value);
		}	
		else
		{
			for( let i in this.forgotPassword.controls){
				this.forgotPassword.controls[i].markAsTouched();
			}
		}
	}
}
