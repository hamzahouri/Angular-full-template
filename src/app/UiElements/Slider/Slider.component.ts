import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector		: 'app-slider',
  templateUrl	: './Slider.component.html',
  styleUrls		: ['./Slider.component.scss']
})

export class SliderComponent implements OnInit {

   red    = 64;
   green  = 128;
   blue   = 0;

   constructor(public translate : TranslateService) { }
   	  
   ngOnInit() {
   }

   /**
     * getRGBColorString function is used to returns the computed string for rgb value
     */
   getRGBColorString(): string {
      return 'rgb('+ this.red + ',' + this.green + ',' + this.blue + ')';
   }
}
