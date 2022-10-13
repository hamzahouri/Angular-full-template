import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector      : 'app-input',
  templateUrl   : './Input.component.html',
  styleUrls     : ['./Input.component.scss']
})
export class InputComponent implements OnInit {

   constructor(public translate : TranslateService) { }

   ngOnInit() {
   }

}
