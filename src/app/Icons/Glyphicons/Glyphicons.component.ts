import { Component, OnInit } from '@angular/core';
import { IconService } from '../../Services/IconService/Icon.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector      : 'anglo-glyphicons',
  templateUrl   : './Glyphicons.component.html',
  styleUrls     : ['./Glyphicons.component.scss']
})
export class GlyphiconsComponent implements OnInit {
  
	glyphIcons     : any;
  
   constructor(private glyphIconService:IconService,
      public translate : TranslateService) { }

   ngOnInit() {
     	this.glyphIcon();
   }

   /** 
     * glyphIcon method is used to get the Glyph Icon response from the Icon service class. 
     */
	glyphIcon(){
		this.glyphIconService.getGlyphIcons().
		   subscribe( res => { this.glyphIcons = res['glyphicon']},
                    err => console.log(err),
                    () => this.glyphIcon
 		            );
  	}

}
