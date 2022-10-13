import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
  selector: 'app-users',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.scss']
})
export class UserComponent implements OnInit {

   /*
      ---------- Support Request ----------
   */

   supportReqShowSpinner   : boolean = false;
   supportRequestVisible   : boolean = true;

   supportRequestData :any[]=[
      {
         value : "250",
         name  : "Total Request",
         color : "primary-bg"
      },
      {
         value : "25",
         name : "New",
         color : "accent-bg"
      },
      {
         value : "125",
         name : "Pending",
         color : "warn-bg"
      }
   ]

   // doughnut Chart Options
   doughnutChartOptions = {
      tooltip : {
         trigger: 'item'
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
                  show: true
               }
            },
            data:[
               {
                  value:250, 
                  name:'Total Request',
                  itemStyle: {
                     normal: {
                        color: '#448aff'
                     }
                  }
               },
               {
                  value:25, 
                  name:'New',
                  itemStyle: {
                     normal: {
                        color: '#FFB300'
                     }
                  }
               },
               {
                  value:125, 
                  name:'Pending',
                  itemStyle: {
                     normal: {
                        color: '#e65100'
                     }
                  }
               }
            ],
         }
      ]
   };

   /**
     * appCard array of object is used in dummy card component.
     */
   appCard :any[] = [
      {
         heading:"Where Can You Find Unique Myspace Layouts Nowadays",
            author :{
               date:"11 Nov 2017 ",
               by:"Admin",
               comments_count:"5"
            },
         img:"/assets/img/blog1.jpg",
         content:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore, similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus."
      }
   ]
   
   /**
     * newEmailData array of object is used in new email component.
     */
   newEmailData : any[]=
      [ 

         {
            img:"/assets/img/user-1.jpg",
            name:"John Doe",
            mail:"john@example.com",
            date:"March 19,2017",    
            heading:"Lorem ipsum is simply dummy text",
            iconAction:"action",
            data:"Lorem ipsum is simply dummy random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable.",
            isReply:false
         },
         {
            img:"/assets/img/user-2.jpg",
            name:"Lisa Roy",
            mail:"lisa@example.com",
            date:"March 19,2017",    
            heading:"Contrary to popular belief, Lorem Ipsum",
            iconAction:"action",
            data:"Lorem ipsum is simply dummy random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable.",
            isReply:false
         },
         {
            img:"/assets/img/user-3.jpg",
            name:"Zara",
            mail:"Zara@example.com",
            date:"March 19,2017",    
            heading:"Popular belief, Lorem Ipsum Pessages",
            iconAction:"action",
            data:"Popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
            isReply:false
         },
         {
            img:"/assets/img/user-4.jpg",
            name:"Mayare Amr",
            mail:"mayare@example.com",
            date:"March 19,2017",    
            heading:"It has roots in a piece of classical Latin literature",
            iconAction:"action",
            data:"Contrary to popular belief, Lorem Ipsum Popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
            isReply:false
         },
         {
            img:"/assets/img/user-5.jpg",
            name:"Brom Tay",
            mail:"brom@example.com",
            date:"March 19,2017",    
            heading:"Lorem ipsum is simply dummy text for prrinting new tycasting",
            iconAction:"action",
            data:"Popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
            isReply:false
         },    
      ]

   constructor(public translate : TranslateService,
      private coreService : CoreService) { }
 
   ngOnInit() {
   }

   /**
     * getCloseValue is used to close the component.
     */
   getCloseValue(event){
      this.supportRequestVisible = false;
   }

   /*
    * showFullScreen is show the element in fullscreen .
    */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }
    
   /**
     * spinnerShow is used to reload the component.
     */
   spinnerShow(id){
      this.supportReqShowSpinner= true;
         setTimeout(() => {
            this.supportReqShowSpinner = false;
         }, 3000);
   }
}
