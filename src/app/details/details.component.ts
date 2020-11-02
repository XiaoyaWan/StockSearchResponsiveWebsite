import {
  AfterViewInit,
  Component,
  ComponentFactory, ComponentFactoryResolver,
  ComponentRef, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetailsService} from './details.service';
// tslint:disable-next-line:import-spacing
import {Options} from 'highcharts/highstock';
import * as Highcharts from 'highcharts/highstock';
import {FormControl} from '@angular/forms';
import {throwError} from 'rxjs';
import {AlertComponent} from './alert.component';

@Component({
  selector: 'app-details',
  styleUrls: ['./details.component.css'],
  templateUrl: './details.component.html'
})

export class DetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  componentRef: ComponentRef<AlertComponent>[] = [];
  timeoutTimer: any;
  alertTimeoutTimer: any = [];
  intervalTimer: any;
  @ViewChild('alertContainer', {read: ViewContainerRef}) container: ViewContainerRef;
  isLoading: boolean;
  isUpdate: boolean;
  errorSticker: boolean;
  constructor(private route: ActivatedRoute, private detailsService: DetailsService, private resolver: ComponentFactoryResolver) { }
  detailsChartHighcharts: typeof Highcharts = Highcharts;
  detailsChartOptions: Options;
  detailsList: any = [];
  detailsChartList: any = [];
  newsList: any = [];
  detailsRefreshList: any = [];
  market: string;
  chartColor: string;
  priceColor: string;
  caretColor: boolean;
  btnCollect: boolean;
  buyModalTotalPrice = 0;
  buyModalTotalQuantity = 0;
  buyControl = new FormControl('0');
  buyButtonDisable = true;
  query: string;
  price: any = [];
  ohlc: any = [];
  volume: any = [];
  table: string[] = [];
  tableTitle: string[] = ['Mid Price:', 'Ask Price:', 'Ask Size:', 'Bid Price:', 'Bid Size:'];
  tableEmptyTitle: string[] = ['', '', '', '', ''];
  createAlertComponent(collect: boolean, buy: boolean, ticker: string): void{
    // this.container.clear();
    const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);
    const component = this.container.createComponent(factory);
    component.instance.collect = collect;
    component.instance.buy = buy;
    component.instance.ticker = ticker;
    this.componentRef.push(component);
    this.alertTimeoutTimer.push(setTimeout(() => {
      component.destroy();
    }, 5000));
    // this.componentRef.instance.output.subscribe((msg: string) => console.log(msg) );
  }

  ngOnDestroy(): void{
    clearInterval(this.intervalTimer);
    clearTimeout(this.timeoutTimer);
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < this.componentRef.length; i++){
      this.componentRef[i].destroy();
      clearTimeout(this.alertTimeoutTimer[i]);
    }
  }
  ngAfterViewInit(): void {
    this.timeoutTimer = setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.isUpdate = false;
    this.query = this.route.snapshot.params.id.toUpperCase();
    const array = JSON.parse(localStorage.getItem('watchlist'));
    // check iscollected
    this.btnCollect = false;
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; array != null && i < array.length ; i++){
      if ( array[i].tickerId === this.query ){
        this.btnCollect = true;
      }
    }
    // service start data for sum tab
    this.detailsService.getData(this.query).subscribe(
      (data) => {
        this.detailsList = data;
      },
      (error) => {
        this.errorSticker = true;
        throwError( error );
      }
    );
    // data for news
    this.detailsService.getNews(this.query).subscribe(
      (data) => {
        this.newsList = data;
      },
      (error) => {
        this.errorSticker = true;
        throwError( error );
      }
    );
    // auto refreshing data
    this.detailsService.autoRefresh(this.query).subscribe(
      (data) => {
        this.detailsRefreshList = data;
        this.updatePage();
      },
      (error) => {
        this.errorSticker = true;
        throwError( error );
      }
    );
    // buy modal
    this.buyControl.valueChanges.subscribe(
      (input) => {
         if (input == null || !this.checkNum(input)){
           this.buyModalTotalQuantity = 0;
           this.buyModalTotalPrice = 0.00;
         }else{
           this.buyModalTotalPrice = Math.round(parseFloat(this.detailsRefreshList.last) * parseInt(input, 10) * 100) / 100;
           this.buyModalTotalQuantity = parseInt(input, 10);
         }
         if (input <= 0 ){
          this.buyButtonDisable = true;
         }else{
          this.buyButtonDisable = false;
         }
      },
      (error) => {
        console.log('ERROR');
        throw( error );
      }
    );
    this.errorSticker = false;
    // refresh every 15s
    this.intervalTimer = setInterval(() => {
      this.detailsService.autoRefresh(this.query).subscribe(
        (data) => {
          this.detailsRefreshList = data;
          this.updatePage();
        },
        (error) => {
          this.errorSticker = true;
          throwError( error );
        }
      );
    }, 15000);
  }
  // star button click
  btnCollectClick(): void {
    if (this.btnCollect === true){
      this.createAlertComponent(true, false, this.detailsList.ticker);
      this.btnCollect = false;

      const prevarray = JSON.parse(localStorage.getItem('watchlist'));
      const newarray = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < prevarray.length; i++) {
        if ( prevarray[i].tickerId !== this.detailsList.ticker ){
          newarray.push({tickerId: prevarray[i].tickerId, name: prevarray[i].name});
        }
      }
      localStorage.removeItem('watchlist');
      localStorage.setItem('watchlist', JSON.stringify(newarray));
    }else{
      this.createAlertComponent(false, false, this.detailsList.ticker);
      this.btnCollect = true;

      let array = JSON.parse(localStorage.getItem('watchlist'));
      const newItem = { tickerId: this.detailsList.ticker, name: this.detailsList.name};
      if ( array == null ){ array = []; }
      array.push(newItem);
      localStorage.setItem('watchlist', JSON.stringify(array));
    }
  }

  formalizeDate(input: string): string{
    return new Date(input).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  // buy button in modal
  buy(ticker: string, nameStr: string, price: string, num: number): void {
    this.createAlertComponent(false, true, this.detailsList.ticker);
    const prevarray = JSON.parse(localStorage.getItem('portfolio'));
    const newarray = [];
    let isBoughtBefore = false;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; prevarray != null && i < prevarray.length; i++) {
      if ( prevarray[i].tickerId !== ticker ){
        newarray.push({tickerId: prevarray[i].tickerId, name: prevarray[i].name,
          totalCost: prevarray[i].totalCost, quantity: prevarray[i].quantity});
      }else{
        isBoughtBefore = true;
        newarray.push(
          {tickerId: prevarray[i].tickerId, name: prevarray[i].name,
            totalCost: Math.round(parseFloat(prevarray[i].totalCost) * 100 + parseFloat(price) * num * 100) / 100,
            quantity: num + parseInt(prevarray[i].quantity, 10)});
      }
    }
    if (!isBoughtBefore){
      newarray.push({tickerId: ticker, name: nameStr, totalCost: Math.round(parseFloat(price) * num * 100) / 100, quantity: num});
    }
    localStorage.removeItem('portfolio');
    localStorage.setItem('portfolio', JSON.stringify(newarray));
  }

  getDate(currentTimestamp: string): string { // 11/1/2020, 16:39:55
    if (currentTimestamp === ''){ return '' ; }
    const temp = new Date(currentTimestamp).toLocaleString('en-US', { hour12: false});
    const date = temp.split(',')[0].split('/');
    return date[2] + '-' + this.pad(date[0]) + '-' + this.pad(date[1]) + temp.split(',')[1];
  }

  pad(d: string): string {
    return (parseInt(d, 10) < 10) ? '0' + d : d;
  }

  checkNum(nubmer): boolean {
    const re = /^\d+$/;
    if (re.test(nubmer)) {
      return true;
    }else{
      return false;
    }
  }

  CheckImgExists(imgurl: string): boolean {
     const ImgObj = new Image();
     ImgObj.src = imgurl;
     if (ImgObj.width > 0 && ImgObj.height > 0) {
          return true;
     } else {
          return false;
      }
  }

  updatePage(): void{
    if (this.detailsRefreshList.mid == null){
      this.table = this.tableEmptyTitle;
      this.market = 'alert alert-danger m-0 p-0 border-0';
    }else{
      this.table = this.tableTitle;
      this.market = 'alert alert-success m-0 p-0 border-0';
    }
    if ( this.detailsRefreshList.change.toString().slice(0, 1) === '-' ){
      this.priceColor = 'text-danger';
      this.caretColor = false;
    }else{
      this.priceColor = 'text-success';
      this.caretColor = true;
    }
    // chart data
    this.detailsChartList = this.detailsRefreshList.detailschart;
    this.updateChart();
  }

  updateChart(): void{
    const newprice = [];
    let i = 0;
    for (i; i < this.detailsChartList.length; i += 1) {
      const someDate = new Date(this.detailsChartList[i].date);
      newprice.push([
        Date.UTC(someDate.getFullYear(), someDate.getMonth(), someDate.getDate(), someDate.getHours(),
          someDate.getMinutes(), someDate.getSeconds()),
        this.detailsChartList[i].open,
      ]);
    }
    let newChartColor = '';
    if ( this.detailsRefreshList.change.toString().slice(0, 1) === '-' ){
      newChartColor = 'red';
    }else{
      newChartColor = 'green';
    }
    if ( newprice === this.price && this.chartColor === newChartColor ){
    }else{
      this.price = newprice;
      this.chartColor = newChartColor;
      this.detailsChartOptions = {
          title : { text : this.query },
          series: [{ name: this.query, type: 'line' , data: this.price, color: this.chartColor}],
          plotOptions: {
            series: {
                pointPlacement: 'on'
            }
          },
          navigator: {
            enabled: true,
            series: {
              type: 'area',
              color: this.chartColor,
            }
          },
          scrollbar: {
            enabled: true
          },
          legend: {
            enabled: false
          },
          rangeSelector: {
            enabled: false
          },
        };
    }
  }
}
