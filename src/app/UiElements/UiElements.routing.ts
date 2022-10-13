import { Routes } from '@angular/router';

import { ButtonsComponent } from './Buttons/Buttons.component';
import { CardsComponent } from './Cards/Cards.component';
import { CheckboxComponent } from './Checkbox/Checkbox.component';
import { CarouselComponent } from './Carousel/Carousel.component';
import { ChipsComponent } from './Chips/Chips.component';
import { DatepickerComponent } from './Datepicker/Datepicker.component';
import { DialogComponent } from './Dialog/Dialog.component';
import { GridComponent } from './Grid/Grid.component';
import { InputComponent } from './Input/Input.component';
import { ListComponent } from './List/List.component';
import { MenuComponent } from './Menu/Menu.component';
import { ProgressComponent } from './Progress/Progress.component';
import { RadioComponent } from './Radio/Radio.component';
import { SelectComponent } from './Select/Select.component';
import { SliderComponent } from './Slider/Slider.component';
import { SnackbarComponent } from './Snackbar/Snackbar.component';
import { TabsComponent } from './Tabs/Tabs.component';
import { ToolbarComponent } from './Toolbar/Toolbar.component';
import { TooltipComponent } from './Tooltip/Tooltip.component';
import { TimepickerComponent } from './Timepicker/Timepicker.component';

export const UiElementsRoutes: Routes = [
   {
      path: '',
      redirectTo: 'buttons',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'buttons',
            component: ButtonsComponent
         },
         {
            path: 'cards',
            component:  CardsComponent
         },
         {
            path: 'checkbox',
            component: CheckboxComponent 
         },
         {
            path: 'carousel',
            component: CarouselComponent
         },
         {
            path: 'chips',
            component: ChipsComponent
         },
         {
            path: 'datepicker',
            component: DatepickerComponent
         },
         {
            path: 'dialog',
            component:  DialogComponent
         },
         {
            path: 'grid',
            component:  GridComponent
         },
         {
            path: 'input',
            component:  InputComponent
         },
         {
            path: 'list',
            component:   ListComponent 
         },
         {
            path: 'menu',
            component:   MenuComponent
         },
         {
            path: 'progress',
            component:   ProgressComponent 
         },
         {
            path: 'radio',
            component:   RadioComponent
         },
         {
            path: 'select',
            component:   SelectComponent
         },
         {
            path: 'slider',
            component:   SliderComponent
         },
         {
            path: 'snackbar',
            component:   SnackbarComponent
         },
         {
            path: 'tabs',
            component:   TabsComponent
         },
         {
            path: 'toolbar',
            component:   ToolbarComponent
         },
         {
            path: 'tooltip',
            component:   TooltipComponent
         },
         {
            path: 'timepicker',
            component:   TimepickerComponent 
         }
      ]
   }
];
