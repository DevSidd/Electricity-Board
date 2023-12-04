import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationUpdateComponent } from './components/application-update/application-update.component';
import { ApplicationChartComponent } from './components/application-chart/application-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    ApplicationUpdateComponent,
    ApplicationChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
