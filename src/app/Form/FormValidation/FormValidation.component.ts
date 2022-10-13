import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormArray } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-validation',
  templateUrl: './FormValidation.component.html',
  styleUrls: ['./FormValidation.component.scss']
})

export class FormValidationComponent implements OnInit {

	basicForm      : FormGroup;
	submitForm     : FormGroup;
	emailPattern   : string    ="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	urlPattern     : string    ="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})";
	rangePattern   : string    ="[5,6,7,8,9]";
	items	         : string[]  = ['Item1', 'Item2', 'Item3'];

	constructor(private formBuilder : FormBuilder,
					public translate : TranslateService,
					private toastr: ToastrService) { }

	ngOnInit(){

		this.basicForm = this.formBuilder.group({  
  			name  		: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
  			email 		: ['',[Validators.required,Validators.pattern(this.emailPattern)]] 
		});

		this.submitForm = this.formBuilder.group({
			name  		: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
			email 		: ['',[Validators.required,Validators.pattern(this.emailPattern)]] ,
			url			: ['',[Validators.required,Validators.pattern(this.urlPattern)]],
			range		   : ['',[Validators.required,Validators.pattern(this.rangePattern)]],
			password	   : ['',[Validators.required]],
			confirmPass	: ['',[Validators.required]],
			items		   : ['',[Validators.required]],
			validate	   : ['',[Validators.required]]
		})
	}

	/**
	 * onSubmit used to submit the form validation form values.
	 */	
	onSubmit(){
   	if(this.submitForm.valid){
   		this.toastr.success("Form Submitted!");
   	} else {
   		for(let i in this.submitForm.controls)
			{
				this.submitForm.controls[i].markAsTouched();
			}
   	}
   }
   
   /**
  	 * onClear used to clear the form validation form values
  	 */
   onClear(){
  		this.submitForm.reset();
  		this.submitForm.controls['items'].setValue('');
  	}	
}