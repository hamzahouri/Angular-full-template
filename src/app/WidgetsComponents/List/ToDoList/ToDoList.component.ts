import { Component, OnInit, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector		: 'anglo-todolist',
  templateUrl	: './ToDoList.component.html',
  styleUrls		: ['./ToDoList.component.scss']
})

export class ToDoListComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};

  	@Input() TodoListData	: any;
	popupResponse       		: any;
	popupDeleteResponse 		: any;
	action             		= '';
	messageDialog       		: string = "Are you sure you want to delete this list permanently?";
	messageAdd  		 	   = "ToDo Added Successfully";
	messageDelete		  		= "Todo Deleted List Successfully"
	messageUpdate  	 	   = "ToDo Updated Successfully";
	toDoListVisible     		: boolean = true;
	todoListShowSpinner		: boolean = false;

	addData : any = {		
		heading	: "Add To Do",
		date		: "choose a date",
		title		: "Title"
	}

	constructor(private coreService : CoreService,  
					private snackBar : MatSnackBar,
					public translate : TranslateService) { 
	}

	ngOnInit() {
	}

	/**
	  * markedList function is used to mark(update) the list.
	  */
	markedList(item){
		if(item){
			let index = this.TodoListData.indexOf(item);
			this.TodoListData[index].status = !item.status;
			const config = this._createConfig();
			this.snackBar.open(this.messageUpdate, this.action,config);
		}
	}
	
	//addToDoList method to open the Add To Do dialog.
	addToDoList(){
		this.coreService.addItem(this.addData)
			.subscribe(res => {this.popupResponse = res},
						  err => console.log(err),
						  ()  => this.getPopupAddResponse(this.popupResponse)
						);                    
	}

	//getPopupAddResponse method to push the new item into To do list.
	getPopupAddResponse(response: any){
		if(response!=undefined && response.date && response.title)
		{
			this.TodoListData.push(response);
			const config = this._createConfig();
			this.snackBar.open(this.messageAdd, this.action ,config);
		}
	}

	//onDeleteToDoList method to open the Delete Dialog.
	onDeleteToDoList(index){
		this.coreService.deleteDialog(this.messageDialog)
			.subscribe(res=>{this.popupDeleteResponse = res},
						  err => console.log(err),
						  ()  => this.getPopupDeleteResponse(this.popupDeleteResponse, index)
						);        
	}

	//getPopupDeleteResponse method to delete the item from To do list.
	getPopupDeleteResponse(response:any, index:any){
		if(this.popupDeleteResponse == "yes")
		{
			this.TodoListData.splice(index, 1);
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
		config.duration 			  = 2000;
		return config;
	}

	/**
     *  getCloseValue close the ToDoList Component.
     */
	getCloseValue($event){
		this.toDoListVisible = false;
	}
	
   /*
    * showFullScreen is show the ToDoList Component in fullscreen .
    */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /**
     * spinnerShow method reload the ToDoList Component.
     */
   spinnerShow(id){
      this.todoListShowSpinner = true;
         setTimeout(() => {
            this.todoListShowSpinner = false;
         }, 3000);
   }

}


