import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SettingDialogComponent } from './Dialog/SettingDialog/SettingDialog.component';
import { Dialog3Component } from './Dialog/Dialog3/Dialog3.component';
import { Dialog2Component } from './Dialog/Dialog2/Dialog2.component';
import { DialogComponent } from './Dialog/Dialog.component';
import { GoogleDialogComponent } from './Dialog/GoogleDialog/GoogleDialog.component';
import { ScrollableComponent } from './Dialog/Scrollable/Scrollable.component';

import { ButtonsComponent } from './Buttons/Buttons.component';
import { CardsComponent } from './Cards/Cards.component';
import { CheckboxComponent } from './Checkbox/Checkbox.component';
import { CarouselComponent } from './Carousel/Carousel.component';
import { ChipsComponent } from './Chips/Chips.component';
import { DatepickerComponent } from './Datepicker/Datepicker.component';
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
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';

import { UiElementsRoutes } from './UiElements.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UiElementsRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonToggleModule,
        MatCardModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatNativeDateModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatGridListModule,
        MatRadioModule,
        MatDialogModule,
        MatSelectModule,
        MatTooltipModule,
        HttpClientModule,
        MatSliderModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatTabsModule,
        FlexLayoutModule,
        WidgetsComponentsModule,
        SlideshowModule,
        NgxMaterialTimepickerModule,
        TranslateModule
    ],
    declarations: [
        ButtonsComponent,
        CardsComponent,
        CheckboxComponent,
        CarouselComponent,
        ChipsComponent,
        DatepickerComponent,
        DialogComponent,
        GridComponent,
        InputComponent,
        ListComponent,
        MenuComponent,
        ProgressComponent,
        RadioComponent,
        SelectComponent,
        SliderComponent,
        SnackbarComponent,
        TabsComponent,
        ToolbarComponent,
        TooltipComponent,
        TimepickerComponent,
        SettingDialogComponent,
        Dialog3Component,
        Dialog2Component,
        GoogleDialogComponent,
        ScrollableComponent
    ]
})
export class UiElementsModule { }
