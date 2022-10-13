import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver} from "@angular/flex-layout";
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
import { EmailsService } from '../../Services/Emails.service';

@Component({
  selector: 'anglo-inbox',
  templateUrl: './Inbox.component.html',
  styleUrls: ['./Inbox.component.scss']
})

export class InboxComponent implements OnInit, OnDestroy{

  emailType                : string;
   deviceInfo                        : any     = null;
   sidenavMode                       : string  = 'side';
   sidenavOpen                 : boolean = true;
   isMobile                          : boolean = false;
   private _router                   : Subscription;
   private _mediaSubscription        : Subscription;
   private _routerEventsSubscription : Subscription;

   /** Used for toggle the sidebar menu. */
   @ViewChild('inboxSideNav', {static: true}) inboxSideNav;

	constructor(public emailsService : EmailsService,
           		private deviceService: DeviceDetectorService,
               private media: MediaObserver,
               private router: Router) { 	
	}


  ngOnInit() {
      $('#'+'content').addClass('content-wrap');
    this.getInboxEmail();

      this.deviceInfo = this.deviceService.getDeviceInfo();
      if(this.deviceInfo.device == 'ipad' || this.deviceInfo.device == 'iphone' || this.deviceInfo.device == 'android' ){
         this.sidenavMode = 'over';
         this.sidenavOpen = false;
      }

      this._mediaSubscription = this.media.media$.subscribe((change: MediaChange) => {
         let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm') || (change.mqAlias == 'md');

         this.isMobile = isMobile;
         this.sidenavMode = (isMobile) ? 'over' : 'side';
         this.sidenavOpen = !isMobile;
      });

      this._routerEventsSubscription = this.router.events.subscribe((event) => {
         if (event instanceof NavigationEnd && this.isMobile) {
            this.inboxSideNav.close();
         }
      });
   }

   ngOnDestroy(){
      $('#'+'content').removeClass('content-wrap');
   }
  

  /**
    * getInboxEmail function is used to get the Email according to their selected type.
    */
  getInboxEmail(){
    this.emailsService.getEmails(this.emailsService.state,this.emailType);
  }

  /**
    * getInboxType function is used to get the selected type.
    */
  getInboxType(type){
    this.emailsService.state.selectedEmail = null;
    this.emailType = type;
  }
}
