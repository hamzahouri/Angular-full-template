

import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItems } from '../../Core/MenuItems/MenuItems';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import * as $ from 'jquery';
import { MatNavList } from '@angular/material/list';
import { MediaChange, MediaObserver} from "@angular/flex-layout";
import { DeviceDetectorService } from 'ngx-device-detector';
import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
	selector: 'anglo-vertical-layout',
	templateUrl:'./VerticalLayout.component.html',
	styleUrls: ['./VerticalLayout.component.scss']
})
export class VerticalLayoutComponent implements OnInit {

	isHeaderFilterClass   : string ;
	isSidebarFilterClass  : string;
	isBackgroundImageOpen : boolean = false;
	currentLang       = 'en';
	url               : string;
	public innerWidth : any;

	deviceInfo                        : any     = null;
	sidenavMode                       : string  = 'side';
	isMobile                          : boolean = false;
	private _router                   : Subscription;
	private _mediaSubscription        : Subscription;
	private _routerEventsSubscription : Subscription;

	/** Used for toggle the sidebar menu. */
	@ViewChild('sidenav', {static: true}) sidenav;

	public config: PerfectScrollbarConfigInterface = {};

	chatTab : any[]=[
		{
			img:"/assets/img/user-28.jpg",
			name:"Jason Oner",
			color:"primary-color"
		},
		{
			img:"/assets/img/user-29.jpg",
			name:"Ranee Carlson",
			color:"primary-color"
		},
		{
			img:"/assets/img/user-30.jpg",
			name:"Cindy Baker",
			color:"grey-text"
		},
		{
			img:"/assets/img/user-14.jpg",
			name:"Nicolette Conner",
			color:"grey-text"
		},
		{
			img:"/assets/img/user-9.jpg",
			name:"Brock Marshall",
			color:"grey-text"
		}
	]

	previousChatTab : any[]=[
	  {
			img:"/assets/img/user-28.jpg",
			name:"Travis Howard"
		},
		{
			img:"/assets/img/user-29.jpg",
			name:"Nicolette Conner"
		},
		{
			img:"/assets/img/user-30.jpg",
			name:"Brock Marshall"
		},
	]

	sideBarFilterClass : any = [
		{
			sideBarSelect  :"sidebar-select-1",
			colorSelect    :"sidebar-overlay-dark"
		},
		{
			sideBarSelect  :"sidebar-select-2",
			colorSelect    :"sidebar-overlay-light",
		},
		{
			sideBarSelect  :"sidebar-select-3",
			colorSelect    :"sidebar-overlay-pink"
		},
		{
			sideBarSelect  :"sidebar-select-4",
			colorSelect    :"sidebar-overlay-primary"
		},
		{
			sideBarSelect  :"sidebar-select-5",
			colorSelect    :"sidebar-overlay-warning"
		},
		{
			sideBarSelect  :"sidebar-select-6",
			colorSelect    :"sidebar-overlay-success"
		},
		{
			sideBarSelect  :"sidebar-select-7",
			colorSelect    :"sidebar-overlay-yellow"
		}
	]

	headerFilterClass : any = [
		{
			headerSelect  :"header-select-1",
			colorSelect   :"header-primary"
		},
		{
			headerSelect  :"header-select-2",
			colorSelect   :"header-light"
		},
		{
			headerSelect  :"header-select-3",
			colorSelect   :"header-warning"
		},
		{
			headerSelect  :"header-select-4",
			colorSelect   :"header-success"
		},
		{
			headerSelect  :"header-select-5",
			colorSelect   :"header-error"
		},
		{
			headerSelect  :"header-select-6",
			colorSelect   :"header-info"
		},
		{
			headerSelect  :"header-select-7",
			colorSelect   :"header-primary"
		}
	]

	backgroundImages : any = [
		"/assets/img/sidebar-1.jpg",
		"/assets/img/sidebar-2.jpg",
		"/assets/img/sidebar-3.jpg"
	]

	constructor(public menuItems: MenuItems,
					public translate: TranslateService,
					private router: Router,
					public coreService: CoreService,
					private deviceService: DeviceDetectorService,
					private media: MediaObserver) {
		const browserLang: string = translate.getBrowserLang();
		translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
	}

	ngOnInit() {
		this.innerWidth = window.innerWidth;

		this.deviceInfo = this.deviceService.getDeviceInfo();
		if(this.deviceInfo.device == 'ipad' || this.deviceInfo.device == 'iphone' || this.deviceInfo.device == 'android' ){
			this.sidenavMode = 'over';
			this.coreService.sidebarOpen = false;
		}
		this.coreService.collapseSidebarStatus = this.coreService.isCheckboxOpen;

		this._mediaSubscription = this.media.media$.subscribe((change: MediaChange) => {
			let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm') || (change.mqAlias == 'md');

			this.isMobile = isMobile;
			this.sidenavMode = (isMobile) ? 'over' : 'side';
			this.coreService.sidebarOpen = !isMobile;
		});

		this._routerEventsSubscription = this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd && this.isMobile) {
				this.sidenav.close();
		  }
		});

		setTimeout(()=>{
			$(".app-main").addClass("side-panel-opened");
		},100)

		// this line is added recently to test the backround color that is fixed added 19/10
		//document.getElementById('main-app').classList.add(this.headerFilterClass[2].colorSelect);
	}

	onActivate(e) {
		this.coreService.collapseSidebarStatus = this.coreService.isCheckboxOpen;

		if(this.router.url === "/dashboard/web-analytics"){
			if (window.innerWidth < 959) {
				this.coreService.isCheckboxOpen = false;
			} else {
				this.coreService.isCheckboxOpen = true;
			}
		}
		else if(!this.coreService.collapseSidebarStatus){
			this.coreService.isCheckboxOpen = false;
		}else if(this.coreService.collapseSidebarStatus){
			this.coreService.isCheckboxOpen = true;
		}
	}

	//change layout of app.
	changeRTL(isChecked) {
		if(isChecked){
			this.coreService.layout = "rtl";
			this.coreService.rtlStatus = true;
			$(".app-main").addClass("rtl-layout");
		}
		else {
			this.coreService.layout = "ltr";
			this.coreService.rtlStatus = false;
			$(".app-main").removeClass("rtl-layout");
		}
	}

	//onCollapseChange is used to change collapse side bar.
	onCollapseChange(isChecked){
		this.coreService.isCheckboxOpen = !this.coreService.isCheckboxOpen;
	}

	//onBackgroundChange is used to change the menu side bar background.
	onBackgroundChange(isChecked){
		this.isBackgroundImageOpen = !this.isBackgroundImageOpen;
		if(isChecked){
			$(".sidebar-area").removeClass("background-none");
			$(".sidebar-area").addClass("sideBar-background-image");
			$(".sideBar-background-image").css("background-image", "url('"+this.backgroundImages[0]+"')");
		}
		else{
			$(".sidebar-area").addClass("background-none");
		}
	}

	//changeBackgroundImage method is used to change the background image of menu side bar.
	changeBackgroundImage(selectedImage, id){
		$('.select-bg-img').removeClass('img-active');
		$('#'+id).addClass('img-active');
		$(".sideBar-background-image").css("background-image", "url('"+selectedImage+"')");
	}

	//onDarkModeChange method is used to change the app color into dark mode.
	onDarkModeChange(isChecked){
		if(isChecked){
			$('.app-main').removeClass('theme-light');
			$('.app-main').addClass('theme-dark');
		}
		else{
			$('.app-main').removeClass('theme-dark');
			$('.app-main').addClass('theme-light');
		}
	}

	// settingSideNav is used to toggle the setting side nav.
	settingSideNav(){
		this.coreService.settingSideNavOpen = true;
		this.coreService.chatSideNavOpen = false;
		this.coreService.leftSideNav = !this.coreService.leftSideNav;
	}

	//headerFilter function filter the color for header section.
	headerFilter(selectedFilter,id){
		for(var i = 0; i<this.headerFilterClass.length; i++){
			document.getElementById('main-app').classList.remove(this.headerFilterClass[i].colorSelect);
			if(this.headerFilterClass[i].colorSelect == selectedFilter.colorSelect){
				document.getElementById('main-app').classList.add(this.headerFilterClass[i].colorSelect);
			}
		}
		let header = document.getElementsByClassName('header');
		for(var i = 0; i<header.length; i++){
			header[i].classList.remove('active-theme');
		}
		document.getElementById(id).classList.add('active-theme');
		
	}

	

	/**
	  * sidebarFilter function filter the color for sidebar section.
	  */
	sidebarFilter(selectedFilter, id){
		for(var i = 0; i<this.sideBarFilterClass.length; i++){
			document.getElementById('main-app').classList.remove(this.sideBarFilterClass[i].colorSelect);
			if(this.sideBarFilterClass[i].colorSelect == selectedFilter.colorSelect){
				document.getElementById('main-app').classList.add(this.sideBarFilterClass[i].colorSelect);
			}
		}
		let sidebar = document.getElementsByClassName('sidebar');
		for(var i = 0; i<sidebar.length; i++){
			sidebar[i].classList.remove('active-theme');
		}
		document.getElementById(id).classList.add('active-theme');
	}
}