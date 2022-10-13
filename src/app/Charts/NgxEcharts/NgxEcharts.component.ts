import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'NgxEcharts',
  templateUrl: './NgxEcharts.component.html',
  styleUrls: ['./NgxEcharts.component.scss']
})

export class NgxEchartsComponent implements OnInit {
   
   //bar chart options
   barChartOptions = {
      color: ['#c62828'],
      xAxis: {
         type: 'category',
         boundaryGap: true,
         data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      yAxis: {
         type: 'value',
         axisLabel: {
            formatter: '{value} K'
         }
      },
      series: [
         {
            type: 'bar',
            data:  [11, 11, 15, 13, 12, 13, 10],
         }
      ]
   }

   //doughnut chart options
   doughnutChartOptions = {
      series: [
         {
            name:'Doughnut',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
               normal: {
                 show: false,
                 position: 'center'
               },
               emphasis: {
                  show: true,
                  textStyle: {
                     fontSize: '30',
                     fontWeight: 'bold'
                  }
               }
            },
            labelLine: {
               normal: {
                  show: false
               }
            },
            data:[
               {
                  value:1548, 
                  name:'Product A',
                  itemStyle: {
                     normal: {
                        color: '#448aff'
                     }
                  }
               },
               {
                  value:310, 
                  name:'Product B',
                  itemStyle: {
                     normal: {
                        color: '#c62828'
                     }
                  }
               },
               {
                  value:234, 
                  name:'Product C',
                  itemStyle: {
                     normal: {
                        color: '#43a047'
                     }
                  }
               },
               {
                  value:135, 
                  name:'Product D',
                  itemStyle: {
                     normal: {
                        color: '#00D014'
                     }
                  }
               },
               {
                  value:335, 
                  name:'Product E',
                  itemStyle: {
                     normal: {
                        color: '#FFB70F'
                     }
                  }
               }
            ]
         }
      ]
   };
   
   //line chart options
   lineChartOptions = {
      xAxis: {
         type: 'category',
         boundaryGap: false,
         data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      yAxis: {
         type: 'value',
         axisLabel: {
            formatter: '{value} K'
         }
      },
      color: ['#c62828', '#448aff'],
      series: [
         {
            data: [11, 11, 15, 14, 12, 13, 10],
            type: 'line'
         },
         {
            data: [1, -2, 2, 5, 3, 1, 0],
            type: 'line'
         }
      ]
   }

   //pie chart options
   pieChartOptions = {
      series: [
         {
            name: 'Pie Chart',
            type: 'pie',
            radius: "55%",
            center: ['50%', '50%'],
            data: [
               { value: 15, 
                 name: 'Product A', 
                 itemStyle: {
                     normal: {
                        color: '#448aff'
                     }
                  }
               },
               { value: 5, 
                 name: 'Product B', 
                 itemStyle: {
                     normal: {
                        color: '#c62828'
                     }
                  }
               },
               { value: 10, 
                 name: 'Product C', 
                 itemStyle: {
                     normal: {
                        color: '#FFB70F'
                     }
                  }
               }
            ],
            label: {
               normal: {
                  textStyle: {
                     color: 'rgba(0, 0, 0, 1)'
                  }
               }
            },
            itemStyle: {
               normal: {
                  shadowColor: "rgba(0, 0, 0, 0.5)"
               }
            },   
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 20;
            }
         }
      ]
   };

   //funnel chart options
   funnelChartOptions = {
      toolbox: {
         feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
         }
      },
      calculable: true,
      series: [
           {
               name:'funnel',
               type:'funnel',
               left: '10%',
               top: 60,
               bottom: 60,
               width: '80%',
               min: 0,
               max: 100,
               minSize: '0%',
               maxSize: '100%',
               sort: 'descending',
               gap: 2,
               label: {
                  normal: {
                       show: true,
                       position: 'inside'
                  },
                  emphasis: {
                     textStyle: {
                        fontSize: 20
                     }
                  }
               },
               labelLine: {
                   normal: {
                       length: 10,
                       lineStyle: {
                           width: 1,
                           type: 'solid'
                       }
                   }
               },
               itemStyle: {
                   normal: {
                       borderColor: '#FFFFFF',
                       borderWidth: 1
                   }
               },
               data: [
                  {
                     value: 60, 
                     name: 'Product A',
                     itemStyle: {
                        normal: {
                           color: '#448aff'
                        }
                     }
                  },
                  {
                     value: 40, 
                     name: 'Product B',
                     itemStyle: {
                        normal: {
                           color: '#c62828'
                        }
                     }
                  },
                  {
                     value: 20, 
                     name: 'Product C',
                     itemStyle: {
                        normal: {
                           color: '#00D014'
                        }
                     }
                  },
                  {
                     value: 80, 
                     name: 'Product D',
                     itemStyle: {
                        normal: {
                           color: '#43a047'
                        }
                     }
                  },
                  {
                     value: 100, 
                     name: 'Product E',
                     itemStyle: {
                        normal: {
                           color: '#FFB70F'
                        }
                     }
                  }
               ]
            }
         ]
   };
   
   constructor() {
   }

   ngOnInit() {
   }

}
