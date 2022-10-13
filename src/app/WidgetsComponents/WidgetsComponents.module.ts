import { NgModule , Directive} from '@angular/core';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';;
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { QuillModule } from 'ngx-quill';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxEchartsModule } from 'ngx-echarts';
import { TextMaskModule } from 'angular2-text-mask';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BarRatingModule } from "ngx-bar-rating";
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { TopsideMenuComponent } from './Menu/TopsideMenu/TopsideMenu.component';

import { AddNewCardComponent } from './PopUp/AddNewCard/AddNewCard.component';
import { SeeDialogComponent } from './PopUp/SeeDialog/SeeDialog.component';
import { DeleteListDialogComponent } from './PopUp/DeleteListDialog/DeleteListDialog.component';
import { AddListDialogComponent } from './PopUp/AddListDialog/AddListDialog.component';
import { EditDialogComponent } from './PopUp/EditDialog/EditDialog.component';
import { NewEmailPopupComponent } from './PopUp/NewEmailPopup/NewEmailPopup.component';
import { AddNewUserComponent } from './PopUp/AddNewUser/AddNewUser.component';

import { NewPostComponent } from './Form/NewPost/NewPost.component';

import { BrowserStaticComponent } from './List/BrowserStaticList/BrowserStaticList.component';
import { CategorySalesComponent } from './List/CategorySalesList/CategorySalesList.component';
import { InvoicesComponent } from './List/InvoicesList/InvoicesList.component';
import { RecentOrderComponent } from './List/RecentOrderList/RecentOrderList.component';
import { RecentSalesComponent } from './List/RecentSaleList/RecentSaleList.component';
import { SupportRequestComponent } from './List/SupportRequestList/SupportRequestList.component';
import { SupportTicketListComponent } from './List/SupportTicketList/SupportTicketList.component';
import { ToDoListComponent } from './List/ToDoList/ToDoList.component';
import { ProgressMapComponent } from './List/ProgresMapList/ProgressMapList.component';

import { PromoWidgetComponent } from './Cards/PromoWidget/PromoWidget.component';
import { DummyCardComponent } from './Cards/DummyCard/DummyCard.component';
import { IconCardComponent } from './Cards/IconCard/IconCard.component';
import { ImageCardComponent } from './Cards/ImageCard/ImageCard.component';
import { NotificationCardComponent } from './Cards/NotificationCard/NotificationCard.component';
import { SocialCardComponent } from './Cards/SocialCard/SocialCard.component';
import { UsersBarComponent } from './Cards/UsersBar/UsersBar.component';

import { DoughnutChartComponent } from './Charts/DoughnutChart/DoughnutChart.component';
import { GroupedVericalBarChartComponent } from './Charts/GroupedVericalBarChart/GroupedVericalBarChart.component';
import { HorizontalBarComponent } from './Charts/HorizontalBar/HorizontalBar.component';
import { SaleBarChartComponent } from './Charts/SaleBarChart/SaleBarChart.component';
import { VisitorLineChartComponent } from './Charts/VisitorLineChart/VisitorLineChart.component';

import { ReviewsComponent } from './Slider/Reviews/Reviews.component';
import { TopSellingComponent } from './Slider/TopSelling/TopSelling.component';

import { TitleComponent } from './TitleComponent/TitleComponent.component';
import { ShopGridComponent } from './Grid/ShopGrid/ShopGrid.component';
import { UserRequestComponent } from './Users/UserRequest/UserRequest.component';
import { UserEducationComponent } from './Users/UserEducation/UserEducation.component';
import { UserSkillsComponent } from './Users/UserSkills/UserSkills.component';
import { UserListComponent } from './Users/UserList/UserList.component';
import { SocialIconsComponent } from './Grid/SocialIcons/SocialIcons.component';
import { SessionSliderComponent } from './Slider/SessionSlider/SessionSlider.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LanguageDropDownComponent } from './Global/LanguageDropDown/LanguageDropDown.component';
import { NewMailsListComponent } from './List/NewMailsList/NewMailsList.component';
import { ServerStatusListComponent } from './List/ServerStatusList/ServerStatusList.component';
import { WeeklySummaryComponent } from './Charts/WeeklySummary/WeeklySummary.component';
import { DailySaleChartComponent } from './Charts/DailySaleChart/DailySaleChart.component';
import { ProductSaleChartComponent } from './Charts/ProductSaleChart/ProductSaleChart.component';
import { VisitSaleChartComponent } from './Charts/VisitSaleChart/VisitSaleChart.component';
import { CircleProgressComponent } from './Charts/CircleProgress/CircleProgress.component';
import { LineChartComponent } from './Charts/LineChart/LineChart.component';
import { LineChartWithAreaComponent } from './Charts/LineChartWithArea/LineChartWithArea.component';
import { EcommerceStatsCardComponent } from './Cards/EcommerceStatsCard/EcommerceStatsCard.component';
import { BlogLayoutComponent } from './Cards/BlogLayout/BlogLayout.component';
import { VectorMapComponent } from './Charts/VectorMap/VectorMap.component'

/**
 * This will import all modules from echarts.
 * If you only need custom modules,
 * please refer to [Custom Build] section.
 */
import * as echarts from 'echarts';

@NgModule({
    imports: [
        CommonModule,
        DropzoneModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatCardModule,
        MatDialogModule,
        MatDatepickerModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatTableModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatDividerModule,
        NgxEchartsModule.forRoot({
            echarts,
        }),
        MatSelectModule,
        FlexLayoutModule,
        TextMaskModule,
        QuillModule.forRoot({
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                    ['clean'],
                    ['link', 'image', 'video']
                ]
            },
        }),
        PerfectScrollbarModule,
        SlickCarouselModule,
        BarRatingModule,
        TranslateModule,
        MatProgressSpinnerModule,
        ChartsModule,
        NgCircleProgressModule.forRoot({
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300
        })
    ],
    declarations: [
        PromoWidgetComponent,
        NewPostComponent,
        TopsideMenuComponent,
        RecentSalesComponent,
        SupportRequestComponent,
        ToDoListComponent,
        DeleteListDialogComponent,
        AddListDialogComponent,
        InvoicesComponent,
        DummyCardComponent,
        ImageCardComponent,
        SocialCardComponent,
        CategorySalesComponent,
        RecentOrderComponent,
        TopSellingComponent,
        SaleBarChartComponent,
        ReviewsComponent,
        UsersBarComponent,
        ProgressMapComponent,
        NotificationCardComponent,
        SupportTicketListComponent,
        VisitorLineChartComponent,
        IconCardComponent,
        BrowserStaticComponent,
        SeeDialogComponent,
        HorizontalBarComponent,
        GroupedVericalBarChartComponent,
        DoughnutChartComponent,
        EditDialogComponent,
        AddNewCardComponent,
        TitleComponent,
        ShopGridComponent,
        UserRequestComponent,
        UserEducationComponent,
        UserSkillsComponent,
        UserListComponent,
        SocialIconsComponent,
        NewEmailPopupComponent,
        SessionSliderComponent,
        LanguageDropDownComponent,
        NewMailsListComponent,
        ServerStatusListComponent,
        WeeklySummaryComponent,
        DailySaleChartComponent,
        ProductSaleChartComponent,
        VisitSaleChartComponent,
        CircleProgressComponent,
        LineChartComponent,
        LineChartWithAreaComponent,
        EcommerceStatsCardComponent,
        BlogLayoutComponent,
        AddNewUserComponent,
        VectorMapComponent
    ],
    exports: [
        PromoWidgetComponent,
        NewPostComponent,
        TopsideMenuComponent,
        RecentSalesComponent,
        SupportRequestComponent,
        ToDoListComponent,
        InvoicesComponent,
        DummyCardComponent,
        ImageCardComponent,
        SocialCardComponent,
        CategorySalesComponent,
        RecentOrderComponent,
        TopSellingComponent,
        SaleBarChartComponent,
        ReviewsComponent,
        UsersBarComponent,
        ProgressMapComponent,
        NotificationCardComponent,
        SupportTicketListComponent,
        VisitorLineChartComponent,
        IconCardComponent,
        BrowserStaticComponent,
        HorizontalBarComponent,
        GroupedVericalBarChartComponent,
        DoughnutChartComponent,
        EditDialogComponent,
        TitleComponent,
        ShopGridComponent,
        UserRequestComponent,
        UserEducationComponent,
        UserSkillsComponent,
        UserListComponent,
        SocialIconsComponent,
        SessionSliderComponent,
        LanguageDropDownComponent,
        NewMailsListComponent,
        ServerStatusListComponent,
        WeeklySummaryComponent,
        DailySaleChartComponent,
        ProductSaleChartComponent,
        VisitSaleChartComponent,
        CircleProgressComponent,
        LineChartComponent,
        LineChartWithAreaComponent,
        EcommerceStatsCardComponent,
        BlogLayoutComponent,
        VectorMapComponent
    ],
    providers: [
        MatNativeDateModule
    ]
})
export class WidgetsComponentsModule { }
