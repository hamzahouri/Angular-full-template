import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-lock-screen',
	templateUrl: './LockScreen.component.html',
	styleUrls: ['./LockScreen.component.scss']
})
export class LockScreenComponent implements OnInit {

	lockScreenForm : FormGroup;
	
	ReviewsSlides  : any [] = [
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
   
	constructor(private formBuilder : FormBuilder,
			private router : Router,
			public translate : TranslateService) { }

	ngOnInit() {
		this.lockScreenForm = this.formBuilder.group({
			password : ["",[Validators.required,Validators.minLength(6)]]
		})
	}

	/*
	 * openAnglo function used to open Dashboard.
	 */

	openAnglo(){
		this.router.navigate(['/dashboard/ecommerce']);
	}

}
