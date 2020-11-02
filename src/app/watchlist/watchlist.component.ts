import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {WatchlistService} from './watchlist.service';
import {throwError} from 'rxjs';
@Component({
   selector: 'app-watchlist',
   templateUrl: './watchlist.component.html'
})

export class WatchlistComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading: boolean;
  isEmpty: boolean;
  infoList: any;
  sortedSticker: any;
  localInfoList: any;
  timeoutTimer: any;
  constructor(private watchlistservice: WatchlistService ) { }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutTimer);
  }
  ngAfterViewInit(): void {
    this.timeoutTimer = setTimeout(() => { this.isLoading = false; }, 1500);
  }
  ngOnInit(): void {
    this.infoList = [];
    this.isLoading = true;
    this.localInfoList = JSON.parse(localStorage.getItem('watchlist'));
    if ( this.localInfoList == null || this.localInfoList.length === 0){
      this.isEmpty = true;
    }else{
      this.isEmpty = false;
      const array = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.localInfoList.length; i++) {
         array.push({tickerId: this.localInfoList[i].tickerId, name: this.localInfoList[i].name});
      }
      this.sortedSticker = this.localInfoList.sort((a, b) => {
        const fa = a.tickerId;
        const fb = b.tickerId;
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      });
      const queryArray = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.sortedSticker.length; i++) {
         queryArray.push(this.sortedSticker[i].tickerId);
      }
      this.watchlistservice.getData(queryArray.toString()).subscribe(
        (data) => {
          this.infoList = Array.from(Object.keys(data), k => data[k]);
          this.infoList = this.infoList.sort((a, b) => {
            const fa = a.ticker;
            const fb = b.ticker;
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
           });
          for (let i = 0; i < this.sortedSticker.length; i++) {
            this.infoList[i].name = this.sortedSticker[i].name;
          }
        },
        (error) => {
          throwError(error);
        }
      );
    }
  }

  changeTextColor(trend: string): string{
    if ( trend === '+' ){
      return 'text-success';
    }else if ( trend === '-' ){
      return 'text-danger';
    }else{
      return 'text-dark';
    }
  }
  changeUpCaret(trend: string): boolean{
    if ( trend === '+' ){
      return true;
    }else{
      return false;
    }
  }
  changeDownCaret(trend: string): boolean{
    if ( trend === '-' ){
      return true;
    }else{
      return false;
    }
  }

  removeLocalStorage(ticker: string): void {
    const prevarray = JSON.parse(localStorage.getItem('watchlist'));
    const newarray = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < prevarray.length; i++) {
      if ( prevarray[i].tickerId !== ticker ){
        newarray.push({tickerId: prevarray[i].tickerId, name: prevarray[i].name});
      }
    }
    localStorage.removeItem('watchlist');
    localStorage.setItem('watchlist', JSON.stringify(newarray));
    this.ngOnInit();
    this.isLoading = false;
  }
}
