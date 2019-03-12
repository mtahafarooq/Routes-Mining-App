import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ReportsComponent } from './reports/reports.component';
import { RoutesListComponent } from './reports/routes-list/routes-list.component';
import { TableModule } from 'primeng/components/table/table';
import { TabViewModule } from 'primeng/tabview';
import { DataScrollerModule, DataTableModule, SharedModule, DropdownModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    ReportsComponent,
    RoutesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    TabViewModule,
    DataScrollerModule,
    DataTableModule,
    SharedModule,
    DropdownModule ,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
