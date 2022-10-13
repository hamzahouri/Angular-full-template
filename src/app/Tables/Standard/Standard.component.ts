import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector		 : 'app-standard',
  templateUrl	 : './Standard.component.html',
  styleUrls		 : ['./Standard.component.scss']
})

export class StandardComponent implements OnInit {

   desserts : any [] =[
      {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4, sodium: 87, calcium: 14, iron :1},
      {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3, sodium: 129, calcium: 8, iron :1},
      {name: 'Eclair', calories: 262, fat: 16, carbs: 23, protein: 6, sodium: 337, calcium: 6, iron :7},
      {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9, sodium: 327, calcium: 7, iron :16},
      {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, sodium: 413, calcium: 3, iron :8},
      {name: 'Jelly bean', calories: 374, fat: 0, carbs: 94, protein: 0, sodium: 50, calcium: 0, iron :0},
      {name: 'Loolipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, sodium: 38, calcium: 0, iron :2},
      {name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, sodium: 562, calcium: 0, iron :45},
      {name: 'Donut', calories: 452, fat: 25, carbs: 51, protein: 4.9, sodium: 326, calcium: 2, iron :22},
      {name: 'Kitkat', calories: 512, fat: 26, carbs: 65, protein: 7, sodium: 54, calcium: 12, iron :6},
   ];
   
   displayedColumns:any = ["name", "calories", "fat", "carbs", "protein", "sodium", "calcium", "iron"];
   
   sourceData = new MatTableDataSource<any>(this.desserts);
   @ViewChild( MatSort,{static: true} ) sort : MatSort;

   constructor(public translate : TranslateService) {}

   ngOnInit() {
      this.sourceData.sort = this.sort;
   }
}