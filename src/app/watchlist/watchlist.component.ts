import {
  AfterViewInit,
  Component,
  ComponentFactory, ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {WatchlistService} from './watchlist.service';
import {throwError} from 'rxjs';
import {CardComponent} from './card.component';
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
  cardComponentRef: ComponentRef<CardComponent>[] = [];
  @ViewChild('cardContainer', {read: ViewContainerRef}) container: ViewContainerRef;
  constructor(private watchlistservice: WatchlistService, private resolver: ComponentFactoryResolver ) { }

  createCardComponent(List: any): void{
    for (const item of List) {
      const factory: ComponentFactory<CardComponent> = this.resolver.resolveComponentFactory(CardComponent);
      const component = this.container.createComponent(factory);
      component.instance.item = item;
      this.cardComponentRef.push(component);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutTimer);
    for ( const item of this.cardComponentRef){
      item.destroy();
    }
  }
  ngAfterViewInit(): void {
    this.timeoutTimer = setTimeout(() => { this.isLoading = false; this.createCardComponent(this.infoList); }, 1200);
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

}
