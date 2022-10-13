import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector	  : 'anglo-checkbox',
  templateUrl : './Checkbox.component.html',
  styleUrls   : ['./Checkbox.component.scss']
})

export class CheckboxComponent implements OnInit {
  
   checked          : boolean  = false;
   indeterminate    : boolean  = false;
   disabled         : boolean  = false;
   names				  : string[] = ["John"];
   
   checkboxArray    : any = [
      {
         name   : "John",
         status : true
      },
      {
         name   :"Jacob",
         status : false
      }
   ]

   constructor(public translate : TranslateService) { }

   ngOnInit() {
   }

   /**
    * getCheckboxValue used to get the checkbox values.
    * Push and pop the values in array.
    */
   getCheckboxValue(value){
      if(!this.names.includes(value)){
         this.names.push(value);
      } else {
         this.names.splice(this.names.indexOf(value), 1);
      }
   }

}


