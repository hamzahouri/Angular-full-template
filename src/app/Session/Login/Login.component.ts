import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector		: 'anglo-login',
  templateUrl	: './Login.component.html',
  styleUrls		: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm 				: FormGroup;
	newTarget	   		    : string = "new";
 	emailPattern 			: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	

	constructor(private router : Router,
		 					private formBuilder  : FormBuilder,
		 					public authService : AuthService,
		 					public translate : TranslateService) { }
		
		 	ngOnInit() {
		 		this.loginForm=this.formBuilder.group({
		 			email		: ["demo@example.com",[Validators.required,Validators.pattern(this.emailPattern)]],
		 			password	: ["0123456789",[Validators.required,Validators.minLength(6)]],
		 			validate	: ""
		 		})
		 	}

			 logInFormOpen(loginForm){
				console.log(loginForm.email);
				console.log(loginForm.password);
						 if(this.loginForm.valid){
						 	this.authService.loginUser(loginForm).subscribe({
								next : data => {
									console.log('data returned',data);
									console.log('--------------------');
									console.log('data returned',data.roles);
									if(data.roles.includes('ADMIN')) {
										console.log("after if is calld ?")
										console.log("the user is admin ?")
										this.router.navigate(['/dashboard/ecommerce']);
									} else{
										console.log("after if is calld ?")
										console.log("the user is normal user ?")
										this.router.navigate(['/session/sign-up']);

									}
								}
							});
						 }
						 else{
						 	for( let i in this.loginForm.controls)
						 	{
						 		this.loginForm.controls[i].markAsTouched();
						 	}
						 }		
					}

/** the original code is below */

// 	loginForm 				: FormGroup;
// 	newTarget	   		: string = "new";
// 	emailPattern 			: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	
// 	ReviewsSlides : any [] = [
//       { 
//        //	images: '/assets/img/user-3.jpg',
// 	   images: '/assets/img/cergab1.png',
//       	name:"Mia Mabanta",
//       	heading:"UI Developer",
//       	content:"Courtier"
//       },
//       { 	//images: '/assets/img/user-28.jpg',
// 		images: '/assets/img/cergap2.png',
// 	     // name:"Astell Mercell",
// 	      //heading:"Director of Brand Development at Quartz",
// 	      content:"Assurance en toute simplicité"
//       },
//       { 
//       	//images: '/assets/img/user-4.jpg',
//       	name:"Emmy Loren",
//       	heading:"UX Developer",
//       	content:" Courtier Grossiste"
//       },
//    ];

// 	social_icon:any[]=[
// 		{
// 			icon:"fa fa-facebook",
// 			link:"https://www.facebook.com/",
// 			color:"text-color",
// 			color_class:"facebook"
// 		},	
// 		{
// 			icon:"fa fa-google",
// 			link:"https://www.google.com/",
// 			color:"text-color",
// 			color_class:"google"
// 		},
// 		{
// 			icon:"fa fa-twitter",
// 			link:"https://twitter.com/",
// 			color:"text-color",
// 			color_class:"twitter"
// 		},
// 		{
// 			icon:"fa fa-github-alt",
// 			link:"https://github.com/",
// 			color:"text-color",
// 			color_class:"github"
// 		},
// 	]
	
// 	constructor(private router : Router,
// 					private formBuilder  : FormBuilder,
// 					public authService : AuthService,
// 					public translate : TranslateService) { }

// 	ngOnInit() {
// 		this.loginForm=this.formBuilder.group({
// 			email		: ["demo@example.com",[Validators.required,Validators.pattern(this.emailPattern)]],
// 			password	: ["0123456789",[Validators.required,Validators.minLength(6)]],
// 			validate	: ""
// 		})
// 	}

// 	/*
// 	 * signinFormOpen fuction is used to open the sign up page 
// 	 */
// 	signupFormOpen(){
// 		this.router.navigate(['/session/sign-up']);
// 	}

// 	/*
// 	 * logInFormOpen function is used to login on the anglo admin template.
// 	 */
// 	logInFormOpen(value){
// 		if(this.loginForm.valid){
// 			this.authService.loginUser(value);
// 		}
// 		else{
// 			for( let i in this.loginForm.controls)
// 			{
// 				this.loginForm.controls[i].markAsTouched();
// 			}
// 		}		
// 	}
}
