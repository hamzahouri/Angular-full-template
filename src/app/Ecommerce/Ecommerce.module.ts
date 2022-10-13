import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgAisModule } from 'angular-instantsearch';
import { TranslateModule } from '@ngx-translate/core';

import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
import { EcommerceRoutes } from './Ecommerce.routing';
import { ShopComponent } from './Shop/Shop.component';
import { CartComponent } from './Cart/Cart.component';
import { CheckoutComponent } from './Checkout/Checkout.component';
import { CardsComponent } from './Cards/Cards.component';

@NgModule({
	imports: [
		CommonModule,
		NgAisModule.forRoot(),
		RouterModule.forChild(EcommerceRoutes),
		FlexLayoutModule,
		MatFormFieldModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		MatTableModule,
		MatButtonModule,
		MatCheckboxModule,
		MatGridListModule,
		ReactiveFormsModule,
		FormsModule,
		WidgetsComponentsModule,
		MatSelectModule,
		TextMaskModule,
		TranslateModule,
		MatProgressSpinnerModule
	],
	
	declarations: [ShopComponent, CartComponent, CheckoutComponent, CardsComponent]
})

export class EcommerceModule { }
