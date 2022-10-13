import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'anglo-edit-dialog',
  templateUrl: './EditDialog.component.html',
  styleUrls: ['./EditDialog.component.scss']
})
export class EditDialogComponent implements OnInit {
	
	form:FormGroup
	data:any;

	constructor(public formBuilder:FormBuilder,
					public dialogRef:MatDialogRef<EditDialogComponent>) { }
	
	ngOnInit() 
	{
		this.form = this.formBuilder.group({
			userName : [],
			email		: []
		});
		if(this.data){
			this.form.patchValue({
				userName : this.data.userName,
				email		: this.data.email
			});
		}
	}

	onFormSubmit(){
		this.dialogRef.close(this.form.value);
	}  
}
