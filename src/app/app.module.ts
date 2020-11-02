import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {SearchModule} from './search/search.module';
import {DetailsModule} from './details/details.module';
import { WatchlistModule } from './watchlist/watchlist.module';

const routes: Routes = [
  { path: '', loadChildren: './search/search.module#SearchModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsModule' },
  // { path: 'watchlist', loadChildren: './watchlist/watchlist.module#WatchlistModule' },
  { path: 'watchlist', loadChildren: () => import('./watchlist/watchlist.module').then(m => m.WatchlistModule) },
  // { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SearchModule,
    DetailsModule,
    WatchlistModule
  ],
  exports: [
   ],
  declarations: [
      AppComponent
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
