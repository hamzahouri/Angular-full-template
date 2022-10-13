import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SettingDialogComponent } from './SettingDialog/SettingDialog.component';
import { Dialog2Component } from './Dialog2/Dialog2.component';
import { Dialog3Component } from './Dialog3/Dialog3.component';
import { GoogleDialogComponent } from './GoogleDialog/GoogleDialog.component';
import { ScrollableComponent } from './Scrollable/Scrollable.component';

@Component({
  selector		 : 'app-dialog',
  templateUrl	 : './Dialog.component.html',
  styleUrls		 : ['./Dialog.component.scss']
})

export class DialogComponent implements OnInit {

	constructor(public dialog: MatDialog,public translate : TranslateService) {}

	ngOnInit() {	
	}

	/**
	  * openDialog1 is used to open the Dialog1.
	  */
	openDialog1(): void {
		const dialogRef = this.dialog.open(SettingDialogComponent);
	}

	/**
	  * openDialog2 is used to open the Dialog2.
	  */
	openDialog2(){
		const dialogRef=this.dialog.open(Dialog2Component);
	}

	/**
	  * openDialog3 is used to open the Dialog3.
	  */
	openDialog3(){
		const dialogRef=this.dialog.open(Dialog3Component);
	}

	/**
	  * googleDialog is used to open the Google location service Dialog.
	  */
	googleDialog(){
		const dialogRef=this.dialog.open(GoogleDialogComponent);
	}

	/**
	  * scrollableDialog is used to open the Select Country Dialog.
	  */
	scrollableDialog(){
		const dialogRef=this.dialog.open(ScrollableComponent);
	}
}