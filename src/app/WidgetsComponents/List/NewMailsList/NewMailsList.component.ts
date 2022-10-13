import { Component, OnInit ,Input} from '@angular/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';
import { DeleteListDialogComponent } from '../../PopUp/DeleteListDialog/DeleteListDialog.component';
import { SeeDialogComponent } from '../../PopUp/SeeDialog/SeeDialog.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-new-mails-list',
  templateUrl: './NewMailsList.component.html',
  styleUrls: ['./NewMailsList.component.scss']
})

export class NewMailsListComponent implements OnInit {

	public config: PerfectScrollbarConfigInterface = {};

	@Input() supportData : any;
	@Input() title       : string;
	action               = '';
	messageDelete		   = "Email Deleted Successfully";
	messageReply		   = "Reply Sent Successfully!";
	messageDialog        : string = "Are you sure you want to delete this email permanently?";
	popupDeleteResponse  : any;
	popupSeeResponse	   : any;
	isReply              : boolean = false; 
	supportTicketVisible : boolean = true ;
	newEmailShowSpinner  : boolean = false;

	constructor(private coreService : CoreService,
					private snackBar : MatSnackBar,
					public translate : TranslateService) { }

	ngOnInit() {
	}

	/**
	  * openDeleteFileDialog method to open the Delete Dialog.
	  */
	openDeleteFileDialog(i){
		this.coreService.deleteDialog(this.messageDialog)
			.subscribe(res=>{this.popupDeleteResponse = res},
						  err => console.log(err),
						  ()  => this.getPopupDeleteResponse(this.popupDeleteResponse, i)
						);        
	}

	/**
	  * getPopupDeleteResponse method to delete the item from To do list.
	  */
	getPopupDeleteResponse(response:any, index:any){

		if(this.popupDeleteResponse == "yes")
		{
			this.supportData.splice(index,1);
			const config = this._createConfig();
			this.snackBar.open(this.messageDelete, this.action,config);
		}
	}

	/**
	  * Additional configuration options for the snackbar.
     */
	private _createConfig() {
		const config              = new MatSnackBarConfig();
		config.verticalPosition   = 'top';
		config.horizontalPosition = 'center';
		config.duration 	        = 2000;
		return config;
	}

	//onSee is used to see the email.
	onSee(support:any){
		this.coreService.seeList(support)
			.subscribe(res => {this.popupSeeResponse = res},
				err => console.log(err),
				() => this.popupSeeResponse
			);
	}

	//onNewEmail is used open the new email.
	onNewEmail(support){
		support.isReply = !support.isReply;
	}
	
	//onReply is used to reply the mail.
	onReply(support){
		support.isReply = !support.isReply;
		const config = this._createConfig();
		this.snackBar.open(this.messageReply, this.action,config);
	}

	/**
	  * getCloseValue is used to close the particular component.
	  */
	getCloseValue($event){
		this.supportTicketVisible = false;
	}

	/*
    * showFullScreen is show the element in fullscreen .
    */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /**
     * spinnerShow is used to Reload the particular element.
     */
	spinnerShow(id){
	this.newEmailShowSpinner= true;
	   setTimeout(() => {
	      this.newEmailShowSpinner = false;
	   }, 3000);
	}
}
