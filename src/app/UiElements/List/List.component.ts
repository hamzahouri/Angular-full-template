import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-list',
  templateUrl: './List.component.html',
  styleUrls: ['./List.component.scss']
})


export class ListComponent implements OnInit {

   list1 : any []=[
      {
         img:'/assets/img/user-3.jpg',
         heading:"Brunch this weekand?",
         sub_title:"Ali Connors ",
         paragraph:" — I'll be in your neighborhood doing errands this..."
      },
      {
         img:'/assets/img/user-4.jpg',
         heading:"Summer BBQ 4",
         sub_title:"to Alex, Scott, Jennifier",
         paragraph:" -Wish I could come,but I'm out of to..."
      },
      {
         img:'/assets/img/user-10.jpg',
         heading:"Oui Oui",
         sub_title:"Sandra Adams",
         paragraph:" - Do you have Paris recommendations?Have..."
      }
   ]

   list2 : any []=[
      {
         name:"Jason Oner",
         img :'/assets/img/user-1.jpg',
         status:1
      },
      {
         name:"Smith Oner",
         img :'/assets/img/user-8.jpg',
         status:1   
      },
      {
         name:"Travis Howard",
         img :'/assets/img/user-3.jpg',
         status:0
      },
      {
         name:"Ali Connors",
         img :'/assets/img/user-10.jpg',
         status:0
      },
      {
         name:"Cindy Baker",
         img :'/assets/img/user-3.jpg',
         status:0
      }
   ]
  
   constructor(public translate : TranslateService) { }

   ngOnInit() {
   }

}
