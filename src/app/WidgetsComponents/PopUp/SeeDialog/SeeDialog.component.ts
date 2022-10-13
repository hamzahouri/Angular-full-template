import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-see-dialog',
  templateUrl: './SeeDialog.component.html',
  styleUrls: ['./SeeDialog.component.scss']
})
export class SeeDialogComponent implements OnInit {

	data : any;

	constructor(public dialogRef:MatDialogRef<SeeDialogComponent>) { }

	ngOnInit() {
	}

}
