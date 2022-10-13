import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
	
@Component({
  selector			: 'app-slots',
  templateUrl		: './Slots.component.html',
  styleUrls			: ['./Slots.component.scss'],
 	animations: [
   	trigger('detailExpand', [
	      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
	      state('expanded', style({height: '*'})),
	      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    	]),
  	],
})

export class SlotsComponent implements OnInit, AfterViewInit {

   desserts : any [] = [
      {"Dessert(100g Saving)": 'Frozen yogurt',Calories: 159,"Fat (g)" : 6,"Carbs (g)": 24,"Protein (g)": 4,"Sodium (mg)" : 87,"Calcium (%)": 14 ,"Iron (%)"  : 1},
      {"Dessert(100g Saving)": 'Ice cream sandwich', Calories: 237,"Fat (g)" : 9,"Carbs (g)": 37, "Protein (g)": 4.3, "Sodium (mg)" : 129, "Calcium (%)": 8, "Iron (%)"   :1},
      {"Dessert(100g Saving)": 'Eclair', Calories: 262, "Fat (g)" : 16, "Carbs (g)" : 23, "Protein (g)": 6, "Sodium (mg)" : 337, "Calcium (%)": 6, "Iron (%)"   :7},
      {"Dessert(100g Saving)": 'Gingerbread',Calories: 356,"Fat (g)": 16, "Carbs (g)" : 49, "Protein (g)": 3.9, "Sodium (mg)" : 327,"Calcium (%)": 7, "Iron (%)"   :16},
      {"Dessert(100g Saving)": 'Cupcake', Calories: 305, "Fat (g)" : 3.7,"Carbs (g)" : 67, "Protein (g)": 4.3, "Sodium (mg)" : 413,"Calcium (%)": 3,"Iron (%)"   :8},
      {"Dessert(100g Saving)": 'Jelly bean', Calories: 374,"Fat (g)": 0, "Carbs (g)" : 94, "Protein (g)": 0, "Sodium (mg)": 50, "Calcium (%)": 0, "Iron (%)"   :0},
      {"Dessert(100g Saving)": 'Loolipop', Calories: 392,"Fat (g)" : 0.2,"Carbs (g)" : 98, "Protein (g)": 0, "Sodium (mg)" : 38, "Calcium (%)": 0, "Iron (%)"   :2},
      {"Dessert(100g Saving)": 'Honeycomb',Calories: 408, "Fat (g)" : 3.2,"Carbs (g)" : 87, "Protein (g)": 6.5, "Sodium (mg)" : 562, "Calcium (%)": 0, "Iron (%)"  :45},
      {"Dessert(100g Saving)": 'Donut', Calories: 452, "Fat (g)" : 25, "Carbs (g)": 51,"Protein (g)": 4.9, "Sodium (mg)" : 326, "Calcium (%)": 2, "Iron (%)"   :22},
      {"Dessert(100g Saving)": 'Kitkat', Calories: 512, "Fat (g)" : 26, "Carbs (g)" : 65, "Protein (g)": 7, "Sodium (mg)" : 54, "Calcium (%)": 12, "Iron (%)"   :6},
   ];

	tableOneHeaders : string []          = ['select','Dessert(100g Saving)','Calories','Fat (g)','Carbs (g)','Protein (g)','Sodium (mg)','Calcium (%)','Iron (%)'];
	tableOnedataSource                   = new MatTableDataSource<any>(this.desserts);
   selection                            = new SelectionModel<any>(true,[]);
   @ViewChild( MatPaginator,{static: true} ) paginator : MatPaginator;
	@ViewChild( MatSort,{static: true} ) sort           : MatSort;

	headers : string [] = ['Dessert(100g Saving)','Calories','Fat (g)','Carbs (g)','Protein (g)','Sodium (mg)','Calcium (%)','Iron (%)'];
   @ViewChild('secndTableSort') public secondTableSort : MatSort;
   @ViewChild('paginatorOne') public paginatorOne     : MatPaginator;
   tableTwodataSource = new MatTableDataSource<any>(this.desserts);

	expandedElement      : any;
	tableThirddataSource = new MatTableDataSource<any>(this.desserts);
   @ViewChild('thirdTableSort') thirdTableSort : MatSort;
	
	constructor(private cdRef: ChangeDetectorRef,
      public translate : TranslateService) { }

	ngOnInit() {
   	this.tableOnedataSource.paginator = this.paginator;
  		this.tableOnedataSource.sort      = this.sort;
  	}

   ngAfterViewInit() {
      this.tableTwodataSource.sort      = this.secondTableSort;
      this.tableTwodataSource.paginator = this.paginatorOne;
      this.tableThirddataSource.sort    = this.thirdTableSort;
      this.cdRef.detectChanges()
   }

   /**
     * Whether the number of selected elements matches the total number of rows. 
     */
   isAllSelected(){
      let numSelected    =   this.selection.selected.length;
      let numRows        =   this.tableOnedataSource.data.length;
      return numSelected === numRows;
   }

   /** 
     * Selects all rows if they are not all selected; otherwise clear selection. 
     */
   masterToggle() {
      this.isAllSelected() ?
      this.selection.clear() :
      this.tableOnedataSource.data.forEach(row => this.selection.select(row));
   }

}