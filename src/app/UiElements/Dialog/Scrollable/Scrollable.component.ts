import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector    : 'app-scrollable',
  templateUrl : './Scrollable.component.html',
  styleUrls   : ['./Scrollable.component.scss']
})
export class ScrollableComponent implements OnInit {

   countries   :any;

   constructor(public dialogRef:MatDialogRef<ScrollableComponent>,public dailogService:CoreService) { }

   ngOnInit() {
      this.getCountries();
   }

   ///onClose function is used when you want to close the dialog.
   onClose(){
   	this.dialogRef.close();
   }

   //getCountries is used to get the country data from JSON file.
   getCountries() {
   	this.dailogService.getCountries().
   		subscribe( res => {this.countries = res['countries']},
   					  err => console.log(err),
   					  ()  => this.countries
   					);
   	}
}
