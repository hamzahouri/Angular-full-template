import { Component, OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel} from '@angular/cdk/collections';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

import { CoreService } from '../../../Services/GlobalService/Core.service';


@Component({
  selector: 'anglo-recent-order',
  templateUrl: './RecentOrderList.component.html',
  styleUrls: ['./RecentOrderList.component.scss']
})
export class RecentOrderComponent implements OnInit {
	
	@Input() recentOrdersData   : any;
	dataSource                  : any ;
	selection                   : any;
	recentOrderShowSpinner      : boolean  = false;
	recentOrderVisible          : boolean  = true;
	displayedColumns            : string[] = ['select','orderId','productName','quantity','status','amount','delete'];

	constructor(public translate : TranslateService,
		private coreService : CoreService, 
		private toastr: ToastrService) { }

	ngOnInit() {
		if(this.recentOrdersData){
			this.dataSource = new MatTableDataSource(this.recentOrdersData);
			this.selection  = new SelectionModel(true,[]);
		}
	}

	// Whether the number of selected elements matches the total number of rows.
	isAllSelected(){
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	//removeSelectedRows method is used to delete the selected row.
	removeSelectedRows(index) {
		this.dataSource.data.splice(index,1);
		this.dataSource = new MatTableDataSource(this.dataSource.data);
		this.toastr.success("Order Deleted");
	}

	//Selects all rows if they are not all selected; otherwise clear selection.
	masterToggle() {
		this.isAllSelected() ?
		this.selection.clear() :
		this.dataSource.data.forEach(row => this.selection.select(row));
	}

	/**
	  * getCloseValue close the Recent Order List Component.
	  */
	getCloseValue($event){
		this.recentOrderVisible = false;
	}

	/**
	  * showFullScreen is show the Recent Order List Component in fullscreen .
	  */
	showFullScreen(id) {
		this.coreService.fullScreen(id);
	}

	/**
	  * spinnerShow method reload the Recent Order List Component Component.
	  */
	spinnerShow(id){
		this.recentOrderShowSpinner = true;
			setTimeout(() => {
				this.recentOrderShowSpinner = false;
			}, 3000);

	}
}
