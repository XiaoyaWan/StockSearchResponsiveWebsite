import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';
import {CardComponent} from './card.component';
const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [
   ],
  declarations: [
      PortfolioComponent,
      CardComponent
   ],
   providers: [],
   bootstrap: [PortfolioComponent, CardComponent]
})
export class PortfolioModule { }
