import { Component, Input, OnInit} from '@angular/core';
import { MenuItems } from '../../Core/MenuItems/MenuItems';
import { Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  	selector: 'app-menu-list-item',
   templateUrl: './MenuListItem.component.html',
   styleUrls: ['./MenuListItem.component.scss']
})

export class MenuListItemComponent implements OnInit{
   

   constructor(public router : Router, 
               public item : MenuItems,
               public translate : TranslateService) {
   }

    ngOnInit() {
       setTimeout(() =>{
         let element : HTMLElement = document.getElementById('child-item-0')as HTMLElement;
          element.click();
      },0)
    }
   
   

}
     

   
