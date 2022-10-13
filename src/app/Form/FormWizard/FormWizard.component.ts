import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormArray } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../Services/GlobalService/Core.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './FormWizard.component.html',
  styleUrls: ['./FormWizard.component.scss']
})
export class FormWizardComponent implements OnInit {

	profileForm				: FormGroup;
	emailPattern 			: string    ='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
	countries            : any;
	states               : any;

	constructor(private formBuilder: FormBuilder,
					private formService:CoreService,
					public translate : TranslateService,
					private toastr: ToastrService) { }

	ngOnInit() {
		this.profileForm= this.formBuilder.group({  
			email 		    :['',[Validators.required,Validators.pattern(this.emailPattern)]],
			password 	    :['',[Validators.required]], 
			address 		    :['',[Validators.required]], 
			address2 	    :['',[Validators.required]], 
			city			    :['',[Validators.required]],
			country         :['',[Validators.required]],
			states			 :['',[Validators.required]], 
			checkOut 	    :['',[Validators.required]],
			companyDeatils  :this.formBuilder.group({
				companyName     :[''],
				desination      :[''],
				companyAdd      :[''],
				companyHqAdd    :[''],
				companyCity     :[''],
				companyCountry  :[''],
				companyState    :[''],
				companyZip      :[''],
				companyCheckout :['']
			})
		});

		this.getCountries();
	}

	/**
	 *	In the Form wizard step1 and step2 form,
	 * when we select the country from drop down box then getCountries method is used to get the response. 
	 */
	getCountries() {
		this.formService.getCountries().
			subscribe( res => {this.countries=res['countries']},
						  err => console.log(err),
						  ()  => this.countries
						);
	}

	/**
	 *	In the Form wizard step1 and step2 form,
	 * when we select the state from drop down box then SelectedCountry method is used. 
	 */
	getSelectedCountry(e)
	{
		for(let countryData of this.countries)
		{
			if(countryData.country == e.value){
				this.states = countryData.states;
				break;
			}
		}
	}

	/**
	 *	In the Form wizard step1 form,
	 * when we click on Next button step2 is call and set the validation of step 2 form.  
	 */
	step2()
	{
		let companyGroup = <FormGroup>this.profileForm.controls['companyDeatils'];
		for(let i in companyGroup.controls){
			companyGroup.controls[i].setValidators(Validators.required);
			companyGroup.controls[i].updateValueAndValidity();
		}
	}

	/**
	 *	In the Form wizard step 2 form,
	 * when we click on Previous button gotoStep1 is call and clear the validation of step 2 form.  
	 */
	gotoStep1()
	{
		let companyGroup = <FormGroup>this.profileForm.controls['companyDeatils'];
		for(let i in companyGroup.controls)
		{
			companyGroup.controls[i].clearValidators();
			companyGroup.controls[i].updateValueAndValidity();
		}
		 companyGroup.markAsUntouched();
	}

	/**
	  * finish is used to when form completed.
	  */
	finish(){
		this.toastr.success("Form Finished");
	}
}
