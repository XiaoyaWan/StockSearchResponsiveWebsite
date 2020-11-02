import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmachartComponent } from './smachart.component';
import {BrowserModule} from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    HighchartsChartModule,
  ],
  exports: [
    SmachartComponent
  ],
  declarations: [
    SmachartComponent
  ],
  bootstrap: [SmachartComponent]
})

export class SmachartModule { }
