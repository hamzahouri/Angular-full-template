import { Component, OnInit } from '@angular/core';
import { IconService } from '../../Services/IconService/Icon.service';

@Component({
  selector      : 'app-fontawesome',
  templateUrl   : './Fontawesome.component.html',
  styleUrls     : ['./Fontawesome.component.scss']
})
export class FontawesomeComponent implements OnInit {
   
	fontawesome    : any;

   constructor(private fontIconService:IconService) { }

  	ngOnInit() {
		this.getFontawesomeIcon();
   }

   /** 
    * getFontawesomeIcon method is used to get the Fontawesome Icon response from the Icon service class. 
    */

  	getFontawesomeIcon(){
  		this.fontIconService.getFontawesomeIcons().
 			subscribe( res => { this.fontawesome = res['fontawesome']},
                    err => console.log(err),
                    () => this.fontawesome
 			);	
  	}
}
