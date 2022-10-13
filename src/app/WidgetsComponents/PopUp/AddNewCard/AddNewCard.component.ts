import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'anglo-add-new-card',
  templateUrl: './AddNewCard.component.html',
  styleUrls: ['./AddNewCard.component.scss']
})

export class AddNewCardComponent implements OnInit {
	
	months					 : any	= [1,2,3,4,5,6,7,8,9,10,11,12];
	expiryYear			  	 : any	= [2018,2019,2020,2021,2022,2023,2024,2025];
	productNumberCardForm : FormGroup;
	
	constructor(private formBuilder : FormBuilder,
			public dialogRef:MatDialogRef<AddNewCardComponent>) { }

	public myModel = '';
  	public mask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]
	
	ngOnInit() {
		this.productNumberCardForm = this.formBuilder.group({
			number		: ['',[Validators.required]],
			fullName 	: ['',[Validators.required]],
			expiryMonth : ['',[Validators.required]],
			expiryYear  : ['',[Validators.required]],
			cvv			: ['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]]
		})
	}

	onFormSubmit(){
		this.dialogRef.close(this.productNumberCardForm.value);
	}
}
