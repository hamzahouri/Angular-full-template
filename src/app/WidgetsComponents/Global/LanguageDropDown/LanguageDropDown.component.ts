import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';
import * as $ from 'jquery';
@Component({
	selector: 'anglo-language-drop-down',
	templateUrl: './LanguageDropDown.component.html',
	styleUrls: ['./LanguageDropDown.component.scss']
})

export class LanguageDropDownComponent implements OnInit {

	currentLang = 'en';
	selectImage = '/assets/img/en.png'; 

	langArray : any [] = [
		{  
			img:"/assets/img/en.png",
			name:"English",
			value	: "en"
		},
		{
			img:"/assets/img/france.png",
			name:"French",
			value:"fr"
		},
		{
			img:"/assets/img/he.png",
			name:"Hebrew",
			value:"he"
		},
		{
			img:"/assets/img/ru.png",
			name:"Russian",
			value:"ru"
		},
		{
			img:"/assets/img/ar.png",
			name:"Arabic",
			value:"ar"
		},
		{
			img:"/assets/img/china.png",
			name:"Chinese",
			value:"zh"
		},
		{
			img:"/assets/img/german.png",
			name:"German",
			value:"de"
		},
		{
			img:"/assets/img/spanish.jpg",
			name:"Spanish",
			value:"es"
		},
		{
			img:"/assets/img/japan.jpeg",
			name:"Japanese",
			value:"ja"
		},
		{
			img:"/assets/img/korean.jpg",
			name:"Korean",
			value:"ko"
		},
		{
			img:"/assets/img/italian.png",
			name:"Italian",
			value:"it"
		},
		{
			img:"/assets/img/hungary.png",
			name:"Hungarian",
			value:"hu"
		}
	];

	constructor(public translate : TranslateService, public coreService: CoreService) { }

	ngOnInit() {
	}

	getLang(lang) {
		for(let data of this.langArray) {
			if(data.value == lang) {
				if(lang == 'ar' || lang == 'he'){
					this.coreService.layout = 'rtl';
					this.coreService.rtlStatus = true;
					$(".app-main").addClass("rtl-layout");
				}else{
					this.coreService.layout = 'ltr';
					this.coreService.rtlStatus = false;
					$(".app-main").removeClass("rtl-layout");
				}
				this.selectImage = data.img;
				break;
			}
		}
		this.translate.use(lang);
	}
}
