import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver} from "@angular/flex-layout";
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { CoreService } from '../../Services/GlobalService/Core.service';
import * as $ from 'jquery';

@Component({
  selector: 'anglo-chat',
  templateUrl: './Chat.component.html',
  styleUrls: ['./Chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  
   public config        : PerfectScrollbarConfigInterface = { };
  chatComponentData    : any;
   openChatData         : any;

   deviceInfo                        : any     = null;
   sidenavMode                       : string  = 'side';
   isMobile                          : boolean = false;
   private _router                   : Subscription;
   private _mediaSubscription        : Subscription;
   private _routerEventsSubscription : Subscription;

   /** Used for toggle the sidebar menu. */
   @ViewChild('chatSideNav',{static: true}) chatSideNav;

  constructor(public coreService : CoreService,
               private deviceService: DeviceDetectorService,
               private media: MediaObserver,
               private router: Router) { }

  ngOnInit() {
      this.chatData();
      setTimeout(() => {
        $('#'+'content').addClass('content-wrap');
      },100)
    
 
      this.deviceInfo = this.deviceService.getDeviceInfo();
      if(this.deviceInfo.device == 'ipad' || this.deviceInfo.device == 'iphone' || this.deviceInfo.device == 'android' ){
         this.sidenavMode = 'over';
         this.coreService.chatSideBarOpen = false;
      }

      this._mediaSubscription = this.media.media$.subscribe((change: MediaChange) => {
         let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm') || (change.mqAlias == 'md');

         this.isMobile = isMobile;
         this.sidenavMode = (isMobile) ? 'over' : 'side';
         this.coreService.chatSideBarOpen = !isMobile;
      });

      this._routerEventsSubscription = this.router.events.subscribe((event) => {
         if (event instanceof NavigationEnd && this.isMobile) {
            this.chatSideNav.close();
         }
      });
   }

   ngOnDestroy(){
    $('#'+'content').removeClass('content-wrap');
  }

   /**
     * chatData is used to get the chat data. 
     */
    chatData(){
      this.coreService.getChatData().
        subscribe( res => { this.chatComponentData = res['chatSideNav'] },
          err => console.log(err),
          () => this.byDefaultChat(this.chatComponentData[0])
        )
    }

   /**
     * byDefaultChat is used to get the first index chat of user.
     */
   byDefaultChat(chat){
      this.openChatData = chat;
   }
 
   /**
     * openChat is used to get the particular chat. 
     */
   openChat(chat : any){
      this.openChatData = chat;
   }
}
