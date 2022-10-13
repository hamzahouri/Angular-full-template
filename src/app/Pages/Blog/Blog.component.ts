import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector      : 'anglo-blog',
	templateUrl   : './Blog.component.html',
	styleUrls     : ['./Blog.component.scss']
})

export class BlogComponent implements OnInit {

	blogWidget : any []=[
      {
         img:"/assets/img/blog-1.jpg",
         heading:"Lorem ipsum is simply dummy text",
         date:"Last updated: 1-jun-2018",
         content:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus."
      }
   ]

   blogWidget1 : any []=[
      {
         img:"/assets/img/blog-2.jpg",
         heading:"Lorem ipsum is simply dummy text",
         date:"Last updated: 1-jun-2018",
         content:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus."
      }
   ]

   blogWidget2 : any []=[
      {
         img:"/assets/img/blog-3.jpg",
         heading:"Lorem ipsum is simply dummy text",
         date:"Last updated: 1-jun-2018",
         content:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus."
      }
   ]

   blogWidget3 : any []=[
      {
         img:"/assets/img/blog-4.jpg",
         heading:"Lorem ipsum is simply dummy text",
         date:"Last updated: 1-jun-2018",
         content:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus."
      }
   ]

   blogWidget4:any[]=[
      {
         img:"/assets/img/blog-5.jpg",
         heading:"Lorem ipsum is simply dummy text",
         date:"Last updated: 1-jun-2018",
         content:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus."
      }
   ]

   blogWidget5 : any []=[
      {
         img:"/assets/img/blog-6.jpg",
         heading:"Lorem ipsum is simply dummy text",
         date:"Last updated: 1-jun-2018",
         content:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus."
      }
   ]

   categories : string [] = ["Trending","Sports","News","Travel","Social","Adventure"];

   tags_widget : string [] = ["Consulting","Finance","Ideas","Market","Online Service","Planning","Tips"];

   blog_widget : any [] = [
   	{
   		img:"/assets/img/gallery1.jpg",
   		heading:"7 Things You Need To Know About Consulting Today",
   		likes:"220",
   		comments:"80"
   	},

   	{
   		img:"/assets/img/gallery2.jpg",
   		heading:"7 Things You Need To Know About Consulting Today",
   		likes:"20",
   		comments:"40"
   	},

   	{
   		img:"/assets/img/gallery3.jpg",
   		heading:"7 Things You Need To Know About Consulting Today",
   		likes:"180",
   		comments:"20"
   	},

   	{
   		img:"/assets/img/gallery4.jpg",
   		heading:"7 Things You Need To Know About Consulting Today",
   		likes:"50",
   		comments:"2"
   	}
   ]

   constructor(public translate : TranslateService) { }

   ngOnInit() {
   }
}
