import { Component, OnInit,Inject } from '@angular/core';
import { MatDatepickerToggle, MatDatepickerInputEvent, MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CoreService} from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-add-new-user',
  templateUrl: './AddNewUser.component.html',
  styleUrls: ['./AddNewUser.component.scss']
})
export class AddNewUserComponent implements OnInit {

   form : FormGroup;
   data : any;

   constructor(public formBuilder:FormBuilder,
               public dialogRef:MatDialogRef<AddNewUserComponent>){}

	ngOnInit() {
      this.form = this.formBuilder.group(
         {
            userName : '',
            email    : ''
         } 
      )
   }

   addData() {
      this.dialogRef.close(this.form.value);
   }

}
