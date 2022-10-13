import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-pricing1',
  templateUrl: './Pricing1.component.html',
  styleUrls: ['./Pricing1.component.scss']
})

export class Pricing1Component implements OnInit {

	pricing :any[]=[
		{
			pricing_img:"/assets/img/pricing-icon.png",
			pricing_title:"Basic",
			title_color:"primary-color",
			feature:"Secure file sharing and collaboration.",
			amount_title:"Free",
			howManyUser:" 1 ",
			storage:"100 GB secure storage",
			fileUpload:"2 GB file upload",
			minUser:"Minimum 3 Users",
			maxUser:"max 10 Users",
			action:"START TO BASIC",
			color:"primary"
		},
		{
			pricing_img:"/assets/img/pricing-icon.png",
			pricing_title:"Pro",
			title_color:"warn-color",
			feature:"More power & personalization",
			amount_title:"$35",
			amount_sub:"/mo",
			howManyUser:" 1 ",
			storage:"Unlimited storage",
			fileUpload:"5 GB file upload",
			minUser:"Minimum 3 Users",
			maxUser:"no maximum",
			action:"UPGRADE TO PRO",
			color:"warn"
		},
		{
			pricing_img:"/assets/img/pricing-icon.png",
			pricing_title:"Advanced",
			title_color:"accent-color",
			feature:"Advanced Feature For Brands",
			amount_title:"$70",
			amount_sub:"/mo",
			howManyUser:" 1 ",
			storage:"Unlimited storage",
			fileUpload:"15 GB file upload",
			minUser:"Minimum 3 Users",
			maxUser:"no maximum",
			action:"UPGRADE TO ADVANCE",
			color:"accent"
		}
	]

	compare_plan :any[]=[
		{
			heading:"Basic (Free)",
			title_color:"primary-color",
			subHeading:"100 responses / mo",
			plan_content:
				[
					"Granular access and controls",
					"Desktop sync",
					"Mobile access",
					"Version history",
					"SSL and at-rest encryption",
					"Two-factor authentication",
					"Standard business support",
					"User management",
					"25,000 API calls per month"
				],
			buttonType:{
				buttonName:"START TO BASIC",
				buttonColor:"primary"
			}
		},
		{
			heading:"Pro",
			title_color:"warn-color",
			subHeading:"Unlimited responses",
			plan_content:
				[
					"Includes all Starter features plus",
					"Advanced user and security reportingc",
					"Custom branding",
					"Mobile security controls",
					"Integrations with EMM providers",
					"Data Loss Prevention (DLP)",
					"Standard business support",
					"50,000 API calls per month",
					"25,000 API calls per month"
				],
			buttonType:{
				buttonName:"UPGRADE TO PRO.",
				buttonColor:"warn"
			}
		},
		{
			heading:"Advanced",
			title_color:"accent-color",
			subHeading:"Unlimited responses",
			plan_content:
				[
					"Includes all Business features plus",
					"Unlimited external collaborators",
					"Full content visibility and management",
					"Unlimited integrations",
					"Workflow automations",
					"Document watermarking",
					"Device trust",
					"Password policy enforcement",
					"Metadata and custom templates"
				],
			buttonType:{
				buttonName:"UPGRADE TO ADVANCE",
				buttonColor:"accent"
			}
		},
	]

	frquently_asked_question :any[]=[
		{	
			heading:"Mauris cursus, lectus vitae sodales interdum ?",
			subHeading:"Integer enim nibh, tincidunt a massa vel, semper malesuada enim. Cras fringilla ante eu ipsum venenatis viverra. Ut eget libero id erat tristique mattis. Quisque consectetur efficitur vulputate. Mauris cursus, lectus vitae sodales interdum, ante leo rhoncus est, id laoreet neque libero in velit.Phasellus bibendum lorem at velit venenatis consequat eget eget sapien.Donec vel turpis lacinia, varius massa ac, cursus neque."
		},
		{	
			heading:"Mauris cursus, lectus vitae sodales interdum ?",
			subHeading:"Integer enim nibh, tincidunt a massa vel, semper malesuada enim. Cras fringilla ante eu ipsum venenatis viverra. Ut eget libero id erat tristique mattis. Quisque consectetur efficitur vulputate. Mauris cursus, lectus vitae sodales interdum, ante leo rhoncus est, id laoreet neque libero in velit.Phasellus bibendum lorem at velit venenatis consequat eget eget sapien.Donec vel turpis lacinia, varius massa ac, cursus neque."
		},
		{	
			heading:"Mauris cursus, lectus vitae sodales interdum ?",
			subHeading:"Integer enim nibh, tincidunt a massa vel, semper malesuada enim. Cras fringilla ante eu ipsum venenatis viverra. Ut eget libero id erat tristique mattis. Quisque consectetur efficitur vulputate. Mauris cursus, lectus vitae sodales interdum, ante leo rhoncus est, id laoreet neque libero in velit.Phasellus bibendum lorem at velit venenatis consequat eget eget sapien.Donec vel turpis lacinia, varius massa ac, cursus neque."
		},
		{	
			heading:"Mauris cursus, lectus vitae sodales interdum ?",
			subHeading:"Integer enim nibh, tincidunt a massa vel, semper malesuada enim. Cras fringilla ante eu ipsum venenatis viverra. Ut eget libero id erat tristique mattis. Quisque consectetur efficitur vulputate. Mauris cursus, lectus vitae sodales interdum, ante leo rhoncus est, id laoreet neque libero in velit.Phasellus bibendum lorem at velit venenatis consequat eget eget sapien.Donec vel turpis lacinia, varius massa ac, cursus neque."
		},
		{	
			heading:"Mauris cursus, lectus vitae sodales interdum ?",
			subHeading:"Integer enim nibh, tincidunt a massa vel, semper malesuada enim. Cras fringilla ante eu ipsum venenatis viverra. Ut eget libero id erat tristique mattis. Quisque consectetur efficitur vulputate. Mauris cursus, lectus vitae sodales interdum, ante leo rhoncus est, id laoreet neque libero in velit.Phasellus bibendum lorem at velit venenatis consequat eget eget sapien.Donec vel turpis lacinia, varius massa ac, cursus neque."
		},
		{	
			heading:"Mauris cursus, lectus vitae sodales interdum ?",
			subHeading:"Integer enim nibh, tincidunt a massa vel, semper malesuada enim. Cras fringilla ante eu ipsum venenatis viverra. Ut eget libero id erat tristique mattis. Quisque consectetur efficitur vulputate. Mauris cursus, lectus vitae sodales interdum, ante leo rhoncus est, id laoreet neque libero in velit.Phasellus bibendum lorem at velit venenatis consequat eget eget sapien.Donec vel turpis lacinia, varius massa ac, cursus neque."
		},
		{	
			heading:"Mauris cursus, lectus vitae sodales interdum ?",
			subHeading:"Integer enim nibh, tincidunt a massa vel, semper malesuada enim. Cras fringilla ante eu ipsum venenatis viverra. Ut eget libero id erat tristique mattis. Quisque consectetur efficitur vulputate. Mauris cursus, lectus vitae sodales interdum, ante leo rhoncus est, id laoreet neque libero in velit.Phasellus bibendum lorem at velit venenatis consequat eget eget sapien.Donec vel turpis lacinia, varius massa ac, cursus neque."
		},
	]

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}

}
