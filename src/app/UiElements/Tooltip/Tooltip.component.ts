import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-tooltip',
  templateUrl: './Tooltip.component.html',
  styleUrls: ['./Tooltip.component.scss']
})

export class TooltipComponent implements OnInit {
   
   toolTips : any[] = [
      {
         color:'primary',
         position:'left'
      },
      {
         color:'accent',
         position:'right'
      },
      {
         color:'warn',
         position:'below'
      },
      {
         color:'primary',
         position:'above'
      }
   ]

   constructor(public translate : TranslateService) { }

   ngOnInit() { }
}
