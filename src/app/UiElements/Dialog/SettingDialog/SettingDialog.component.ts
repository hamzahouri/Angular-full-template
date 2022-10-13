import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog2Component } from '../Dialog2/Dialog2.component';

@Component({
  selector: 'anglo-setting-dialog',
  templateUrl: './SettingDialog.component.html',
  styleUrls: ['./SettingDialog.component.scss']
})
export class SettingDialogComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<SettingDialogComponent>,public dialog:MatDialog) {}

	ngOnInit() {
	}

	//openDialog2 is used to when we open the another dialog.
	openDialog2()
	{
		const dialog=this.dialog.open(Dialog2Component);
	}

	//onClose function is used when you want to close the dialog.
	onClose(){
		this.dialogRef.close();
	}

}
