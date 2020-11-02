import { NgModule } from '@angular/core';
import { WatchlistComponent } from './watchlist.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CardComponent} from './card.component';
const routes: Routes = [
  {
    path: '',
    component: WatchlistComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
  ],
  exports: [
   ],
  declarations: [
      WatchlistComponent,
      CardComponent
   ],
   providers: [],
   bootstrap: [WatchlistComponent, CardComponent]
})
export class WatchlistModule { }
