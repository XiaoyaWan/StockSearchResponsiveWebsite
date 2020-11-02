import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DetailsComponent } from './details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HighchartsChartModule } from 'highcharts-angular';
import {ReactiveFormsModule} from '@angular/forms';
import {SmachartModule} from './smachart/smachart.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AlertComponent} from './alert.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    SmachartModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    DetailsComponent,
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ],
  bootstrap: [DetailsComponent]
})


export class DetailsModule {


}
