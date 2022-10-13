import { Routes } from '@angular/router';

import { ShopComponent } from './Shop/Shop.component';
import { CartComponent } from './Cart/Cart.component';
import { CheckoutComponent } from './Checkout/Checkout.component';
import { CardsComponent } from './Cards/Cards.component';

export const EcommerceRoutes: Routes = [
   {
      path: '',
      redirectTo: 'shop',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'shop',
            component: ShopComponent
         },
         {
            path: 'cart',
            component: CartComponent
         },
         {
            path: 'checkout',
            component: CheckoutComponent
         },
         {
            path: 'cards',
            component: CardsComponent
         }
      ]
   }
];
