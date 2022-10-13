import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-snackbar',
  templateUrl: './Snackbar.component.html',
  styleUrls: ['./Snackbar.component.scss']
})

export class SnackbarComponent implements OnInit {
	
	horizontalPosition 	: MatSnackBarHorizontalPosition = 'center';
	verticalPosition   	: MatSnackBarVerticalPosition   = 'bottom';
	action:string		 	= "Close";
	message  			 	= "Hello, I'm a snackbar";
	autoHide 			 	= 6000;
	addExtraClass     	= false;
	messageContextual  	= "Hello, I'm a snackbar";
	autoHideContextual 	= 6000;
	selected 				= -1;
	radioClassName			: string = "default";
	checkboxClassName	   : string = "default";
	checkboxList 			: any [] = ["Multi-line(mobile)" ,"Vertical(mobile)"];
	radioButtonColorList	: any [] = ["primary","warn","accent"];		

	constructor( public snackBar: MatSnackBar,public translate : TranslateService) {
		
	}

 	ngOnInit() {
	}

	/**
	  * colorDisplay Function is used to select the color. 
	  */
	colorDisplay(i){
		if(i==0){
			this.radioClassName = "primary";
		}else if(i==1){
			this.radioClassName="accent";
		}
		else{
			this.radioClassName ="warn";
		}
	}

	/**
	  * openSnackBar function is used to open the snackbar.
	  */
	openSnackBar(){
	   const config = this._createConfig();
		this.snackBar.open(this.message, this.action, config);
	}

	/**
	  * openMobile function is used to select the mobile type.
	  */
	openMobileSnackbar(checked, position){
		this.selected = position;
		if(checked == true){
			if(this.selected == 0){
				this.checkboxClassName = "multi-line";
			}
			else {
				this.checkboxClassName = "vertical";
			}
		}
		else{
			this.checkboxClassName = "default"
		}
	}

	/**
	  * openColorSnackBar is used to open the selected color snackbar. 
	  */
	openColorSnackBar(){
		if(this.radioClassName||this.checkboxClassName){
			this.snackBar.open(this.messageContextual, this.action,{
				duration : this.autoHideContextual,
				panelClass : [this.radioClassName,this.checkboxClassName]
			});
		}
	}

	/**
	  * Extra configuration for the snack bar.
	  */
   private _createConfig() {
	   const config              = new MatSnackBarConfig();
	   config.verticalPosition   = this.verticalPosition;
	   config.horizontalPosition = this.horizontalPosition;
	   config.duration 			  = this.autoHide;
	   return config;
   }

}