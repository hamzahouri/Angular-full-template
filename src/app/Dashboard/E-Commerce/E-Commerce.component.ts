import { Component, OnInit ,Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
  selector    : 'anglo-e-commerce',
  templateUrl : './E-Commerce.component.html',
  styleUrls   : ['./E-Commerce.component.scss']
})
export class ECommerceComponent implements OnInit {

   ctx                   : any;
   canvas                : any;
   gradient1             : any;
   gradient2             : any;
   xAxisLabel            : boolean  = true;
   categorySaleId        : string   = "categorySales";
   
   isReloadChildComponent : any = {     
      saleShowSpinner       : false,
      deviceShowSpinner     : false,
      customerShowSpinner   : false,
      topSellShowSpinner    : false,
      weeklySellShowSpinner : false
   }

   isVisibleChildComponent : any  = {
      singleSalesChartVisible : true,
      numberCardChartVisible  : true,
      weeklySaleChartVisible  : true,
      reviewVisible           : true,
      topSellingVisible       : true,
      deviceShareVisible      : true
   };
   
   /*
      ---------- Total Earning card ----------
   */

   //card data
   earningCardData :any [] = [
      {
         heading : "Total Earnings",
         amount : "2,145"
      }
   ]

   //line chart label
   public earningChartLabel :string[] = ["A", "B", "C", "D", "E", "F", "J", "K", "L", "M", "N", "P"];
   
   //line chart data
   public earningChartData : any[] = [
      {
         data:[30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44]
      }
   ];

   //line chart color
   public earningChartColors: Array <any> = [
      {
         lineTension: 0.4,
         borderColor: '#448aff',
         pointBorderWidth: 0,
         pointHoverRadius: 0,
         pointRadius: 0,
         pointHoverBorderWidth: 0,
         borderWidth: 3,
         fill: false
      }
   ];

   /*
      ---------- New Customers card ----------
   */
     
   //card data 
   customerCardData :any [] = [
     {
         heading : "New Customers",
         amount : "136"
      }
   ]

   //line chart label
   public customersChartLabel :string[] = ["A", "B", "C", "D", "E", "F", "J", "K", "L", "M", "N", "P"];
   
   //line chart data
   public customersChartData : any[] = [
      {
         data: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44] 
      }
   ];

   //line chart color
   public customersChartColors: Array <any> = [
      {
         lineTension: 0.4,
         borderColor: '#43a047',
         pointBorderWidth: 0,
         pointHoverRadius: 0,
         pointRadius: 0,
         pointHoverBorderWidth: 0,
         borderWidth: 3,
         fill: false   
      }
   ];
   
   /*
      ---------- Online Revenue card ----------
   */

   //card data
   revenueCardData :any [] = [
      {
         heading : "Online Revenue",
         amount : "2,145"
      }
   ]
  
   //line chart label
   public revenueChartLabel :string[] = ["A", "B", "C", "D", "E", "F", "J", "K", "L", "M", "N", "P"];
   
   //line chart data
   public revenueChartData : any[] = [
      {
         data : [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44]
      }
   ];

   //line chart color
   public revenueChartColors: Array <any> = [
      {
         lineTension: 0.4,
         borderColor: '#FFB300',
         pointBorderWidth: 0,
         pointHoverRadius: 0,
         pointRadius: 0,
         pointHoverBorderWidth: 0,
         borderWidth: 3,
         fill: false   
      }
   ];

   /*
      ---------- Sales Component   ----------
   */
  
   // bar chart label
   public barChartLabels :string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
   
   //bar chart data
   public barChartData : any[] = [
      {data: [45, 32, 50, 42, 32, 46, 30, 25, 29, 21, 21, 25], label: 'Earned'},
      {data: [10, 20, 12, 30, 10, 32, 28, 30, 20, 18, 18, 30], label: 'Views'}
   ];

   //bar chart color
   public barChartColors: Array <any> = [
      {
         backgroundColor: '#448aff',
         pointHoverBackgroundColor: '#448aff',
         borderWidth: 0
      }, 
      {
         backgroundColor: '#E0E0E0',
         pointHoverBackgroundColor: '#E0E0E0', 
         borderWidth: 0  
      }
   ];

   /**
     * doughnutChartOptions properties to be specified for each dataset.
     */
   doughnutChartOptions : any  = {
      tooltip : {
         trigger: 'item',
      },
      series : [
         {
            type:'pie',
            radius : ['40%', '55%'],
            itemStyle : {
               normal : {
                  label : {
                     show : false
                  },
                  labelLine : {
                     show : false
                  }
               },
            },
            data : [
               {   
                  value:300, 
                  name:'Website',
                  itemStyle: {
                     normal: {
                        color: '#448aff'
                     }     
                  }
               },
               {   
                  value:50, 
                  name:'Android Devices',
                  itemStyle: {
                     normal: {
                        color: '#43a047'
                     }     
                  }
               },
               {   
                  value:20, 
                  name:'ios Devices',
                  itemStyle: {
                     normal: {
                        color: '#FFB300'
                     }     
                  }
               }
            ]
         }
      ]
   }

   /**
     *  recentSaleData arary of object data is used in RecentSales Component 
     */
   recentSaleData  : any [] =
      [   
         {   
            'img':"/assets/img/icon1.jpeg",
            'name':"Aadi"
         },
         {   
            'img':"/assets/img/icon2.jpeg",
            'name':"Event Promo"
         },
         {   
            'img':"/assets/img/icon3.jpeg",
            'name':"Lawking"
         },
         {   
            'img':"/assets/img/icon4.jpeg",
            'name':"Adminify"
         },
         {   
            'img':"/assets/img/icon1.jpeg",
            'name':"Reactify"
         }
      ]

   /**
     * supportRequestData arary of object data is used in SupportRequests Component 
     */
   supportRequestData : any [] =
      [
         {
            'name'  : "Shipping not arrived",
            'action': "CLOSED",
            'color' : "primary-bg"
         },
         {
            'name'  : "Product not good",
            'action': "PENDING",
            'color' : "accent-bg"
         },
         {
            'name'  : "Payment failed",
            'action': "CLOSED",
            'color' : "warn-bg"
         },
         {
            'name'  : "Credit card not accepting",
            'action': "PENDING",
            'color' : "primary-bg"
         },
         {
            'name'  : "Unable to add credit card",
            'action': "PENDING",
            'color' : "accent-bg"
         }
      ]

   /**
     * todoListData arary of object data is used in TodoList Component 
     */
   todoListData : any []  = [
      {
         title:'Arrange meeting for An',
         status:true
         
      },
      {
         title:'Create new pages for theme',
         status:false
      },
      {
         title:'Prepare launch image',
         status:false
      },
      {
         title:'Pay internet bill',
         status:false
      },
      {
         title:'Generate salary reports',
         status:false
      },
      {
         title:'Update dashboard',
         status:false
      }      
   ]
   
   /*
      ---------- Customer Overview Chart ----------
   */
  
   //line chart label
   public customerChartLabel :string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ];
   
   //line chart data
   public customerChartData : any[] = [ 
      {
         data : [90, 140, 50, 120, 160, 90, 90]
      } 
   ];

   //line chart color
   public customerChartColors : Array <any>;

   /*
      ---------- Invoice Component  ----------
   */

   // invoicesData arary of object data is used in Invoices Component.      
   invoicesData : any [] = [
      {
         code:'00450',
         buyer:'Earl Thomas',
         date:'02/23/2018',
         status:'DUE SOON',
         color:'primary-bg',
         amount:'$2,580'
      },
      {
         code:'00451',
         buyer:'Bryan Drake',
         date:'06/16/2018',
         status:'GENERATED',
         color:'success-bg',
         amount:'$3,000'
      },
      {
         code:'00452',
         buyer:'Julia Cooper',
         date:'05/05/2018',
         status:'PENDING',
         color:'accent-bg',
         amount:'$2,500'
      },
      {
         code:'00453',
         buyer:'Ricardo Day',
         date:'05/23/2018',
         status:'DUE SOON',
         color:'warn-bg',
         amount:'$3,500'
      },
      {
         code:'00454',
         buyer:'Owen Bishop',
         date:'10/02/2018',
         status:'PENDING',
         color:'success-bg',
         amount:'$3,580'
      }
   ]

   // displayedColumns contains list of the columns that used in Invoice Table. 
   displayedColumns : string[] = ['code', 'buyer', 'date', 'status', 'amount'];

  
   //InvoicesTableHeading is heading of Invoices Component Table.  
   invoicesTableHeading : any = {
      "heading_1":"#",
      "heading_2":"Buyer",
      "heading_3":"Date",
      "heading_4":"Status",
      "heading_5":"Amount"
   }

   /**
    * recentOrderData arary of object data is used in RecentOrders Component 
    */
   recentOrderData : any [] = [
      {
         orderId:'234XE78',
         productName:'Sam Fully automatic Washing machine',
         quantity:'2',
         status:'TRANSIT',
         amount:'$ 600.00',
         delete: 'delete',
         color:'primary-bg'
      },
      {
         orderId:'234XE79',
         productName:'LED Television',
         quantity:'5',
         status:'SHIPPED',
         amount:'$ 1200.00',
         delete: 'delete',
         color:'accent-bg'
      },
      {
         orderId:'234XE80',
         productName:'Dell Laptop I6 Processor',
         quantity:'1',
         status:'TRANSIT',
         amount:'$ 5000.00',
         delete: 'delete',
         color:'warn-bg'
      },
      {
         orderId:'234XE82',
         productName:'Mobile Phone',
         quantity:'4',
         status:'CANCELED',
         amount:'$ 800.00',
         delete: 'delete',
         color:'warn-bg'
      },
   ]

   /*
      ---------- Weekly Sales Chart ----------
   */
  
   //line chart label
   public saleChartLabel :string[] =  ["A", "B", "C", "D", "E", "F", "J", "K", "L", "M", "N"];
   
   //line chart data
   public saleChartData : any[] = [
      {
         data : [10, 25, 55, 40, 45, 50, 75, 70, 72, 60, 25]
      } 
   ];

   //line chart color
   public saleChartColors : Array <any>;

   /**
     * reviewsSlideData arary of object data is used in Reviews Component 
     */
   reviewsSlideData = [
      { 
         name:"for Design Quality",
         heading:"by Austin 2 months ago",
         paragraph:"This template is absolutely what I am looking for .....Thanks",
         footer:"Reply",
         rate :5
      },
      {
         name:"for Flexibility",
         heading:"by Jens Brinker 2 months ago",
         paragraph:"It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer",
         footer:"Reply",
         rate:5
      },
      {
         name:"for Tony Bluetooth Speakers",
         heading:"by LaurenMess 2 months ago",
         paragraph:"Awesome!! Really nice admin panel, Congratulations!",
         footer:"Reply",
         rate:4
      },
   ];

   /**
     * socialFeedData arary of object data is used in Socials Component 
     */
   socialFeedData : any [] =
      [
         {
            facebook:
               {
                  socialIcon:'fa fa-facebook',
                  friends:'89K',
                  feeds:'459'
               },

            twitter:
               {
                  socialIcon:'fa fa-twitter',
                  friends:'65K',
                  feeds:'350'
               },

            linkedin:
               {
                  socialImg:'fa fa-linkedin',
                  friends:'35K',
                  feeds:'689'
               },


            google:
               {
                  socialImg:'fa fa-google',
                  friends:'90K',
                  feeds:'1000'
               }
         }
      ]

   /**
     * topSellingData arary of object data is used in Top Selling Component 
     */
   topSellingData : any [] = 
      [
         {
            img: "/assets/img/product-2.png",
            title:"Jsm Headphones",
            price:"340"
         },
         {
            img: "/assets/img/product-3.png",
            title:"AT Jack Radio",
            price:"340"
         },
         {
            img: "/assets/img/product-1.png",
            title:"Bluetooth Speakers",
            price:"255"
         }
      ];

   /**
     * categorySaleData arary of object data is used in CategorySale Component 
     */
   categorySaleData : any [] =
      [   
         {
            name:'Clothing',
            value:'75'
         },
         {
            name:'Gadgets',
            value:'45'
         },
         {
            name:'Furniture',
            value:'83'
         },
         {
            name:'Wine',
            value:'15'
         },
         {
            name:'Toys',
            value:'58'
         },
         {
            name:'Nutrition',
            value:'39'
         }
      ]

   /**
     * blogLayoutData arary of object data is used in dummy card Component 
     */
   blogLayoutData : any [] = 
      [
         {
            img:"/assets/img/blog-1.jpg",
            heading:"lorem ipsum is simply dummy text",
            date:"1/1/2018",
            content:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus."
         }
      ]

   constructor(public translate : TranslateService, 
               private coreService : CoreService) {
   }

   ngOnInit() {
      setTimeout(() => {
         this.customColorForCustomer();
         this.customColorForSale();
         }, 200);
   }
   
   //custom color for customer overview chart.
   customColorForCustomer(){
      this.ctx = document.getElementById("myChart"); 
      this.canvas = this.ctx.getContext("2d");
      this.gradient1 = this.canvas.createLinearGradient(0, 280, 0, 0);
      this.gradient1.addColorStop(0, this.coreService.hexToRgbA('#FFFFFF', 0.1));
      this.gradient1.addColorStop(1, this.coreService.hexToRgbA("#43a047",0.4));
      this.customerChartColors = [
         {
            lineTension: 0.0,
            borderColor: "#43a047",
            backgroundColor:this.gradient1,
            pointRadius: 0,
            borderWidth: 3,
            fill: true   
      
         }
      ];
      return this.customerChartColors;
   }

   //custom color for weekly sale chart.
   customColorForSale(){
      this.ctx = document.getElementById("myChart"); 
      this.canvas = this.ctx.getContext("2d");
      this.gradient2 = this.canvas.createLinearGradient(0, 280, 0, 0);
      this.gradient2.addColorStop(0, this.coreService.hexToRgbA('#FFFFFF', 0.1));
      this.gradient2.addColorStop(1, this.coreService.hexToRgbA("#448aff",0.4));
      this.saleChartColors = [
         {
            lineTension: 0.5,
            borderColor: '#448aff',
            backgroundColor:this.gradient2,
            pointRadius: 0,
            borderWidth: 3,
            fill: true   
         }
      ];
      return this.saleChartColors;
   }
   

   /**
     * showFullScreen is show the paticular component on fullscreen .
     */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /**
     * spinnerShow method reload the paticular component.
     */
   spinnerShow(id){
      switch (id) {
         case "saleChart":
            this.isReloadChildComponent.saleShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.saleShowSpinner = false;
            }, 3000);

            break;

         case "deviceShare":
            this.isReloadChildComponent.deviceShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.deviceShowSpinner = false;
            }, 3000);
            break;

         case "customerOverview":
            this.isReloadChildComponent.customerShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.customerShowSpinner = false;
            }, 3000);
            break;

         case "topSelling":
            this.isReloadChildComponent.topSellShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.topSellShowSpinner = false;
            }, 3000);
            break;

         case "weeklySales":
            this.isReloadChildComponent.weeklySellShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.weeklySellShowSpinner = false;
            }, 3000);
            break;
            
         default:
            break;
      }
   }

   /**
     *  getCloseValue close the paticular component.
     */
   getCloseValue(event, type){
      switch (type) {
         case "sales":
            this.isVisibleChildComponent.singleSalesChartVisible = false
            break;

         case "advanceChart":
            this.isVisibleChildComponent.numberCardChartVisible = false
            break;

         case "weeklySaleChart":
            this.isVisibleChildComponent.weeklySaleChartVisible = false
            break;

         case "review":
            this.isVisibleChildComponent.reviewVisible = false
            break;

         case "topSelling":
            this.isVisibleChildComponent.topSellingVisible = false
            break;
    
         case "deviceShare":
            this.isVisibleChildComponent.deviceShareVisible = false
            break;
    
         default:
            break;
      }    
   }
}