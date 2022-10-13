import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Dialog3Component } from '../Dialog3/Dialog3.component';

@Component({
  selector		: 'anglo-dialog2',
  templateUrl	: './Dialog2.component.html',
  styleUrls		: ['./Dialog2.component.scss']
})
export class Dialog2Component implements OnInit {
	
	constructor( public dialogRef : MatDialogRef<Dialog2Component>,
				 	 public dialog:MatDialog) {}

	ngOnInit() {
	}

	//Dialog3 is used to open the Dialog3 Component.
	Dialog3(){
		const dialog = this.dialog.open(Dialog3Component);
	}
}