import { Component, OnInit, OnDestroy} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
	selector: 'anglo-web-analytics',
	templateUrl: './WebAnalytics.component.html',
	styleUrls: ['./WebAnalytics.component.scss']
})
export class WebAnalyticsComponent implements OnInit, OnDestroy {

	ctx                       : any;
	canvas                    : any;
	gradient1                 : any;
	gradient2                 : any;
	gradient3                 : any;
	gradient4                 : any;
	trafficChannelId          : string   = "trafficChannel";
	deviceVisible             : boolean  = true ;
	deviceShowSpinner         : boolean  = false;
	collapseSidebarStatus	  : boolean;

	/*
			---------- Visitor Chart ----------
	*/
 
	//line chart label
	public visitChartLabel :string[] =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', "Nov", "Dec"];
	 
	//line chart data
	public visitChartData : any[] = [
		{data: [30, 70, 40, 50, 20, 30, 40, 50, 20, 50, 70, 30], label: 'Data 1'},
		{data:[45, 65, 50, 20, 30, 25, 20, 15, 55, 45, 70, 45], label: 'Data 2'}
	];

	//line chart color
	public visitChartColors: Array <any>; 

	/*
		---------- Total Page Views Chart ----------
	*/
	
	//line chart label
	public pageViewChartLabel :string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

	//line chart data
	public pageViewChartData : any[] = [
		{data:[20,15,12,6,18,17,20,2]}
	];

	//line chart color
	public pageViewChartColors : Array <any> = [
		{
			lineTension: 0.6,
			borderColor: "#43a047",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointRadius: 0,
			pointHoverBorderWidth: 0,
			borderWidth: 2,
			fill: false   
		}
	];

		/*
			---------- Total Earnings Chart ----------
		*/

		//line chart label
		public earningChartLabel :string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

		//line chart data
		public earningChartData : any[] = [
			{
				 data:[15,20,6,9,18,17,20,2]
			}
		];

		//line chart color
		public earningChartColors: Array <any> = [
			{
				lineTension: 0.6,
				borderColor: "#FFB70F",
				pointBorderWidth: 0,
				pointHoverRadius: 0,
				pointRadius: 0,
				pointHoverBorderWidth: 0,
				borderWidth: 2,
				fill: false   
			}
		];

		/*
			---------- Impressions Chart ----------
		*/

		//line chart label
		public impressionChartLabel :string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

		//line chart data
		public impressionChartData : any[] = [
			{data:[1,15,12,6,18,17,20,22]}
		];

		//line chart color
		public impressionChartColors: Array <any> = [
			{
				lineTension: 0.6,
				borderColor: "#e65100",
				pointBorderWidth: 0,
				pointHoverRadius: 0,
				pointRadius: 0,
				pointHoverBorderWidth: 0,
				borderWidth: 2,
				fill: false   
			}
		];

	/**
	  * acivityWorldData array of object data is used in Activity Around World component.
	  */
	acivityWorldData : any [] =
		[
			{
				img:"/assets/img/austria.png",
				name:'Austria - 4100',
				value:'42'
			},
			{
				img:"/assets/img/japan.jpeg",
				name:'Japan-2300',
				value:'31'
			},
			{
				img:"/assets/img/USA.jpeg",
				name:'USA-2300',
				value:'93'
			},
			{
				img:"/assets/img/china.png",
				name:'China-800',
				value:'15'
			},
			{
				img:"/assets/img/france.png",
				name:'France-3521',
				value:'38'
			}
		]	


	/**
	  *doughnutChartOptions options are used in Device Separations component.
	  */
	doughnutChartOptions = {
		tooltip : {
			 trigger: 'item',
		},
		series: [
			{
				type:'pie',
				radius: ['30%', '40%'],
				avoidLabelOverlap: false,
				label: {
					normal: {
						show: false,
						position: 'center'
					},
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[
					{
						value:250, 
						name:'Computer',
						itemStyle: {
							normal: {
								color: '#448aff'
							}
						}
					},
					{
						value:100, 
						name:'MObile',
						itemStyle: {
							normal: {
								color: '#43a047'
								}
						}
					},
					{
						value:70, 
						name:'Tablets',
						itemStyle: {
							normal: {
								color: '#FFB70F'
							}
						}
					}
				],
			}
		]
	};

	/*
		  ---------- Browser Statics ----------
	*/

	/**
	  * browserStaticsData array of object data is used in Browser Statics component.
	  */
	browserStaticsData :any[] = [ 
		{     
			img:"/assets/img/firefox_icon.png",
			name:"Firefox",             
			value:"8,250",
			percent:"+85%"
		},
		{     
			img:"/assets/img/safari_icon.png",
			name:"Crome",             
			value:"3050",
			percent:"-20%"
		},
		{     
			img:"/assets/img/chrome_icon.png",
			name:"Opera",             
			value:"3,650",
			percent:"+34%"
		},
		{     
			img:"/assets/img/opera_icon.png",
			name:"Safari",             
			value:"1,255",
			percent:"-53%"
		},
	] 

	// header data of Browser Statics component.
	browserHeaderData : any[] = [
		{
			numberCard:"23,488",
			heading:"Active Users",
			icon:"supervisor_account"
		}
	]

	// columns name of Browser Statics component.
	displayedBrowserColumns   : string[] = ['img', 'name', 'value', 'percent'];

	/**
	  * trafficChannelData array of object is used in Traffic Channel Component.
	  */
	trafficChannelData : any [] =
		[  
			{
				name:'Direct',
				value:'55'
			},
			{
				name:'Referral',
				value:'78'
			},
			{
				name:'Facebook',
				value:'68'
			},
			{
				name:'Google',
				value:'23'
			},
			{
				name:'Instagram',
				value:'57'
			}
		]


	/*
		---------- Bandwidth Usage Chart ----------
	*/

	//line chart label
	public bandwidthChartLabel :string[] = [ "1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
			"21",
			"22",
			"23",
			"24",
			"25",
			"26",
			"27",
			"28",
			"29",
			"30",
			"31",
			"32",
			"33",
			"34",
			"35",
			"36",
			"37",
			"38",
			"39",
			"40",
			"41",
			"42",
			"43",
			"44"];

	//line chart data
	public bandwidthChartData : any[] = [{
		data: [
			40,
			10,
			30,
			40,
			60,
			70,
			60,
			40,
			80,
			25,
			44,
			59,
			20,
			52,
			40,
			80,
			45,
			68,
			40,
			38,
			85,
			64,
			25,
			45,
			65,
			95,
			40,
			10,
			30,
			40,
			60,
			70,
			60,
			40,
			80,
			25,
			14,
			18,
			22,
			65,
			85,
			75,
			95,
			40]}
	];

	//line chart color
	public bandwidthChartColors: Array <any>;

	/*
		----------Total Downloading Chart ----------
	*/

	//line chart label
	public downloadChartLabel :string[] = [ "1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
			"21",
			"22",
			"23",
			"24",
			"25",
			"26",
			"27",
			"28",
			"29",
			"30",
			"31",
			"32",
			"33",
			"34",
			"35",
			"36",
			"37",
			"38",
			"39",
			"40",
			"41",
			"42",
			"43",
			"44"];

	//line chart data
	public downloadChartData : any[] = [
		{data: [40,
			10,
			30,
			40,
			60,
			70,
			60,
			40,
			80,
			25,
			44,
			59,
			20,
			52,
			40,
			80,
			45,
			68,
			40,
			38,
			85,
			64,
			25,
			45,
			65,
			95,
			40,
			10,
			30,
			40,
			60,
			70,
			60,
			40,
			80,
			25,
			14,
			18,
			22,
			65,
			85,
			75,
			95,
			40]}
	];

	//line chart color
	public downloadChartColors: Array <any>;

	/**
	  * notificationData array of object data is used in Notificaton component.
	  */
	notificationData : any[]=
		[
			{
				iconName:"notifications_active",
				sub_title:"Admin",
				heading:"New invoice received",
				time:"1 Hour Ago",
				color:"primary-color"
			},
			{
				iconName:"format_quote",
				sub_title:"Admin",
				heading:"New Feedback from Aric",
				time:"1 Hour Ago",
				color:"accent-color"
			},
			{
				iconName:"notifications_active",
				sub_title:"Action",
				heading:"DB overloaded 80% ",
				time:"1 Hour Ago",
				color:"warn-color"
			},
			{
				iconName:"warning",
				sub_title:"Error",
				heading:"System error - Check",
				time:"1 Hour Ago",
				color:"primary-color"
			},
			{
				iconName:"access_alarm",
				sub_title:"Timeout",
				heading:"System Memory Full",
				time:"1 Hour Ago",
				color:"accent-color"
			},
			{
				iconName:"access_alarm",
				sub_title:"System",
				heading:"Production server up",
				time:"1 Hour Ago",
				color:"warn-color"
			},
			{
				iconName:"access_alarm",
				sub_title:"System",
				heading:"Clear server cache for more space",
				time:"1 Hour Ago",
				color:"primary-color"
			}
		]

	/**
	  * supportData array of object data is used in Support Tickets component. 
	  */
	supportTicketData : any[]=
		[
			{
				img:"/assets/img/user-1.jpg",
				heading:"Gussie Peters",
				action:"OPEN",
				data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				date:"April 14,2016 ",
				color:"primary-bg",
				iconAction:"smallIcons"
			},
			{
				img:"/assets/img/user-2.jpg",
				heading:"Smith Peters",
				action:"CLOSED",
				data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				date:"April 14,2016 ",
				color:"warn-bg",
				iconAction:"smallIcons"
			},
			{
				img:"/assets/img/user-3.jpg",
				heading:"Joe Peters",
				action:"OPEN",
				data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				date:"April 14,2016 " ,
				color:"accent-bg",
				iconAction:"smallIcons"
			},
			{
				img:"/assets/img/user-4.jpg",
				heading:"Cathelene Peters",
				action:"CLOSED",
				data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				date:"April 14,2016 " ,
				color:"warn-bg",
				iconAction:"smallIcons"
			},
			{
				img:"/assets/img/user-5.jpg",
				heading:"Micahael Peters",
				action:"OPEN",
				data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				date:"April 14,2016 " ,
				color:"primary-bg",
				iconAction:"smallIcons"
			}
		]

	/*
		  ---------- small cards ----------
	*/

	Bookmarks :any[]=[
		{   
		"name":"Total Bookmarked",
		"value": "25,700",
		"sign":"bookmark",
		"color":"primary"
		}
	]

	Downloads :any[]=[
		{   
		"name":'Items Downloads',
		"value": "14,200",
		"sign":"cloud_download",
		"color":"accent"
		}
	]

	Uploaded :any[]=[
		{   
		"name":'Items Uploaded',
		"value": "5,400",
		"sign":"cloud_upload",
		"color":"warn"
		}
	]

	Analytics :any[]=[
		{ 
		"name":'Total Analytics',
		"value":"1,288",
		"sign":"insert_charts",
		"color":"primary"
		}
	]

	/*
		---------- Hot Keywords  ----------
	*/
	hotKeywordColumns  : string[] = ['code', 'buyer', 'duration'];

	hotKeywordHeading : any = {
		"heading_1":"Keyword Name",
		"heading_2":"Unique Visitors",
		"heading_6":"Visit Duration"
	}

	hotKeywordsData :any[] = [
		{     
			code:'125250',              
			buyer:'Website designing',
			duration:'00:14:00'
		},
		{     
			code:'125250',               
			buyer:'Website designing',
			duration:'00:14:00'
		},
		{     
			code:'125250',               
			buyer:'Website designing',
			duration:'00:14:00',
		},
		{     
			code:'125250',              
			buyer:'Website designing',
			duration:'00:14:00'
		},
		{     
			code:'125250',               
			buyer:'Website designing',
			duration:'00:14:00',
		},
		{     
			code:'125250',              
			buyer:'Website designing',
			duration:'00:14:00'
		},
		{     
			code:'125250',               
			buyer:'Website designing',
			duration:'00:14:00'
		},
		{     
			code:'125250',               
			buyer:'Website designing',
			duration:'00:14:00'
		}
	]   

	/**
	  * userProfressData array of object is used user progress component/
	  */
	userProfressData : any =
		[
			{
				name:'Male Users',
				total:'4250',
				value:'56',
				colorClass :"male-user"
			},
			{
				name:'Female Users',
				total:'3250',
				value:'44',
				colorClass:"female-user"
			}
		]

	/**
	  * appProfressData array of object is used app progress component/
	  */
	appProfressData : any [] =
		[
			{
				name:'Android Users',
				total:'4250',
				value:'56',
				colorClass:"android-user"
			},
			{
				name:'iOS Users',
				total:'3250',
				value:'44',
				colorClass:"ios-user"
			}
		]

	/**
	  * ServeStatus array of object data is used in server status component.
	  */
	ServeStatus : any []=
		[
			{
				name:'CPU Usage (25/35 Cpus)',
				value:'40'
			},
			{
				name:'Domain (2/5 Used)',
				value:'66'
			},
			{
				name:'Database (90/100)',
				value:'90'
			},
			{
				name:'Email Account (25/50 Used)',
				value:'50'
			},
		]


	/*
		---------- Promo Widgets  ----------
	*/
	promoWidgetComment : any [] = [
		{     
			img:"/assets/img/Freetransform.png",
			name:"Pixel Perfect Design",             
			para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Even the all-powerful Pointing has no control about the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			btn:"PURCHASE ANGLO",
			colorClass:"pixelDesign",
			className:"promoWidgetDesign"
		}
	]

	promoWidgetTransform : any [] = [
		{     
			img:"/assets/img/Comments.png",
			name:"24x7 Customer Support",             
			para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Even the all-powerful Pointing has no control about the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
			btn:"LET'S GET IN TOUCH",
			colorClass:"customerSupport",
			className:"promoWidgetTransform"
		}
	]

	constructor( public translate	   : TranslateService,
					 private coreService : CoreService) { }

	ngOnInit() {
		this.collapseSidebarStatus = this.coreService.collapseSidebarStatus;
		setTimeout(() => {
			this.customColorForBandwidth();
			this.customColorForDownloading();
			this.customColorForVisitors();
		}, 200);
	}

	// custom color for visitor chart.
	customColorForVisitors() {
		this.ctx = document.getElementById("myChart"); 
		this.canvas = this.ctx.getContext("2d");
		this.gradient3 = this.canvas.createLinearGradient(0, 110, 0, 0);
		this.gradient3.addColorStop(0, this.coreService.hexToRgbA('#FFFFFF', 0.1));
		this.gradient3.addColorStop(0.5, this.coreService.hexToRgbA("#448aff",0.1));
		this.gradient4 = this.canvas.createLinearGradient(0, 110, 0, 0);
		this.gradient4.addColorStop(0, this.coreService.hexToRgbA('#FFFFFF', 0.2));
		this.gradient4.addColorStop(0.5, this.coreService.hexToRgbA("#43a047",0.2));
		this.visitChartColors = [
			{
				lineTension: 0.5,
				borderColor: "#448aff",
				pointBorderWidth: 0,
				pointHoverRadius: 0,
				pointRadius: 0,
				pointHoverBorderWidth: 0,
				borderWidth: 2,
				fill: true,
				backgroundColor:this.gradient3
			},
			{
				lineTension: 0.5,
				borderColor: "#43a047",
				pointBorderWidth: 0,
				pointHoverRadius: 0,
				pointRadius: 0,
				pointHoverBorderWidth: 0,
				borderWidth: 2,
				fill: true,
				backgroundColor:this.gradient4
			}
		];
		return this.visitChartColors;
	}

	//custom color for Bandwidth Usage chart.
	customColorForBandwidth(){
		this.ctx = document.getElementById("myChart"); 
		this.canvas = this.ctx.getContext("2d");
		this.gradient1 = this.canvas.createLinearGradient(0, 280, 0, 0);
		this.gradient1.addColorStop(0, this.coreService.hexToRgbA('#FFFFFF', 0.1));
		this.gradient1.addColorStop(1, this.coreService.hexToRgbA("#43a047",0.4));
		this.bandwidthChartColors = [
			{
				lineTension: 0.5,
				borderColor: "#43a047",
				backgroundColor: this.gradient1,
				pointRadius: 0,
				borderWidth: 3,
				fill: true   
			}
		];
		return this.bandwidthChartColors;
	}

	//custom color for  Total Downloading chart.
	customColorForDownloading(){
			this.ctx = document.getElementById("myChart"); 
			this.canvas = this.ctx.getContext("2d");
			this.gradient2 = this.canvas.createLinearGradient(0, 280, 0, 0);
			this.gradient2.addColorStop(0, this.coreService.hexToRgbA('#FFFFFF', 0.1));
			this.gradient2.addColorStop(1, this.coreService.hexToRgbA("#e65100",0.4));
			this.downloadChartColors = [
			{
				lineTension: 0.5,
				borderColor: "#FFB70F",
				backgroundColor:this.gradient2,
				pointRadius: 0,
				borderWidth: 3,
				fill: true   
			}
		];
		return this.downloadChartColors;
	}

	/**
	  * getCloseValue is used to close the component.
	  */
	getCloseValue(event){
		this.deviceVisible = false;
	}

	/**
	  * showFullScreen is used to show the component on full screen.
	  */
	showFullScreen(id) {
		this.coreService.fullScreen(id);
	}

	/**
	  * spinnerShow is used to reload the component.
	  */
	spinnerShow(id){
		this.deviceShowSpinner= true;
		setTimeout(() => {
			this.deviceShowSpinner = false;
		}, 3000);
	}

	ngOnDestroy(){
		if(this.collapseSidebarStatus== false){
			if(document.getElementById('main-app').classList.contains('collapsed-sidebar')){
				this.coreService.isCheckboxOpen = false;
			}
		}
	}
}
