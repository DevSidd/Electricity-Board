import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationUpdateComponent } from './components/application-update/application-update.component';
import { ApplicationChartComponent } from './components/application-chart/application-chart.component';

const routes: Routes = [
  { path: '', component: ApplicationListComponent },
  { path: 'update/:id', component: ApplicationUpdateComponent },
  { path: 'chart', component: ApplicationChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
