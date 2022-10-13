import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'anglo-new-email-popup',
  templateUrl: './NewEmailPopup.component.html',
  styleUrls: ['./NewEmailPopup.component.scss']
})
export class NewEmailPopupComponent implements OnInit {

   form : FormGroup;
  constructor(public formBuilder:FormBuilder) { }

  ngOnInit() {
  	this.form = this.formBuilder.group(
         {
         	to :'',
         	title:''
         } 
      )
   }

}
