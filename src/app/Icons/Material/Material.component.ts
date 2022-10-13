import { Component, OnInit } from '@angular/core';
import { IconService } from '../../Services/IconService/Icon.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector      : 'anglo-material',
  templateUrl   : './Material.component.html',
  styleUrls     : ['./Material.component.scss']
})

export class MaterialComponent implements OnInit {

	materialIcons  : any
  

   constructor(private materialIconService:IconService,
               public translate : TranslateService) { }

  	ngOnInit() {  
		this.getMaterialIcon();
  	}

   /** 
     *  getMaterialIcon method is used to get the Material Icon response from the Icon service class. 
     */
 	getMaterialIcon(){
 		this.materialIconService.getIcons().
 			subscribe( res => { this.materialIcons = res['icons']},
                    err => console.log(err),
                    () => this.materialIcons
                  );	
   }
}
