import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PortfolioService} from './portfolio.service';
import {throwError} from 'rxjs';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
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

  buyControl = new FormControl('0');
  buyModalTotalQuantity = 0;
  buyButtonDisable = true;

  sellButtonControlQuantity: number;
  sellControl = new FormControl('0');
  sellModalTotalQuantity = 0;
  sellButtonDisable = true;

  timeoutTimer: any;
  constructor(private portfolioservice: PortfolioService ) { }
  ngOnDestroy(): void {
    clearTimeout(this.timeoutTimer);
  }
  ngAfterViewInit(): void {
    this.timeoutTimer = setTimeout(() => { this.isLoading = false; }, 1200);
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

    this.buyControl.valueChanges.subscribe(
      (input) => {
        if (input == null || !this.checkNum(input)){
          this.buyModalTotalQuantity = 0;
        }else{
          this.buyModalTotalQuantity =  parseInt(input, 10);
        }
        if (input > 0 ) {
          this.buyButtonDisable = false;
        }else{
          this.buyButtonDisable = true;
        }
      },
      (error) => {
        console.log('ERROR');
        throw( error );
      }
    );

    this.sellControl.valueChanges.subscribe(
      (input) => {
        if (input == null || !this.checkNum(input) ){
          this.sellModalTotalQuantity = 0;
        }else{
          this.sellModalTotalQuantity =  parseInt(input, 10);
        }
        if (input > 0 && input <= this.sellButtonControlQuantity){
          this.sellButtonDisable = false;
        }else{
          this.sellButtonDisable = true;
        }
      },
      (error) => {
        console.log('ERROR');
        throw( error );
      }
    );
  }
  checkNum(nubmer): boolean {
    const re = /^\d+$/;
    if (re.test(nubmer)) {
      return true;
    }else{
      return false;
    }
  }
  getAvgCost(totalCost: string, quantity: string): number {
    return Math.round(parseFloat(totalCost) / parseInt(quantity, 10) * 100) / 100;
  }

  getChange(totalCost: string, quantity: string, last: string): number {
    return parseFloat(last) - this.getAvgCost(totalCost, quantity);
  }

  getMarketValue(last: string, quantity: string): number {
    return Math.round(parseFloat(last) * parseInt(quantity, 10) * 100) / 100;
  }

  getTextColor(totalCost: string, quantity: string, last: string): string {
    if ( this.getChange(totalCost, quantity, last) > 0 ){
      return 'text-success';
    }else if ( this.getChange(totalCost, quantity, last) < 0 ){
      return 'text-danger';
    }else{
      return 'text-dark';
    }
  }

  changeUpCaret(totalCost: string, quantity: any, last: any): boolean{
    if ( this.getChange(totalCost, quantity, last) > 0 ){
      return true;
    }else if ( this.getChange(totalCost, quantity, last) < 0 ){
      return false;
    }else{
      return false;
    }
  }

  changeDownCaret(totalCost: string, quantity: any, last: any): boolean{
    if ( this.getChange(totalCost, quantity, last) > 0 ){
      return false;
    }else if ( this.getChange(totalCost, quantity, last) < 0 ){
      return true;
    }else{
      return false;
    }
  }

  buy(ticker: string, price: string, num: number): void {
    const prevarray = JSON.parse(localStorage.getItem('portfolio'));
    const newarray = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; prevarray != null && i < prevarray.length; i++) {
      if ( prevarray[i].tickerId !== ticker ){
        newarray.push({tickerId: prevarray[i].tickerId, name: prevarray[i].name,
          totalCost: prevarray[i].totalCost, quantity: prevarray[i].quantity});
      }else{
        newarray.push(
          {tickerId: prevarray[i].tickerId, name: prevarray[i].name,
            totalCost: Math.round(parseFloat(prevarray[i].totalCost) * 100 + parseFloat(price) * num * 100) / 100,
            quantity: num + parseInt(prevarray[i].quantity, 10)});
      }
    }
    localStorage.removeItem('portfolio');
    localStorage.setItem('portfolio', JSON.stringify(newarray));
    this.ngOnInit();
    this.isLoading = false;
  }

  setSellButtonControlQuantity(num: string): void{
    this.sellButtonControlQuantity = parseInt(num, 10);
  }

  sell(ticker: string, price: string, num: number): void {
    const prevarray = JSON.parse(localStorage.getItem('portfolio'));
    const newarray = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; prevarray != null && i < prevarray.length; i++) {
      if ( prevarray[i].tickerId !== ticker ){
        newarray.push({tickerId: prevarray[i].tickerId, name: prevarray[i].name,
          totalCost: prevarray[i].totalCost, quantity: prevarray[i].quantity});
      }else{
        const leftCost =
          Math.round(parseFloat(prevarray[i].totalCost) * 100 -
            parseFloat(prevarray[i].totalCost) / parseInt(prevarray[i].quantity, 10) * num * 100) / 100;
        if ( leftCost > 0 ){
          newarray.push(
          {tickerId: prevarray[i].tickerId, name: prevarray[i].name,
            totalCost: leftCost,
            quantity: parseInt(prevarray[i].quantity, 10) - num });
        }
      }
    }
    localStorage.removeItem('portfolio');
    localStorage.setItem('portfolio', JSON.stringify(newarray));
    this.ngOnInit();
    this.isLoading = false;
  }

  formalizeNumber(num: string, isDigit: boolean): string{
    if ( isDigit ){
      let isNegative = '';
      if (parseFloat(num) < 0){
        isNegative = '-';
      }
      const int = Math.abs(parseFloat(num)).toFixed(2).split('.')[0];
      const digit = parseFloat(num).toFixed(2).split('.')[1];
      return isNegative + this.formalizeNumber(int, false) + '.' + digit;
    }else{
      let isNegative = '';
      if (parseInt(num, 10) < 0){
        isNegative = '-';
      }
      const str = parseInt(num, 10).toString();
      let newstr = '';
      for ( let i = str.length; i >= 0; i -= 3){
        if ( i === str.length ) {
          if ( i - 3 > 0 ){
            newstr = ',' + str.slice( i - 3 , i);
          }else{
            newstr = str.slice(0 , i);
          }
        }else{
          if ( i - 3 > 0 ){
            newstr = ',' + str.slice( i - 3 , i) + newstr;
          }else{
            newstr = str.slice(0 , i) + newstr;
          }
        }
      }
      return isNegative + newstr;
    }
  }

  resetValue(): void {
    this.buyModalTotalQuantity = 0;
    this.buyControl.setValue('0');
    this.sellModalTotalQuantity = 0;
    this.sellControl.setValue('0');
  }
}

