import { NgModule } from '@angular/core';
import { WatchlistComponent } from './watchlist.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
      WatchlistComponent
   ],
   providers: [],
   bootstrap: [WatchlistComponent]
})
export class WatchlistModule { }
