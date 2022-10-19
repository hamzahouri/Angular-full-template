import { Component, OnInit, Input } from '@angular/core';
import screenfull from 'screenfull';

import { TranslateService } from '@ngx-translate/core'
import { Router } from '@angular/router';
import * as $ from 'jquery';

//import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
	selector: 'anglo-header',
	templateUrl: './courtier-grossite.component.html',
	styleUrls: ['./courtier-grossite.component.css']
})
export class CourtierGrossiteComponent implements OnInit {

   isFullscreen              : boolean = false;
   chatSidebarMode           : string  = "over";
   chatSidebar               : boolean = false;
   popupDeleteResponse       : any;

   quickLinks : any [] = [
      {
         icon:"photo_library",
         name:"Gallery",
         color:"primary-color",
         routerLink:"/pages/gallery"

      },
      {
         icon:"mail",
         name:"Tables",
         color:"accent-color",
         routerLink:"/tables/standard"

      },
      {
         icon:"mail",
         name:"Inbox",
         color:"warn-color",
         routerLink:"/inbox"
      },
      {
         icon:"calendar_today",
         name:"Calendar",
         color:"primary-color",
         routerLink:"/calendar"
      },
      {
         icon:"chat_bubble_outline",
         name:"Chat",
         color:"accent-color",
         routerLink:"/chat"
      },
      {
         icon:"person_outline",
         name:"Profile",
         color:"warn-color",
         routerLink:"/users/user-profile"
      },
   ];

   notifications : any [] = [
      {
         icon:"list",
         name:"Total App Memory"
      },
      {
         icon:"memory",
         name:"Total Memory Used"
      },
      {
         icon:"email",
         name:"12 Unread Mail"
      },
      {
         icon:"create",
         name:"Feedback"
      }
   ];

   constructor(/*public coreService:CoreService,*/
         public translate : TranslateService,
         public router : Router) {
   }

   ngOnInit() {
   }

	/**
    * _toggleSidebarOpened() function is used to open/close the menu side bar.
    */
	public _toggleSidebarOpened(): void {
		// this.coreService.sidebarOpen = !this.coreService.sidebarOpen;
    //   if(this.coreService.sidebarOpen === true){
    //      $('.app-main').removeClass('side-panel-closed');
    //      $('.app-main').addClass('side-panel-opened');
    //   }
    //   else{
    //      $('.app-main').addClass('side-panel-closed');
    //      $('.app-main').removeClass('side-panel-opened');
    //   }
   }

   /**
    *_toggleChatSideNavOpen is used to toggle the chat side nav.
    */
   public _toggleChatSideNavOpen(): void {
      // this.coreService.chatSideNavOpen = true;
      // this.coreService.settingSideNavOpen = false;
      // this.coreService.leftSideNav = !this.coreService.leftSideNav;
   }

   /**
    * toggleFullscreen function is used to get the toggle the fullscreen.
    */
   toggleFullscreen() {
      if (screenfull.isEnabled) {
      screenfull.toggle();
         this.isFullscreen = !this.isFullscreen;
      }
   }

   /**
    * onDelete function is used to open the delete dialog pop up.
    */
   onDelete(cart){
      //this.coreService.deleteDialog("Are you sure you want to delete this product permanently?")
        // .subscribe(res=>{this.popupDeleteResponse=res},
        //    err=>console.log(err),
          //  ()=>this.getPopupDeleteResponse(this.popupDeleteResponse,cart)
         //);
   }

   /**
    * getPopupDeleteResponse is used to delete the cart item when reponse is yes.
    */
   getPopupDeleteResponse(response:any,cart){
      if(response=="yes")
         {
           // this.coreService.localStorageDelete(cart,'cartProduct');
         }
   }

   /**
    * quickLinkPath is used for quick link router navigation.
    */
   quickLinkPath(routingPath){
      this.router.navigate([routingPath]);
   }

   /**
    * onPlans method router through specify the plan you want to choose.
    */
   onPlans(){
      this.router.navigate(['/pages/pricing-1']);
   }

   /**
    * onSearch method used for search slide.
    */
   onSearch(){
      $(".search-form-wrap" ).addClass( "search-slide" );

   }

   /**
     *onCloseSlide method is used to close the search slide.
     */
   onCloseSlide(){
      $(".search-form-wrap").removeClass( "search-slide" );
   }
}