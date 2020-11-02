import {
  AfterViewInit,
  Component, ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {PortfolioService} from './portfolio.service';
import {throwError} from 'rxjs';
import {CardComponent} from './card.component';
@Component({
   selector: 'app-portfolio',
   templateUrl: './portfolio.component.html'
})

export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading: boolean;
  isEmpty: boolean;
  sortedInfoList: any = [];
  localInfoList: any;
  sortedSticker: any;
  timeoutTimer: any;
  cardComponentRef: ComponentRef<CardComponent>[] = [];
  @ViewChild('cardContainer', {read: ViewContainerRef}) container: ViewContainerRef;
  constructor(private portfolioservice: PortfolioService, private resolver: ComponentFactoryResolver ) { }
  createCardComponent(List: any): void{
    for (let i = 0; i < List.length; i++) {
      const factory: ComponentFactory<CardComponent> = this.resolver.resolveComponentFactory(CardComponent);
      const component = this.container.createComponent(factory);
      component.instance.item = List[i];
      component.instance.index = i;
      this.cardComponentRef.push(component);
    }
  }
  ngOnDestroy(): void {
    clearTimeout(this.timeoutTimer);
  }
  ngAfterViewInit(): void {
    this.timeoutTimer = setTimeout(() => { this.isLoading = false; this.createCardComponent(this.sortedInfoList); }, 1200);
  }
  ngOnInit(): void {
    this.sortedInfoList = [];
    this.isLoading = true;
    this.localInfoList = JSON.parse(localStorage.getItem('portfolio'));
    if ( this.localInfoList == null || this.localInfoList.length === 0){
      this.isEmpty = true;
    }else{
      this.isEmpty = false;
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
      this.portfolioservice.getData(queryArray.toString()).subscribe(
        (data) => {
          this.sortedInfoList = Array.from(Object.keys(data), k => data[k]);
          this.sortedInfoList = this.sortedInfoList.sort((a, b) => {
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
          for (let i = 0; i < this.sortedInfoList.length; i++) {
            this.sortedInfoList[i].totalCost = this.sortedSticker[i].totalCost;
            this.sortedInfoList[i].quantity = this.sortedSticker[i].quantity;
            this.sortedInfoList[i].name = this.sortedSticker[i].name;
          }
        },
        (error) => {
          throwError(error);
        }
      );
    }

  }

}

